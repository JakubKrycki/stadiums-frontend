<script lang="ts">
	import Header from "$lib/Header.svelte";
	import type { PlacemarkReadable } from "../../services/placemark-types";
	import PlacemarkListingCard from "../../lib/PlacemarkListingCard.svelte";
	import PlacemarkDetailView from "../../lib/PlacemarkDetailView.svelte";
	import { placemarkService } from "../../services/placemark-service";
	import type { PageData } from "./$types";
	import PlacemarkCreateView from "$lib/PlacemarkCreateView.svelte";
	import { getUserRole } from "../../services/user-utils";

    export let data: PageData;
    let placemarks: PlacemarkReadable[] = data.placemarks;
    let selectedPlacemark: PlacemarkReadable;
    let isChanged = true;
    let isCreatorOpen = false;

    function selectPlacemark(placemark: PlacemarkReadable) {
        selectedPlacemark = placemark;
        isCreatorOpen = false;
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


<Header isAdmin={getUserRole(data.token)}/>
<div class="hero-body is-fullheight">
	<div class="container is-fluid" style="height: 35vw;">
		<div class="columns">
            <div class="column is-1"></div>
            <div class="column is-5">
                <button class="is-flex button is-info is-rounded is-size-5" on:click={() => isCreatorOpen = !isCreatorOpen}>
                    <p class="column has-text-white is-size-5">+ Create Placemark</p>
                </button>
                <div class="columns mt-2 is-full is-multiline" style="height: 31vw; overflow-y: scroll;">
                {#each placemarks as placemark}
                <PlacemarkListingCard placemark={placemark} on:click={() => selectPlacemark(placemark)} />
                {/each}
                </div>
            </div>
            {#if isCreatorOpen || selectedPlacemark}
            <div class="column is-1"></div>
            <div class="column is-4 box" style="height: 35vw;">
                {#if isCreatorOpen}
                <PlacemarkCreateView token={data.token} bind:isCreatorOpen bind:isChanged />
                {:else if selectedPlacemark}
                <PlacemarkDetailView placemark={selectedPlacemark} bind:isChanged editable={true} />
                {/if}
            </div>
            {/if}
        </div>
    </div>
</div>
