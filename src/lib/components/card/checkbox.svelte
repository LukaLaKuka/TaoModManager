
<script lang="ts">
    export let id: string;
    export let active: boolean;
</script>


<label class="switch min-w-min" for={id}>
    <input type="checkbox" id="{id}" bind:checked={active} />
    <div class="slider round"></div>
</label>


<style>
    .switch {
        display: inline-block;
        height: 30px;
        position: relative;
        width: 60px;
    }

    .switch input {
        display: none;
    }

    .slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;
    }

    .slider:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 22px;
        left: 4px;
        position: absolute;
        transition: 0.4s;
        width: 22px;
    }

    input:checked + .slider {
        background-color: #bf0020;
    }

    input:checked + .slider:before {
        transform: translateX(30px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>
