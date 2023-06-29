<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Chart from "svelte-frappe-charts";
	import { onMount } from "svelte";
	import { getUserRole } from "../../../services/user-utils";
	import type { PageData } from "./$types";
	import { userService } from "../../../services/user-service";
	import { getNumberOfEachByAttribute } from "../../../services/utils";

    export let data: PageData;
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
</script>


{#if role === "ADMIN"}
<Header isAdmin={role}/>

<section class="columns pt-6 mt-6 is-multiline">
    <div class="column is-full">
        <div class="box has-text-centered mt-6 mb-6">
            <p class="is-size-3">Number of users with roles</p>
        </div>
    </div>
    <div class="column is-half is-vcentered">
        <div class="box">
            {#if loaded}
            <Chart data={chartData} type="bar" />
            {/if}
        </div>
    </div>
    <div class="column is-half is-vcentered">
        <div class="box">
            {#if loaded}
            <Chart data={chartData} type="pie" />
            {/if}
        </div>
    </div>
</section>
{/if}