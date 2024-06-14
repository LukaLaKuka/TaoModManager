<script lang="ts">
    import Modcard from "$lib/components/card/modcard.svelte";
    // Lógica

    import Import from "$lib/icons/import.svelte";
    import Settings from "$lib/icons/settings.svelte";

    let mods = Array(30);
</script>

<main class="px-6 py-5">
    <div class="flex justify-between text-light-blue mb-8">
        <Import />
        <Settings></Settings>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-x-20 gap-8">
        {#each mods as mod, index}
            <Modcard
                modName="Hu Tao Programa"
                active={true}
                realModName={`my_real_mod_name_${index}`}
            />
        {/each}
    </div>
</main>
