<script lang='ts'>
	import { onMount } from "svelte";
	import { placemarkService } from "../../../services/placemark-service";
	import type { ImagePlus } from "../../../services/placemark-types";
	import Header from "$lib/Header.svelte";
	import { getUserRole } from "../../../services/user-utils";
	import { accountService } from "../../../services/account-service";
	import Gallery from "$lib/Gallery.svelte";

    let loaded = false;
    let token = '';
    let images: ImagePlus[] = [];
    let currentImage = 0;

    onMount(async () => {
        accountService.checkPageRefresh();
        const accountCredentials = localStorage.account;
        if (accountCredentials) {
            const savedUser = JSON.parse(accountCredentials);
            token = savedUser.token;
        }
        await loadImages();
        loaded = true;
    });

    async function deleteImage() {
        const image = images[currentImage];
        const placemarkIdCredentials = localStorage.selectedPlacemark;
        let placemark_id = '';
        if (placemarkIdCredentials) {
            const savedPlacemarkId = JSON.parse(placemarkIdCredentials);
            placemark_id = savedPlacemarkId.placemark_id;
        }
        await placemarkService.deleteImage(placemark_id, image._id);
        await loadImages();
        currentImage = 0;
    }

    async function loadImages() {
        const placemarkIdCredentials = localStorage.selectedPlacemark;
        let placemark_id = '';
        if (placemarkIdCredentials) {
            const savedPlacemarkId = JSON.parse(placemarkIdCredentials);
            placemark_id = savedPlacemarkId.placemark_id;
        }
        images = await placemarkService.getImages(placemark_id);
    }


</script>


{#if loaded}
<Header isAdmin={getUserRole(token)}/>
<div class="columns is-full is-multiline pt-4 mt-6 is-vcentered">
    <div class="column is-3">
        <a href="/my-placemarks" class="is-size-4 has-text-weight-medium has-text-black">
			<div class="icon">
				<i class="fas fa-solid fa-chevron-left"></i>
			</div>
			Back my placemarks
		</a>
    </div>
    <div class="column is-6 has-text-centered">
        {#if images.length > 0}
        <button class="button is-danger is-outlined" on:click={deleteImage}>
            <span>Delete the image</span>
            <span class="icon is-small">
                <i class="fas fa-trash"></i>
            </span>
        </button>
        {/if} 
    </div>
    <div class="column is-3"></div>
    <Gallery {images} bind:currentImage />
</div>
{/if}