<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Chart from "svelte-frappe-charts";
	import { onMount } from "svelte";
	import { getUserRole } from "../../../services/user-utils";
	import type { PageData } from "./$types";
	import { placemarkService } from "../../../services/placemark-service";
	import { getNumberOfEachByAttribute } from "../../../services/utils";
	import type { PlacemarkReadable } from "../../../services/placemark-types";

    export let data: PageData;
    const role = getUserRole(data.token);
    let placemarks: [];
    const chartTypes = ["bar", "pie", "percentage"];
    const chartAttributes = ["private", "country"];
    let selectedChartType: string = "bar";
    let selectedChartAttribute: string = "country";
    let chartData = {
        labels: [""],
            datasets: [
                {
                    values: [0]
                }
            ]
    };
    let loaded = false;

    onMount(async () => {
        placemarks = await placemarkService.getPlacemarks();
        await changeChart();
    });

    async function changeChart() {
        loaded = false;
        if (selectedChartAttribute === "country") {
            chartData = await changeToCategoryChart();
        } else if (selectedChartAttribute === "private") {
            chartData = await changeToPrivacyChart();
        }
        loaded = true;
    }

    async function changeToCategoryChart() {
        const placemarksMapByCategory = await getNumberOfEachByAttribute(placemarks, 'category');
        return { labels: Array.from(placemarksMapByCategory.keys()), datasets: [{ values: Array.from(placemarksMapByCategory.values())}]}
        
    }

    async function changeToPrivacyChart() {
        const placemarksMapByPrivacy = await getNumberOfEachByAttribute(placemarks, 'private');
        const privateLabels = Array.from(placemarksMapByPrivacy.keys()).map((value) => value === "True" ? "Private" : "Public");
        return { labels: privateLabels, datasets: [{ values: Array.from(placemarksMapByPrivacy.values())}]}
    }
</script>


{#if role === "ADMIN"}
<Header isAdmin={role}/>

<section class="columns pt-6 mt-6 is-multiline is-centered">
    <div class="column is-full">
        <div class="box has-text-centered mt-6 mb-6">
            <p class="is-size-3">Number of placemarks by {selectedChartAttribute}</p>
        </div>
    </div>
    <div class="column is-3">
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
        <div class="control">
            <label class="label is-size-6" for="chart-attribute">Chart attribute</label>
            <div class="select is-size-6 is-fullwidth is-rounded">
                <select bind:value={selectedChartAttribute} on:change={changeChart}>
                    {#each chartAttributes as chartAttribute}
                        <option>{chartAttribute}</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
    <div class="column is-half is-vcentered is-centered">
        <div class="box">
            {#if loaded}
            {#key selectedChartType && chartData}
            <Chart data={chartData} type={selectedChartType} />
            {/key}
            {/if}
        </div>
    </div>
</section>
{/if}