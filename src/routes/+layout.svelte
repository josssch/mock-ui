<script>
    import '../default.css'

    let { children } = $props()
</script>

<svelte:head>
    <!-- Inter Font -->
    <link
        rel="preconnect"
        href="https://rsms.me/"
    />
    <link
        rel="stylesheet"
        href="https://rsms.me/inter/inter.css"
        referrerpolicy="no-referrer"
    />
</svelte:head>

{@render children()}
