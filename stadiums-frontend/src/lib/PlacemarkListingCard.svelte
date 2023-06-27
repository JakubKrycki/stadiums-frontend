<script lang="ts">
	import type { Placemark } from "../services/placemark-types";

    export let placemark: Placemark;
</script>

<div class="column is-full">
    <div class="card">
        <div class="card-content p-4">
            <div class="is-flex columns is-vcentered has-text-centered">
                <div class="column">
                    <span class="is-size-5">
                        {placemark.name}
                    </span>
                </div>
                <div class="column">
                    <span class="icon-text is-size-5">
                        {#if placemark.private}
                        <span class="icon">
                            <i class="fas fa-light fa-lock"></i>
                        </span>
                        <p>Private</p>
                        {:else}
                        <span class="icon">
                            <i class="fas fa-light fa-lock-open"></i>
                        </span>
                        <p>Public</p>
                        {/if}
                    </span>
                </div>
                <div class="column pt-4">
                    <button class="button is-size-7 is-rounded is-active" on:click>See the details</button>
                </div>
            </div>
        </div>
    </div>
</div>