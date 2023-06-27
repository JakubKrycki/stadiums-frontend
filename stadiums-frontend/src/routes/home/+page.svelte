<script lang="ts">
	import Header from "$lib/Header.svelte";
	import { accountService } from "../../services/account-service";
	import type { PageData } from "./$types";

	export let data: PageData
	const userEMail = accountService.getUserEMail(data.token);
</script>

<Header />

<p class="is-size-3 mt-6 pt-6">Logged user: {userEMail}</p>