<script>
    import "../app.css";
    import Navbar from "$lib/components/navbar/Navbar.svelte";
</script>

<div class="h-screen">
    <Navbar/>
    <slot></slot>
</div>