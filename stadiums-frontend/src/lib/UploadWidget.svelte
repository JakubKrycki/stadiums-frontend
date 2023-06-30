<script lang='ts'>
    import { onMount } from "svelte";

    export let url;
    let widget: any;

    onMount(() => {
        if ('cloudinary' in window) {
            widget = window.cloudinary.createUploadWidget({
                cloudName: 'drgt7fgl4',
                uploadPreset: 'ubahyr2f'
            }, (error: any, result: any) => {
                if (result.info?.url) {
                    url = result.info.url;
                }
            });
        }
    })
    
    function handleClick() {
        if (widget) {
            widget.open();
        }
    }
</script>

<button class="button is-info is-rounded is-small" on:click|preventDefault={handleClick}>Upload image</button>