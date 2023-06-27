<script lang='ts'>
	import { accountService } from "../services/account-service";
    import type { Placemark } from "../services/placemark-types";

    let editMode = false;
    export let placemark: Placemark;
    export let userToken: string;
</script>

<div class='pl-5 pt-4 is-size-5'>
    <div class='block'>
        <button class={"button is-size-7 is-rounded " + (editMode ? "is-info is-light" : "is-active")} on:click={() => {editMode = !editMode}}>Edit mode</button>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Name:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.name} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Team:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.team} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Country:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.category} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Private:</div>
        <div class="column"><input class="checkbox" type="checkbox" bind:checked={placemark.private} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Latitude:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.latitude} disabled={!editMode}/></div>
    </div>
    <div class='block columns is-vcentered'>
        <div class="column is-3 is-vcentered">Longitude:</div>
        <div><input class="input is-rounded is-vcentered" bind:value={placemark.longitude} disabled={!editMode}/></div>
    </div>
    <div class='block'>
        <span>Added by: {accountService.getUserEMail(userToken)}</span>
    </div>

</div>