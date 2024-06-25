<script lang="ts">
    import Checkbox from "./checkbox.svelte";

    export let modName: string = "";
    export let realModName: string = "";
    export let active: boolean = false;
</script>

<div class="border border-light bg-gray rounded-button py-3 px-4 flex flex-col">
    <div class="flex justify-between flex-wrap gap-2">
        <h3 class=" text-light text-3xl font-yeon truncate">{modName}</h3>
        <Checkbox {active} id={realModName}/>
    </div>
    <span class=" text-drown-gray text-xl font-yeon mb-3">{realModName}</span>
    <!-- Open File System Window -->
    <div class="flex justify-between">
        <button class=" text-light-blue font-abz hover:underline"
            >Change name...</button
        >
        <button class=" text-primary font-abz hover:underline">Delete</button>
    </div>
</div>