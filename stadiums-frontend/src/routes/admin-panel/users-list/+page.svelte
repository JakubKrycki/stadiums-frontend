<script lang="ts">
    import Header from "$lib/Header.svelte";
	import { userService } from "../../../services/user-service";
	import { getUserRole } from "../../../services/user-utils";
	import { load } from "./+page";
	import type { PageData } from "./$types";

    export let data: PageData;
    const role = getUserRole(data.token);

    async function deleteUser(id: string) {
        const response = await userService.deleteUser(id);
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
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th class="has-text-centered">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.users as user}
                        <tr>
                            <th>{user._id}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td class="has-text-centered">
                                <button on:click={() => deleteUser(user._id)}>
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