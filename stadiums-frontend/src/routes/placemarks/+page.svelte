<script lang="ts">
	import Header from "$lib/Header.svelte";
	import type { PlacemarkReadable } from "../../services/placemark-types";
	import PlacemarkListingCard from "../../lib/PlacemarkListingCard.svelte";
	import PlacemarkDetailView from "../../lib/PlacemarkDetailView.svelte";
	import type { PageData } from "./$types";
	import { getUserRole } from "../../services/user-utils";

    export let data: PageData;
    let placemarks: PlacemarkReadable[] = data.placemarks;
    let selectedPlacemark: PlacemarkReadable;

    function selectPlacemark(placemark: PlacemarkReadable) {
        selectedPlacemark = placemark;
    }

    $: placemarks;
</script>


<Header isAdmin={getUserRole(data.token)}/>

<section class="columns is-full mx-6">
    <div class="column is-half mt-6 pt-5">
        <div class="columns is-full is-multiline">
        {#each data.placemarks as placemark}
        <PlacemarkListingCard placemark={placemark} on:click={() => selectPlacemark(placemark)} />
        {:else}
        <div class="pt-6">
            <span class="is-size-4">No stadiums :(</span>
            <br />
            <span class="is-size-4">Be first and add one!</span>
        </div>
        {/each}
        </div>
    </div>
    <div class="column is-half hero is-fullheight-with-navbar mt-6 pt-6 box">
        {#if selectedPlacemark}
        <PlacemarkDetailView placemark={selectedPlacemark} isChanged={false} editable={false} />
        {/if}
    </div>
    
</section>
