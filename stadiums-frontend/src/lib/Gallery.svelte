<script lang="ts">
	import type { ImagePlus } from "../services/placemark-types";

    export let images: ImagePlus[];
    export let currentImage: number = 0;
</script>


{#if images.length > 0}
    <div class="column is-2 has-text-centered is-vcentered">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="icon is-size-1 is-clickable" on:click={() => currentImage = currentImage > 0 ? currentImage - 1 : images.length - 1}>
            <i class="fas fa-solid fa-chevron-left"></i>
        </div>
    </div>
    <div class="column is-8 has-text-centered is-vcentered" style="height: 30vw;">
        <div class='block has-text-centered'>
            <img src={images[currentImage].image_url} alt="stadium"/>
        </div>
    </div>
    <div class="column is-2 has-text-centered is-vcentered">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="icon is-size-1 is-clickable" on:click={() => currentImage = (currentImage + 1 < images.length) ? currentImage + 1 : 0}>
            <i class="fas fa-solid fa-chevron-right"></i>
        </div>
    </div>
    {:else}
    <div class="pt-6">
        <span class="is-size-4">No images here</span>
    </div>
{/if}