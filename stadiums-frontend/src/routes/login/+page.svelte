<script lang="ts">
	import WelcomeNavigator from "../../lib/WelcomeHeader.svelte";
	import LoginForm from "./LoginForm.svelte";
</script>

<WelcomeNavigator />
<div class="hero-body">
	<div class="container has-text-centered">
		<div class="columns is-centered">
            <div class="column is-two-fifths">
				<LoginForm />
            </div>
        </div>
	</div>
</div>