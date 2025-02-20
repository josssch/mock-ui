<script
    lang="ts"
    module
>
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type {
        ComponentGhostStyleProp,
        ComponentLabelProp,
    } from '../types/component-prop-types.js'

    export interface MockButtonProps
        extends HTMLButtonAttributes,
            ComponentGhostStyleProp,
            ComponentLabelProp {
        href?: string
        circle?: boolean
        small?: boolean
    }
</script>

<script lang="ts">
    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
    } from '../tailwind-common.js'
    import cn from '../utils/class-merge.js'

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
    }: MockButtonProps = $props()

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
        'group/button flex cursor-pointer flex-wrap items-center gap-sm font-medium disabled:bg-subtle',
        COMPONENT_DISABLED,
        ghost
            ? 'hover:underline'
            : `${COMPONENT_BORDER_HOCUS} rounded-default bg-gradient-to-t transition active:transition-none enabled:from-component enabled:to-component-lighter enabled:active:translate-y-0.5`,
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
