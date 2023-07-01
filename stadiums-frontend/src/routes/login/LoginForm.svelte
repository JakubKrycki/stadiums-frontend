<script lang="ts">
	import { goto } from "$app/navigation";
	import { accountService } from "../../services/account-service";

	let email = "";
	let password = "";
	let errorMessage = "";

	async function login() {
		let success = await accountService.login(email, password);
		if (success) {
			goto("/home");
		} else {
			email = "";
			password = "";
			errorMessage = "Invalid Credentials";
		}
	}
</script>

<form on:submit|preventDefault={login}>
	<div class="field is-size-3">
		<input bind:value={email} class="input is-size-6 is-rounded" id="email" name="email" placeholder="Email" type="email" />
	</div>
	<div class="field">
		<input bind:value={password} class="input is-size-6 is-rounded" id="password" name="password" placeholder="Password" type="password" />
	</div>
	<button class="button is-link is-size-5 is-rounded">Login</button>
</form>
{#if errorMessage}
	<div class="section">
		{errorMessage}
	</div>
{/if}
