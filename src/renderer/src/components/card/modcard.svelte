<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Checkbox from "./checkbox.svelte";
  import ChangeNameModal from "../modal/changeNameModal/changeNameModal.svelte";

  const openDir = async (path) => {
    await window.electron.openDir(path);
  };

  const deleteMod = async (realModName) => {
    await window.electron.deleteMod(realModName);
    dispatch("reload");
  };

  const enableMod = async () => {
    console.log("ENABLE");
    await window.electron.enableMod(realModName);
  };

  const disableMod = async () => {
    console.log("DISABLE");
    await window.electron.disableMod(realModName);
  };

  export let modName: string = "";
  export let realModName: string = "";
  export let active: boolean = false;
  export let path: string = "";

  const dispatch = createEventDispatcher();
</script>

<div class="border border-light bg-gray rounded-button py-3 px-4 flex flex-col">
  <div class="flex justify-between gap-2">
    <h3 class=" text-light text-3xl font-yeon truncate">{modName}</h3>
    <Checkbox
      {active}
      id={realModName}
      on:enable={enableMod}
      on:disable={disableMod}
    />
  </div>
  <button
    on:click={async () => await openDir(path)}
    class="text-start text-drown-gray text-xl font mb-3 truncate"
    >{realModName}</button
  >
  <!-- Open File System Window -->
  <div class="flex justify-between">
    <ChangeNameModal name={modName} realname={realModName} on:reload />
    <button
      class=" text-primary font-abz hover:underline"
      on:click={async () => await deleteMod(realModName)}>Delete</button
    >
  </div>
</div>
