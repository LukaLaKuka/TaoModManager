<script lang="ts">
    export let buttonClassname: string = "";
    export let title: string;
    export let modalBodyClassname: string = "p-5";

    let displayModal = false;
</script>

<!-- Button -->
<button
    on:click={() => {
        document.body.style.overflow = "hidden";
        displayModal = true;
    }}
    class={buttonClassname}><slot name="buttonContent" /></button
>
<!-- Modal Body -->
<div
    class="flex justify-center items-center fixed min-h-screen w-screen z-10 opacity-65 top-0 left-0 bg-darker p-5 {displayModal
        ? ''
        : 'hidden'}"
></div>
<div
    class="fixed top-0 left-0 flex h-screen w-screen justify-center items-center opacity-100 z-20 {displayModal
        ? ''
        : 'hidden'}"
>
    <div class=" bg-dark rounded-button border border-gray flex flex-col z-20">
        <div class="h-full flex flex-col justify-center items-center min-w-96 max-h-96">
            <div class="flex p-5 border-b border-light w-full justify-between items-center">
                <span class="text-light text-2xl font-abz">{title}</span>
                <button
                    on:click={() => {
                        displayModal = false;
                        document.body.style.overflow = "visible";
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-x text-light"
                        ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
                    >
                </button>
            </div>
            <div class="{modalBodyClassname} w-full overflow-y-scroll">
                <slot/>
            </div>
        </div>
    </div>
</div>
