<script lang='ts'>
	import Navigation from "./Navigation.svelte";

	export let isAdmin: String;
</script>

<div class="hero-head">
	<header class="navbar has-background-white">
		<div id="navbarBasicExample" class="navbar-menu m-auto">
			<div class="navbar-brand has-text-centered m-auto">
				<a href="/" class="is-size-3 navbar-item has-text-weight-bold">STADIUMS</a>
			</div>
			<div class="navbar-start has-text-centered m-auto">
				<Navigation isAdmin={isAdmin === "ADMIN"} />
			</div>
			<div class="navbar-end m-auto">
				<div class="navbar-item">
					<div class="buttons">
						<button class="button is-link is-inverted is-rounded is-size-6">
							<a href="/logout" class="columns is-variable is-size-5 has-text-black">
								<span class="icon column">
									<i class="fas fa-light fa-lock-open"></i>
								</span>
								<p class="column">Logout</p>
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	</header>
</div>
