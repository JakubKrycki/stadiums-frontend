<script lang="ts">
	import Header from "$lib/Header.svelte";
	import LeafletMap from "$lib/LeafletMap.svelte";
	import { onMount } from "svelte";
	import { accountService } from "../../services/account-service";
	import { getMarkerLayer } from "../../services/placemark-utils";
	import { placemarkService } from "../../services/placemark-service";
	import type { PageData } from "./$types";
	import { getUserRole } from "../../services/user-utils";

    export let data: PageData;
	let map: LeafletMap;

	onMount(async () => {
		accountService.checkPageRefresh();
		const accountCredentials = localStorage.account;
		let token = '';
		if (accountCredentials) {
			const savedUser = JSON.parse(accountCredentials);
			token = savedUser.token;
		}
		const donations = await placemarkService.getAllPlacemarksVisibleForUser(token);
		const donationMarkerLayer = getMarkerLayer(donations);
		map.populateLayer(donationMarkerLayer);
	});
</script>

<Header isAdmin={getUserRole(data.token)}/>
<div class="hero-body">
	<div class="container has-text-centered">
		<LeafletMap bind:this={map} />
	</div>
</div>