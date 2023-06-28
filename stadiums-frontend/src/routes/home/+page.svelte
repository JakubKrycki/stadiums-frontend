<script lang="ts">
	import Header from "$lib/Header.svelte";
	import LeafletMap from "$lib/LeafletMap.svelte";
	import { onMount } from "svelte";
	import { accountService } from "../../services/account-service";
	import { getMarkerLayer } from "../../services/placemark-utils";
	import { placemarkService } from "../../services/placemark-service";

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

<Header />

<section class="mt-6 pt-2">
	<section class="mt-6">
		<LeafletMap bind:this={map} />
	</section>
</section>