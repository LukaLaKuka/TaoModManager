<script lang="ts">
    import PlayButton from "./playButton/playButton.svelte";
    import Logo from "./../../icons/logo.svelte";
</script>

<div class="flex h-20 justify-between sticky bg-darker border-b-light border">
    <div class=" grid grid-cols-4 justify-start items-center gap-2">
        <Logo className="w-20 col-span-1" />
        <h1 class=" text-4xl font-yeon text-light col-span-3">
            Tao Mod Manager
        </h1>
    </div>
    <div class="flex justify-center px-3 gap-3">
        <PlayButton/>
    </div>
</div>
