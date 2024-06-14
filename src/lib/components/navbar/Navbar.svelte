<script lang="ts">
    import PlayButton from "$lib/components/navbar/playButton/playButton.svelte";
    import Logo from "$lib/icons/logo.svelte";
</script>

<div class="flex h-20 justify-between sticky bg-darker border-b-light border">
    <div class=" grid grid-cols-4 justify-start items-center gap-2">
        <Logo className=" w-20 col-span-1" />
        <h1 class=" text-4xl font-yeon text-light col-span-3">
            Tao Mod Manager
        </h1>
    </div>
    <PlayButton/>
</div>
