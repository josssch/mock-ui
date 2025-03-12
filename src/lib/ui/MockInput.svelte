<script
    lang="ts"
    module
>
    import type { Snippet } from 'svelte'
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentGhostStyleProp } from './types.js'

    export interface MockInputProps
        extends HTMLInputAttributes,
            ComponentGhostStyleProp {
        left?: Snippet
        right?: Snippet
    }
</script>

<script lang="ts">
    import cn from '$lib/utils/class-merge.js'
    import {
        COMPONENT_BORDER_FOCUS,
        COMPONENT_DISABLED,
    } from './tailwind-common.js'

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

<div class="group/input relative">
    {#if left}
        <span class="{sideStyles} {ghost ? 'left-1' : 'left-1.5'}">
            {@render left()}
        </span>
    {/if}

    <input
        {...props}
        {type}
        class={cn(
            'h-full w-64',
            ghost
                ? 'focus-invisible border-none'
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
