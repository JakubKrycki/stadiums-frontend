<script lang='ts'>
    export let isAdmin: Boolean;
</script>

<a href="/home" class="navbar-item">
    <button class="button is-link is-inverted is-rounded is-size-4 has-text-black">
        HOME
    </button>
</a>
<a href="/placemarks" class="navbar-item">
    <button class="button is-link is-inverted is-rounded is-size-4 has-text-black">
        ALL PLACEMARKS
    </button>
</a>
<a href="/my-placemarks" class="navbar-item">
    <button class="button is-link is-inverted is-rounded is-size-4 has-text-black">
        MY PLACEMARKS
    </button>
</a>
{#if isAdmin}
<a href="/admin-panel" class="navbar-item">
    <button class="button is-link is-inverted is-rounded is-size-4 has-text-black">
        ADMIN PANEL
    </button>
</a>
{/if}