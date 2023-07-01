<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Chart from "svelte-frappe-charts";
	import { onMount } from "svelte";
	import { getUserRole } from "../../../services/user-utils";
	import type { PageData } from "./$types";
	import { userService } from "../../../services/user-service";
	import { getNumberOfEachByAttribute } from "../../../services/utils";

    export let data: PageData;
    const chartTypes = ["bar", "pie", "percentage"];
    let selectedChartType: string = "bar";
    const role = getUserRole(data.token);
    let loaded = false;
    let chartData = {
        labels: [""],
            datasets: [
                {
                    values: [0]
                }
            ]
    };

    onMount(async () => {
        const users = await userService.getUsers();
        const usersMap = await getNumberOfEachByAttribute(users, 'role');
        chartData = {
            labels: Array.from(usersMap.keys()),
            datasets: [
                {
                    values: Array.from(usersMap.values())
                }
            ]
        };
        loaded = true;
    });

    $: selectedChartType
</script>


{#if role === "ADMIN"}
<Header isAdmin={role}/>
<div class="hero-body is-fullheight">
	<div class="container is-fluid" style="height: 35vw;">
        <div class="columns is-multiline is-centered">
            <div class="column is-8">
                <div class="box has-text-centered my-6">
                    <p class="is-size-3">Number of users with roles</p>
                </div>
            </div>
            <div class="column is-full is-centered is-vcentered">
                <div class="columns is-centered is-vcentered">
                    <div class="column is-2 box is-vcentered">
                        <div class="control">
                            <label class="label is-size-6" for="chart-type">Chart type</label>
                            <div class="select is-size-6 is-fullwidth is-rounded">
                                <select bind:value={selectedChartType}>
                                    {#each chartTypes as chartType}
                                        <option>{chartType}</option>
                                    {/each}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half is-vcentered is-centered">
                        <div class="box">
                            {#if loaded}
                            {#key selectedChartType}
                            <Chart data={chartData} type={selectedChartType} />
                            {/key}
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}