<script lang="ts">
    import ResetButton from "../../navbar/resetButton/resetButton.svelte";
    import Settings from "../../../icons/settings.svelte";
    import ModalTitle from "../default/modalTitle.svelte";
    import { onMount } from "svelte";

    let genshinPath: string = '';

    const setupSettings = async (e) => {
        e.preventDefault();
        genshinPath = e.target.files[0].path;
        await window.electron.setGenshinPath(genshinPath);
    };

    const getGenshinPath = async () => {
        genshinPath = await window.electron.getGenshinPath();
    };

    onMount(() => {
        getGenshinPath();
    });

    const fixModels = (e: Event) => {
        e.preventDefault()
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
                    type="text"
                    class="col-span-3 bg-gray rounded-input text-light p-1 focus-visible:outline-none font-abz overflow-x-scroll"
                    value={genshinPath}
                    disabled
                />
                <label
                    class="col-span-1 px-1 bg-primary text-light rounded-input font-abz flex justify-center items-center hover:bg-primary-darker transition-all duration-500"
                    for="selectGenshinPath"
                    >Select...
                </label>
                <input type="file" class="hidden" id="selectGenshinPath" on:change={setupSettings}>
            </div>
        </form>
        <div>
            <ResetButton on:click={fixModels} />
        </div>
    </div>
</ModalTitle>
