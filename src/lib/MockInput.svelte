<script
    lang="ts"
    module
>
    import type { Snippet } from 'svelte'
    import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentGhostStyleProp } from './types/component-prop-types.js'
    import type { PropsFor } from './utils/per-element-props.js'

    export interface MockInputProps
        extends HTMLInputAttributes,
            ComponentGhostStyleProp,
            PropsFor<'wrapper', HTMLAttributes<HTMLDivElement>>,
            PropsFor<'left' | 'right', HTMLAttributes<HTMLSpanElement>> {
        left?: Snippet
        right?: Snippet
    }
</script>

<script lang="ts">
    import {
        COMPONENT_BORDER_FOCUS,
        COMPONENT_DISABLED,
    } from './tailwind-common.js'
    import cn from './utils/class-merge.js'
    import getPerElementProps from './utils/per-element-props.js'

    let {
        left,
        right,
        type = 'text',
        value = $bindable(''),
        class: clazz,
        ghost = false,
        ...props
    }: MockInputProps = $props()

    let {
        wrapper: { class: wrapperClass, ...wrapperProps },
        left: { class: leftClass, ...leftProps },
        right: { class: rightClass, ...rightProps },
    } = $derived(getPerElementProps(props, 'wrapper', 'left', 'right'))

    const sideStyles = 'absolute top-1/2 size-6 -translate-y-1/2'
</script>

<div
    {...wrapperProps}
    class={cn(
        'group/input relative',
        !ghost && '[--color-background:_var(--color-subtle)]',
        wrapperClass,
    )}
>
    {#if left}
        <span
            {...leftProps}
            class={cn(sideStyles, ghost ? 'left-1' : 'left-1.5', leftClass)}
        >
            {@render left()}
        </span>
    {/if}

    <input
        {...props}
        {type}
        class={cn(
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
        <span
            {...rightProps}
            class={cn(sideStyles, ghost ? 'right-1' : 'right-1.5', rightClass)}
        >
            {@render right()}
        </span>
    {/if}
</div>
