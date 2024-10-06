<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'

    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
    } from './tailwind-common.js'
    import cn from './utils/class-merge.js'

    let {
        href,
        children,
        label,
        class: clazz,
        type = 'button',
        ghost = false,
        small = false,
        circle = false,
        ...props
    }: HTMLButtonAttributes & {
        href?: string
        label?: string
        ghost?: boolean
        circle?: boolean
        small?: boolean
        class?: string
    } = $props()

    const isButton = $derived(!href)
</script>

<!--
    dynamically decide if it's a button based on an `href` attr,
    this is better for keyboard accessibility
-->
<svelte:element
    this={isButton ? 'button' : 'a'}
    {...props}
    {href}
    {type}
    class={cn(
        'gap-sm group/button disabled:bg-subtle flex cursor-pointer flex-wrap items-center font-medium',
        COMPONENT_DISABLED,
        ghost
            ? 'hover:underline'
            : `${COMPONENT_BORDER_HOCUS} enabled:from-primary enabled:to-primary-lighter rounded-default bg-gradient-to-t transition active:transition-none enabled:active:translate-y-0.5`,
        // unless we have the `small` flag, apply padding
        // and make it even based on whether it's a circle
        !small ? (circle ? 'p-sm' : 'px-md py-sm') : '',
        circle && 'aspect-square rounded-full',
        clazz,
    )}
>
    {#if children}
        {@render children()}
    {:else if label}
        <span>{label}</span>
    {/if}
</svelte:element>
