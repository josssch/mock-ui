<script
    lang="ts"
    module
>
    import type {
        HTMLAttributes,
        HTMLInputAttributes,
        HTMLLabelAttributes,
    } from 'svelte/elements'
    import type { ComponentLabelProp } from './types/component-prop-types.js'
    import type { PropsFor } from './utils/per-element-props.js'

    export interface MockRadioProps
        extends HTMLInputAttributes,
            ComponentLabelProp,
            PropsFor<'wrapper', HTMLLabelAttributes>,
            PropsFor<'span', HTMLAttributes<HTMLSpanElement>> {
        group?: string
    }
</script>

<script lang="ts">
    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
        COMPONENT_DISABLED_CONTAINER,
    } from './tailwind-common.js'
    import cn from './utils/class-merge.js'
    import getPerElementProps from './utils/per-element-props.js'

    let {
        children,
        label,
        value = $bindable(''),
        group = $bindable(''),
        class: clazz,
        ...props
    }: MockRadioProps = $props()

    let {
        wrapper: { class: wrapperClass, ...wrapperProps },
        span: { class: spanClass, ...spanProps },
    } = $derived(getPerElementProps(props, 'wrapper', 'span'))
</script>

<label
    {...wrapperProps}
    class={cn(
        'gap-md group/radio relative inline-flex items-center',
        COMPONENT_DISABLED_CONTAINER,
        wrapperClass,
    )}
>
    <input
        {...props}
        class={cn(
            'bg-subtle peer enabled:hover:bg-subtle-lighter checked:bg-primary enabled:checked:hover:bg-primary-lighter peer relative size-4 appearance-none rounded-full transition-colors after:scale-0 checked:after:scale-100',
            COMPONENT_BORDER_HOCUS,
            COMPONENT_DISABLED,
            //
            'after:absolute after:top-1/2 after:left-1/2 after:size-1 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white/75 after:transition-transform',
            clazz,
        )}
        type="radio"
        bind:value
        bind:group
    />

    <span
        {...spanProps}
        class={cn('peer-disabled:text-current/50', spanClass)}
    >
        {#if children}
            {@render children()}
        {:else if label}
            {label}
        {/if}
    </span>
</label>
