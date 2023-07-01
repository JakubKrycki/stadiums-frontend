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
<div class="hero-body is-fullheight">
	<div class="container is-fluid" style="height: 35vw;">
		<div class="columns">
            <div class="column is-1"></div>
            <div class="column is-5" style="height: 37vw; overflow-y: scroll;">
                <div class="columns is-full is-multiline">
                {#each data.placemarks as placemark}
                <PlacemarkListingCard placemark={placemark} on:click={() => selectPlacemark(placemark)} />
                {:else}
                <div>
                    <span class="is-size-4">No stadiums :(</span>
                    <br />
                    <span class="is-size-4">Be first and add one!</span>
                </div>
                {/each}
                </div>
            </div>
            {#if selectedPlacemark}
            <div class="column is-1"></div>
            <div class="column is-4 box" style="height: 35vw;">
                <PlacemarkDetailView placemark={selectedPlacemark} isChanged={false} editable={false} />
            </div>
            {/if}
        </div>
    </div>
</div>
