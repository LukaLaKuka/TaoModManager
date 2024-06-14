<script>
    import "../app.css";
    import Navbar from "$lib/components/navbar/Navbar.svelte";
</script>

<div class="h-screen bg-dark px-2 py-1">
    <Navbar/>
    <slot></slot>
</div>