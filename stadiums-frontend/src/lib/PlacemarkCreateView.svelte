<script lang='ts'>
	import { accountService } from "../services/account-service";
	import { placemarkService } from "../services/placemark-service";
    import type { Placemark } from "../services/placemark-types";

    export let token: string;
    export let isCreatorOpen: boolean;
    export let isChanged: boolean;
    const placemark: Placemark = {
        name: '',
        team: '',
        added_by: accountService.getUserId(token),
        latitude: '',
        longitude: '',
        category: '',
        private: false,
    };

    async function create() {
        const response = await placemarkService.createPlacemark(placemark);
        if (response) {
            isChanged = true;
            isCreatorOpen = false;
        }
    }
</script>
<form on:submit|preventDefault={create}>
<div class='pl-5 pt-4 is-size-5'>
    <div class='block'>
        <span>Added by: {accountService.getUserEMail(token)}</span>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Name:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.name} required/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Team:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.team} required/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Country:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.category} required/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Private:</div>
        <div class="column"><input class="checkbox" type="checkbox" bind:checked={placemark.private}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Latitude:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.latitude} required/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Longitude:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.longitude} required/></div>
    </div>
    <div class='block columns'>
        <div class="column">
            <button class="is-flex button is-info is-rounded is-size-5" type='submit'>
                <p class="column has-text-white is-size-5">Create Placemark</p>
            </button>
        </div>
        <div class="column">
            <button class="is-flex button is-active is-rounded is-size-5" on:click={() => isCreatorOpen = false}>
                <p class="column has-text-black is-size-5">Cancel</p>
            </button>
        </div>
    </div>
</div>
</form>