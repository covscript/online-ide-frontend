<script>
import Dialog from './Dialog.svelte';
export let value,show;
</script>

<Dialog bind:show>
<textarea bind:value={value}></textarea>
</Dialog>