<script>
  import Navbar from "./components/navbar/Navbar.svelte";
  import Modcard from "./components/card/modcard.svelte";
  import SettingsModal from "./components/modal/settings/settingsModal.svelte";
  import Import from "./icons/import.svelte";
  import { onMount } from "svelte";
  import Reset from "./icons/reset.svelte";

  const getMods = async () => {
    mods = await window.electron.getMods();
  };

  const importCompress = async (e) => {
    await window.electron.decompress(e.target.files[0].path);
    console.log(`Updating ...`);
    setTimeout(async () => {
      await getMods();
    }, 600);
  };

  let mods = [];

  onMount(async () => {
    await getMods();
  });
</script>

<div class="h-screen">
  <Navbar />
  <main class="px-6 py-5 overflow-y-scroll">
    <div class="flex justify-between text-light-blue mb-8">
      <label for="import-input" class="cursor-pointer" title="Import">
        <Import />
        <input
          type="file"
          accept=".zip,.rar"
          on:change={importCompress}
          id="import-input"
          hidden
          max="1"
        />
      </label>
      <div class="flex gap-3">
        <button title="Reload Mods">
          <Reset className=""/>
        </button>
      <SettingsModal />
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-x-20 gap-8"
    >
      {#each mods ?? [] as mod}
        <Modcard
          modName={mod.name}
          active={mod.status === 'ENABLED'}
          realModName={mod.realname}
          path={mod.path}
        />
      {/each}
    </div>
  </main>
</div>
