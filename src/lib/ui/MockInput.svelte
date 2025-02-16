<script
    lang="ts"
    module
>
    import type { Snippet } from 'svelte'
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentGhostStyleProp } from '../types/component-prop-types.js'

    export interface MockInputProps
        extends HTMLInputAttributes,
            ComponentGhostStyleProp {
        left?: Snippet
        right?: Snippet
    }
</script>

<script lang="ts">
    import {
        COMPONENT_BORDER_FOCUS,
        COMPONENT_DISABLED,
    } from '../tailwind-common.js'
    import cn from '../utils/class-merge.js'

    let {
        left,
        right,
        type = 'text',
        value = $bindable(''),
        class: clazz,
        ghost = false,
        ...props
    }: MockInputProps = $props()

    const sideStyles = 'absolute top-1/2 size-6 -translate-y-1/2'
</script>

<div
    class="group/input relative
    {ghost ? '' : '[--color-background:_var(--color-subtle)]'}"
>
    {#if left}
        <span class="{sideStyles} {ghost ? 'left-1' : 'left-1.5'}">
            {@render left()}
        </span>
    {/if}

    <input
        {...props}
        {type}
        class={cn(
            'size-full',
            ghost
                ? 'border-none'
                : `${COMPONENT_BORDER_FOCUS} rounded-default bg-subtle px-md py-sm transition-colors`,
            COMPONENT_DISABLED,
            left && 'pl-8',
            right && 'pr-8',
            clazz,
        )}
        bind:value
    />

    {#if right}
        <span class="{sideStyles} {ghost ? 'right-1' : 'right-1.5'}">
            {@render right()}
        </span>
    {/if}
</div>
