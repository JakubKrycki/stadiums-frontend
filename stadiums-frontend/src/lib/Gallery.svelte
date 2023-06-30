<script lang="ts">
	import type { ImagePlus } from "../services/placemark-types";

    export let images: ImagePlus[];
    export let currentImage: number = 0;
</script>


{#if images.length > 0}
    <div class="column is-2 has-text-centered is-vcentered">
        <button class="button is-size-4 is-rounded has-background-info-light" on:click={() => currentImage = currentImage > 0 ? currentImage - 1 : images.length - 1}>
            <div class="icon">
                <i class="fas fa-solid fa-chevron-left"></i>
            </div>
        </button>
        
    </div>
    <div class="column is-8 has-text-centered is-vcentered" style="height: 25vw;">
        <div class='block has-text-centered box has-background-info-light'>
            <img src={images[currentImage].image_url} alt="stadium" style="height: 30vw;"/>
        </div>
    </div>
    <div class="column is-2 has-text-centered is-vcentered">
        <button class="button is-size-4 is-rounded has-background-info-light" on:click={() => currentImage = (currentImage + 1 < images.length) ? currentImage + 1 : 0}>
            <div class="icon">
                <i class="fas fa-solid fa-chevron-right"></i>
            </div>
        </button>
    </div>
    {:else}
    <div class="pt-6">
        <span class="is-size-4">No images here</span>
    </div>
{/if}