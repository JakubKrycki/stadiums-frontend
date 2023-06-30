<script lang='ts'>
	import { goto } from "$app/navigation";
	import { placemarkService } from "../services/placemark-service";
    import type { PlacemarkReadable } from "../services/placemark-types";
    import { toPlacemarkPlus } from "../services/placemark-types";
	import UploadWidget from "./UploadWidget.svelte";

    let editMode = false;
    let url = "";
    export let placemark: PlacemarkReadable;
    export let isChanged: boolean;
    export let editable: boolean;

    async function updatePlacemark() {
        let success = await placemarkService.updatePlacemark(toPlacemarkPlus(placemark));
		if (success) {
            editMode = false;
            isChanged = true;
		}
    }

    function goToGallery() {
        localStorage.selectedPlacemark = JSON.stringify({ placemark_id: placemark._id });
        if (editable) {
            goto("/my-placemarks/gallery");
        } else {
            goto("/placemarks/gallery");
        }
    }

    $: url && placemarkService.uploadImage(placemark._id, url);
</script>

<div class='pl-5 pt-4 is-size-5'>
    {#if editable}
    <div class='block'>
        <button class={"button is-size-7 is-rounded " + (editMode ? "is-info is-light" : "is-active")} on:click={() => {editMode = !editMode}}>Edit mode</button>
        <button class={"button is-size-7 is-rounded " + (editMode ? "is-info is-light" : "is-hidden")} on:click={() => updatePlacemark()}>Save</button>
    </div>
    {/if}
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Name:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.name} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Team:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.team} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Country:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.category} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Private:</div>
        <div class="column"><input class="checkbox" type="checkbox" bind:checked={placemark.private} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Latitude:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.latitude} type="number" disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Longitude:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.longitude} type="number" disabled={!editMode}/></div>
    </div>
    {#if !editable}
    <div class='block'>
        <span>Added by: {placemark.added_by_username}</span>
    </div>
    {:else}
    <div class='block'>
        <UploadWidget bind:url />
    </div>
    {/if}
    <div class='block'>
        <button class="button is-info is-rounded is-small" on:click={goToGallery}>See images</button>
    </div>

</div>