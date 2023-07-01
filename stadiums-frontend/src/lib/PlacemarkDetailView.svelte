<script lang='ts'>
	import { goto } from "$app/navigation";
	import { placemarkService } from "../services/placemark-service";
    import type { PlacemarkReadable } from "../services/placemark-types";
    import { toPlacemarkPlus } from "../services/placemark-types";
	import UploadWidget from "./UploadWidget.svelte";

    let editMode = false;
    let url = "";
    let weather: any = null;
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

    async function getWeather() {
        weather = await placemarkService.getConditions(placemark.latitude, placemark.longitude);
        if (weather.weatherText === "Clouds") {
            weather.weatherIcon = "fas fa-solid fa-cloud";
        } else if (weather.weatherText === "Mist" || weather.weatherText === "Clear") {
            weather.weatherIcon = "fas fa-solid fa-sun";
        } else if (weather.weatherText === "Rain") {
            weather.weatherIcon = "fas fa-solid fa-cloud-rain";
        } 
    }
    
    $: url && placemarkService.uploadImage(placemark._id, url);
    $: placemark && getWeather();
</script>

<div class="columns is-full is-centered is-vcentered">
    <div class="column is-10 is-centered mt-6">
        {#if editable}
        <div class='field is-horizontal'>
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    <button class={"button is-size-7 is-rounded " + (editMode ? "is-info is-light" : "is-active")} on:click={() => {editMode = !editMode}}>Edit mode</button>
                    <button class={"button is-size-7 is-rounded " + (editMode ? "is-info is-light" : "is-hidden")} on:click={() => updatePlacemark()}>Save</button>
                </div>
            </div>
        </div>
        {/if}
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Name:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-rounded" bind:value={placemark.name} disabled={!editMode}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Team:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-rounded" bind:value={placemark.team} disabled={!editMode}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Country:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-rounded" bind:value={placemark.category} disabled={!editMode}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Private:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="checkbox" type="checkbox" bind:checked={placemark.private} disabled={!editMode}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Latitude:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-rounded" bind:value={placemark.latitude} type="number" disabled={!editMode}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Longitude:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-rounded" bind:value={placemark.longitude} type="number" disabled={!editMode}/>
                    </div>
                </div>
            </div>
        </div>
        {#if !editable}
        <div class='field is-horizontal'>
            <div class="field-label">
                <label class="label">Add:</label>
            </div>
            <div class="field-body">
                <label class="label">{placemark.added_by_username}</label>
            </div>
        </div>
        {/if}
        <div class='field is-horizontal'>
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    {#if editable}
                    <UploadWidget bind:url />
                    {/if}
                    <button class="button is-info is-rounded is-small" on:click={goToGallery}>See images</button>
                </div>
            </div>
        </div>
        {#if weather != null}
        <div class='field is-horizontal'>
            <div class="field-label"><label class="label">Weather:</label></div>
            <div class="field-body">
                <div class="field">
                    <span class="icon-text">
                        <span class="icon">
                            <i class={weather.weatherIcon}></i>
                        </span>
                        &nbsp;{weather.weatherText}
                    </span>
                </div>
            </div>
        </div>
        <div class='field is-horizontal'>
            <div class="field-label"><label class="label">Temperature:</label></div>
            <div class="field-body">
                <div class="field">
                    {weather.temperature} &#8451
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>