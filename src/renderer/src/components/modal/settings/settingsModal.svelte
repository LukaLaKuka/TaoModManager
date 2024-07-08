<script lang="ts">
    import ResetButton from "../../navbar/resetButton/resetButton.svelte";
    import Settings from "../../../icons/settings.svelte";
    import ModalTitle from "../default/modalTitle.svelte";

    export let genshinPath: string = "";

    const setupSettings = (e: Event) => {
        e.preventDefault();
    };

    const fixModels = (e: Event) => {
        console.log(`${e.target}`);
    };
</script>

<ModalTitle title="Settings" modalBodyClassname="p-4">
    <Settings slot="buttonContent" />
    <div class="flex flex-col justify-center items-center">
        <form class="">
            <label for="genshinPath" class="text-light text-lg font-abz"
                >Genshin Executable Path</label
            >
            <div class="grid grid-cols-4 mt-1 gap-3">
                <input
                    id="genshinPath"
                    type="text"
                    class="col-span-3 bg-gray rounded-input text-light p-1 focus-visible:outline-none font-abz"
                    value={genshinPath}
                    on:change={setupSettings}
                />
                <button
                    class="col-span-1 px-1 bg-primary text-light rounded-input font-abz"
                    >Select...</button
                >
            </div>
        </form>
        <div>
            <ResetButton on:click={fixModels} />
        </div>
    </div>
</ModalTitle>
