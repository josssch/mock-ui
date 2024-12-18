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

    export interface MockSwitchProps
        extends HTMLInputAttributes,
            ComponentLabelProp,
            PropsFor<'wrapper', HTMLLabelAttributes>,
            PropsFor<'span', HTMLAttributes<HTMLSpanElement>> {}
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
        checked = $bindable(false),
        class: clazz,
        ...props
    }: MockSwitchProps = $props()

    let {
        wrapper: { class: wrapperClass, ...wrapperProps },
        span: { class: spanClass, ...spanProps },
    } = $derived(getPerElementProps(props, 'wrapper', 'span'))
</script>

<label
    {...wrapperProps}
    class={cn(
        'gap-md group/switch relative inline-flex items-center',
        COMPONENT_DISABLED_CONTAINER,
        wrapperClass,
    )}
>
    <input
        {...props}
        class={cn(
            'bg-subtle enabled:hover:bg-subtle-lighter enabled:checked:hover:bg-primary-lighter checked:bg-primary peer relative h-4 w-8 shrink-0 appearance-none rounded-full transition-colors',
            COMPONENT_BORDER_HOCUS,
            COMPONENT_DISABLED,
            // Circle Part
            'after:absolute after:left-0 after:aspect-square after:h-full after:translate-x-0 after:rounded-full after:bg-white/50 after:transition-all checked:after:left-full checked:after:-translate-x-full checked:after:bg-white/75',
            clazz,
        )}
        type="checkbox"
        bind:checked
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
