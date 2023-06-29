<script lang="ts">
    import Header from "$lib/Header.svelte";
	import type { PageData } from "./$types";
	import { getUserRole } from "../../services/user-utils";

    export let data: PageData;
    const role = getUserRole(data.token);
</script>


{#if role === "ADMIN"}
<Header isAdmin={role}/>

<section class="columns is-full mx-6 mt-5 pt-6 is-vcentered has-text-centered">
    <div class="column is-half mt-6 pt-5 is-vcentered">
        <div class="box py-6 has-background-link-light">
            <a href="/admin-panel/users-list" class="has-text-black">
                <p class="is-size-4 py-6">USERS LIST</p>
            </a>
        </div>
        <div class="box py-6 has-background-link-light">
            <a href="/admin-panel/placemarks-list" class="has-text-black">
                <p class="is-size-4 py-6">PLACEMARKS LISTS</p>
            </a>
        </div>
    </div>
    <div class="column is-half mt-6 pt-5">
        <div class="box py-6 has-background-info-light">
            <a href="/admin-panel/users-charts" class="has-text-black">
                <p class="is-size-4 py-6">USERS CHARTS</p>
            </a>
        </div>
        <div class="box py-6 has-background-info-light">
            <a href="/admin-panel/placemarks-charts" class="has-text-black">
                <p class="is-size-4 py-6">PLACEMARKS CHARTS</p>
            </a>
        </div>
    </div>
</section>
{/if}