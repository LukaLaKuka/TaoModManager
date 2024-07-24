<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ModalTitle from "../default/modalTitle.svelte";

  export let name: string = "";
  export let realname: string = "";

  const updateName = async (e) => {
    e.preventDefault();
    await window.electron.setModName(realname, name);
    dispatch('reload');
  };

  const dispatch = createEventDispatcher();
</script>

<ModalTitle title="Set Mod Name" modalBodyClassname="p-4">
  <span class=" text-light-blue font-abz hover:underline" slot="buttonContent"
    >Change name...</span
  >
  <form class="flex justify-between gap-5" on:submit|preventDefault>
    <input
      type="text"
      class="col-span-3 bg-gray rounded-input text-light p-1 focus-visible:outline-none font-abz overflow-x-scroll w-full"
      bind:value={name}
    />
    <button
      class="col-span-1 px-3 bg-primary text-light rounded-input font-abz flex justify-center items-center hover:bg-primary-darker transition-all duration-500"
      on:click={updateName}
      >Save
    </button>
  </form>
</ModalTitle>
