<script>
	import WelcomeNavigator from "../../lib/WelcomeHeader.svelte";
	import RegisterForm from "./RegisterForm.svelte";
</script>

<WelcomeNavigator />

<section class="columns is-full is-vcentered is-centered">
	<div class="column is-three-quaters has-text-centered">
		<img alt="Chelsea London F.C. stadium" src="/stadium-background.jpeg" />
	</div>
	<div class="column is-one-quater hero is-fullheight">
		<div class="hero-body">
			<div class="container">
				<h1 class="title is-size-3 has-text-centered">Login</h1>
				<RegisterForm />
			</div>
		</div>
	</div>
</section>