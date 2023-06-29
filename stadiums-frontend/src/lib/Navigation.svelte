<script lang='ts'>
    export let isAdmin: Boolean;
</script>

<a href="/home">
    <button class="navbar-item button is-link is-inverted is-rounded is-size-4 m-auto has-text-black">
        HOME
    </button>
</a>
<a href="/placemarks">
    <button class="navbar-item button is-link is-inverted is-rounded is-size-4 m-auto has-text-black">
        ALL PLACEMARKS
    </button>
</a>
<a href="/my-placemarks">
    <button class="navbar-item button is-link is-inverted is-rounded is-size-4 m-auto has-text-black">
        MY PLACEMARKS
    </button>
</a>
{#if isAdmin}
<a href="/admin-panel">
    <button class="navbar-item button is-link is-inverted is-rounded is-size-4 m-auto has-text-black">
        ADMIN PANEL
    </button>
</a>
{/if}