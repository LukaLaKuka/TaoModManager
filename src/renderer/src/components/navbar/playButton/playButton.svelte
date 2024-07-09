<script lang="ts">
    import Play from "../../../icons/play.svelte";
</script>

<button class="bg-primary flex justify-between items-center gap-1 text-light ps-3 pe-5 py-2 rounded-button my-3 transition-all duration-500 hover:bg-primary-darker" on:click={async () => {
    console.log(await window.electron.hello('hello'));
}}>
    <Play className="w-9" />
    <span class="font-yeon text-3xl min-h-full">Play</span>
</button>