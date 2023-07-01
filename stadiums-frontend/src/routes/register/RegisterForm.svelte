<script lang="ts">
	import { goto } from "$app/navigation";
	import { accountService } from "../../services/account-service";
    import type { UserRequestDto } from "../../services/account-types";

    let repeatedPassword = "";
	let errorMessage = "";
	const user: UserRequestDto = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};

	async function signup() {
		if (user.password !== repeatedPassword) {
			errorMessage = "Password and repeated password have to be the same!";
			return;
		}
		let success = await accountService.signup(user);
		if (success) {
			goto("/");
		} else {
			errorMessage = "Error Trying to sign up";
		}
	}
</script>

<form on:submit|preventDefault={signup}>
	<div class="field is-horizontal">
		<div class="field-body">
			<div class="field">
				<input bind:value={user.firstName} id="firstname" class="input is-size-6 is-rounded" type="text" placeholder="First name" name="firstName" />
			</div>
			<div class="field">
				<input bind:value={user.lastName} id="lastname" class="input is-size-6 is-rounded" type="text" placeholder="Last name" name="lastName" />
			</div>
		</div>
	</div>
	<div class="field">
		<input bind:value={user.email} id="email" class="input is-size-6 is-rounded" type="text" placeholder="Email" name="email" />
	</div>
	<div class="field">
		<input bind:value={user.password} id="password" class="input is-size-6 is-rounded" type="password" placeholder="Password" name="password" />
	</div>
	<div class="field">
		<input bind:value={repeatedPassword} id="repeatedPassword" class="input is-size-6 is-rounded" type="password" placeholder="Repeat Password" name="repeatedPassword" />
	</div>
	<button class="button is-link is-size-5 is-rounded">Register</button>
</form>
{#if errorMessage}
	<div class="section">
		{errorMessage}
	</div>
{/if}
