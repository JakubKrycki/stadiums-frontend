<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Chart from "svelte-frappe-charts";
	import { onMount } from "svelte";
	import { getUserRole } from "../../../services/user-utils";
	import type { PageData } from "./$types";
	import { placemarkService } from "../../../services/placemark-service";
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
        const placemarks = await placemarkService.getPlacemarks();
        const placemarksMap = await getNumberOfEachByAttribute(placemarks, 'category');
        chartData = {
            labels: Array.from(placemarksMap.keys()),
            datasets: [
                {
                    values: Array.from(placemarksMap.values())
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
            <p class="is-size-3">Number of placemarks from countries</p>
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