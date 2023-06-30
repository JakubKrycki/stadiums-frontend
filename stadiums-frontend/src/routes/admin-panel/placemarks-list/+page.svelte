<script lang="ts">
    import Header from "$lib/Header.svelte";
	import { getUserRole } from "../../../services/user-utils";
	import { load } from "./+page";
	import type { PageData } from "./$types";
	import { placemarkService } from "../../../services/placemark-service";

    export let data: PageData;
    const role = getUserRole(data.token);

    async function deletePlacemark(id: string) {
        const response = await placemarkService.deletePlacemark(id);
        if (response) {
            data = await load();
        }
    }
</script>


{#if role === "ADMIN"}
<Header isAdmin={role}/>
<div class="hero-body hero">
    <div class="columns">
        <div class="column is-full">
            <div class="table-container ">
                <table class="table is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Team</th>
                            <th><abbr title="Latitude">Lat</abbr></th>
                            <th><abbr title="Longitude">Lng</abbr></th>
                            <th class="has-text-centered">Category</th>
                            <th class="has-text-centered">Private</th>
                            <th>Added by</th>
                            <th class="has-text-centered">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.placemarks as placemark}
                        <tr>
                            <th>{placemark._id}</th>
                            <td>{placemark.name}</td>
                            <td>{placemark.team}</td>
                            <td>{placemark.latitude}</td>
                            <td>{placemark.longitude}</td>
                            <td class="has-text-centered">{placemark.category}</td>
                            <td class="has-text-centered">{placemark.private}</td>
                            <td>{placemark.added_by}</td>
                            <td class="has-text-centered">
                                <button on:click={() => deletePlacemark(placemark._id)}>
                                    <span class="icon has-text-danger">
                                        <i class="fas fa-solid fa-trash"></i>
                                    </span>
                                </button>
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
{/if}