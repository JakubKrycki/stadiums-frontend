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
				<label for="firstname" class="label is-size-5">First Name</label>
				<input bind:value={user.firstName} id="firstname" class="input is-size-6 is-rounded" type="text" placeholder="Enter first name" name="firstName" />
			</div>
			<div class="field">
				<label for="lastname" class="label is-size-5">Last Name </label>
				<input bind:value={user.lastName} id="lastname" class="input is-size-6 is-rounded" type="text" placeholder="Enter last name" name="lastName" />
			</div>
		</div>
	</div>
	<div class="field">
		<label for="email" class="label is-size-5">Email</label>
		<input bind:value={user.email} id="email" class="input is-size-6 is-rounded" type="text" placeholder="Enter email" name="email" />
	</div>
	<div class="field">
		<label for="password" class="label is-size-5">Password</label>
		<input bind:value={user.password} id="password" class="input is-size-6 is-rounded" type="password" placeholder="Enter Password" name="password" />
	</div>
	<div class="field">
		<label for="repeatedPassword" class="label is-size-5">Repeat password</label>
		<input bind:value={repeatedPassword} id="repeatedPassword" class="input is-size-6 is-rounded" type="password" placeholder="Repeat Password" name="repeatedPassword" />
	</div>
	<div class="field is-grouped">
		<button class="button is-link is-size-5 is-rounded">Sign Up</button>
	</div>
</form>
{#if errorMessage}
	<div class="section">
		{errorMessage}
	</div>
{/if}
