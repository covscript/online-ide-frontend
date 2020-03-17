<script>
import Button from './Button.svelte';
import InputDialog from './InputDialog.svelte';
import Dialog from './Dialog.svelte';
import {runCode} from './backend.js';
let codes = `import streams

@begin

streams.iterate(1, [](x) -> x * 2)
       .filter([](x) -> x > 100000)
       .skip(5)
       .take_while([](x) -> x <= 5000000)
       .for_each(system.out.println)

@end
`;
let stdInputs= '';
let fontSize=18;
let lightTheme=true;
let showInputDialog,showRunDialog=false;
$: textAreaStyle = `font-size:${fontSize}px;
background-color:${lightTheme?'white':'black'};
color:${lightTheme?'black':'white'}`;
</script>

<InputDialog bind:show={showInputDialog} bind:value={stdInputs} />
<Dialog bind:show={showRunDialog}>
{#await runCode(codes,stdInputs)}
running codes,waiting ...
{:then response}{response.data}
{/await}</Dialog>
<Button on:click={() => showRunDialog = true}>Run</Button>
<Button on:click={() => showInputDialog = true}>Inputs</Button>
<Button on:click={() => fontSize++}>Larger</Button>
<Button on:click={() =>fontSize--}>Smaller</Button>
<Button on:click={() => lightTheme=!lightTheme}>
{lightTheme?'Dark Theme':'Light Theme'}
</Button>

<textarea bind:value={codes} style={textAreaStyle}></textarea>

<svelte:head>
<style>
body {
	background-color:lightgrey;
	font-family: 'Fira Mona',monospace;
}
textarea {
	width:100%;
	height:100%;
}
</style>
</svelte:head>
