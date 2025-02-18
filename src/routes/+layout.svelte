<script>
    import '../default.css'

    let { children } = $props()
</script>

<svelte:head>
    <link
        href="https://api.fontshare.com/v2/css?f[]=work-sans@1,2&f[]=sora@1,2&display=swap"
        rel="stylesheet"
    />
</svelte:head>

{@render children()}
