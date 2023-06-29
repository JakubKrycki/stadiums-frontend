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
    let chartDataByCategory = {
        labels: [""],
            datasets: [
                {
                    values: [0]
                }
            ]
    };
    let chartDataByPrivacy = {
        labels: [""],
            datasets: [
                {
                    values: [0]
                }
            ]
    };

    onMount(async () => {
        const placemarks = await placemarkService.getPlacemarks();
        const placemarksMapByCategory = await getNumberOfEachByAttribute(placemarks, 'category');
        const placemarksMapByPrivacy = await getNumberOfEachByAttribute(placemarks, 'private');
        const privateLabels = Array.from(placemarksMapByPrivacy.keys()).map((value) => value === "True" ? "Private" : "Public");
        chartDataByCategory = {
            labels: Array.from(placemarksMapByCategory.keys()),
            datasets: [
                {
                    values: Array.from(placemarksMapByCategory.values())
                }
            ]
        };
        chartDataByPrivacy = {
            labels: privateLabels,
            datasets: [
                {
                    values: Array.from(placemarksMapByPrivacy.values())
                }
            ]
        };
        loaded = true;
    });
</script>


{#if role === "ADMIN"}
<Header isAdmin={role}/>

<section class="columns mt-6 pt-3 is-multiline">
    <div class="column is-full">
        <div class="box has-text-centered">
            <p class="is-size-3">Number of placemarks by countries</p>
        </div>
    </div>
    <div class="column is-half is-vcentered">
        <div class="box">
            {#if loaded}
            <Chart data={chartDataByCategory} type="bar" />
            {/if}
        </div>
    </div>
    <div class="column is-half is-vcentered">
        <div class="box">
            {#if loaded}
            <Chart data={chartDataByCategory} type="pie" />
            {/if}
        </div>
    </div>
    <div class="column is-full">
        <div class="box has-text-centered">
            <p class="is-size-3">Number of placemarks by privacy</p>
        </div>
    </div>
    <div class="column is-half is-vcentered">
        <div class="box">
            {#if loaded}
            <Chart data={chartDataByPrivacy} type="bar" />
            {/if}
        </div>
    </div>
    <div class="column is-half is-vcentered">
        <div class="box">
            {#if loaded}
            <Chart data={chartDataByPrivacy} type="pie" />
            {/if}
        </div>
    </div>
</section>
{/if}