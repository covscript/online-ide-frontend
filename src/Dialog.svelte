<script>
import Button from './Button.svelte';
export let show;
$: dialogStyle = show? 'display:block' : 'display:none';
</script>

<div class='dialog' style={dialogStyle}>
{#if show}
<slot></slot>
{/if}
<div class='closeButton'>
<Button on:click={()=>show = false}>Close</Button>
</div>
</div>

<style>
div.dialog {
    z-index:1;
    width:80%;
    height:60%;
    position: absolute;
    top:20%;
    left:10%;
    background:white;
    border-radius:4px;
    border:2px solid lightblue;
}
div.closeButton {
    position: absolute;
    right:3px;
    top:3px;
}
</style>