<script>
  import Navbar from './components/navbar/Navbar.svelte'

  import Modcard from './components/card/modcard.svelte';
  import SettingsModal from './components/modal/settings/settingsModal.svelte';
  // Lógica

  import Import from './icons/import.svelte';

  let mods = Array(10)
</script>

<div class="h-screen">
  <Navbar />
  <main class="px-6 py-5 overflow-y-scroll">
    <div class="flex justify-between text-light-blue mb-8">
      <Import />
      <SettingsModal genshinPath="C:/Program_x86/App/Genshin/Executable/Path" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-x-20 gap-8">
      {#each mods as mod, index}
        <Modcard
          modName="Hu Tao Programa"
          active={index % 2 == 0 ? true : false}
          realModName={`my_real_mod_name_${index}`}
        />
      {/each}
    </div>
  </main>
</div>
