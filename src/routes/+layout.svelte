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

    <!-- Favicons for 48x48, 32x32, 16x16 -->
    <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/favicon-48x48.png"
    />
    <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
    />
    <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
    />

    <!-- Very very simplistic SEO -->
    <meta
        name="description"
        content="Demo site for the Mock UI component library."
    />
    <meta
        name="author"
        content="Josh <contact@jossh.dev>"
    />
    <meta
        name="robots"
        content="index, follow"
    />

    <title>Mock UI Demo &bullet; Josh</title>
</svelte:head>

{@render children()}
