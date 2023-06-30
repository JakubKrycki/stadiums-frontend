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

    onMount(async () => {
        const placemarkIdCredentials = localStorage.selectedPlacemark;
        accountService.checkPageRefresh();
        const accountCredentials = localStorage.account;
        let placemark_id = '';
        if (placemarkIdCredentials) {
            const savedPlacemarkId = JSON.parse(placemarkIdCredentials);
            placemark_id = savedPlacemarkId.placemark_id;
        }
        if (accountCredentials) {
            const savedUser = JSON.parse(accountCredentials);
            token = savedUser.token;
        }
        images = await placemarkService.getImages(placemark_id);
        loaded = true;
    });
</script>


{#if loaded}
<Header isAdmin={getUserRole(token)}/>
<div class="columns is-full is-multiline pt-4 mt-6 is-vcentered">
    <div class="column is-full">
        <a href="/placemarks" class="is-size-4 has-text-weight-medium has-text-black">
			<div class="icon">
				<i class="fas fa-solid fa-chevron-left"></i>
			</div>
			Back my placemarks
		</a>
    </div>
    <Gallery images={images} />
</div>
{/if}