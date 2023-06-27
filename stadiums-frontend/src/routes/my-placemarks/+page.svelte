<script lang="ts">
	import Header from "$lib/Header.svelte";
	import type { Placemark } from "../../services/placemark-types";
	import PlacemarkListingCard from "../../lib/PlacemarkListingCard.svelte";
	import PlacemarkDetailView from "../../lib/PlacemarkDetailView.svelte";
	import { placemarkService } from "../../services/placemark-service";
	import type { PageData } from "./$types";

    export let data: PageData;
    let placemarks: Placemark[] = data.placemarks;
    let selectedPlacemark: Placemark;
    let isChanged = true;

    function selectPlacemark(placemark: Placemark) {
        selectedPlacemark = placemark;
    }

    async function reload() {
        placemarks = await placemarkService.getPlacemarksByUser(data.token);
        if (isChanged) {
            isChanged = false;
        }
    }

    $: isChanged && reload();
    $: placemarks;
</script>


<Header />

<section class="columns is-full  mx-6">
    <div class="column is-half mt-6 pt-5">
        <div class="columns is-full is-multiline">
        {#each placemarks as placemark}
        <PlacemarkListingCard placemark={placemark} on:click={() => selectPlacemark(placemark)} />
        {:else}
        <span>No placemarks for now!</span>
        {/each}
        </div>
		<button class="is-flex button is-info is-rounded is-size-5">
			<p class="column has-text-white is-size-5">+ Create Placemark</p>
		</button>
    </div>
    <div class="column is-half hero is-fullheight-with-navbar mt-6 pt-6 box">
        {#if selectedPlacemark}
            <PlacemarkDetailView placemark={selectedPlacemark} bind:isChanged userToken={data.token} />
        {/if}  
    </div>
    
</section>
