<script
    lang="ts"
    module
>
    import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentLabelProp } from './types/component-prop-types.js'

    export interface MockCheckboxProps
        extends HTMLInputAttributes,
            ComponentLabelProp,
            PropsFor<'icon', HTMLAttributes<SVGElement>>,
            PropsFor<'span', HTMLAttributes<HTMLSpanElement>> {
        group?: string[]
    }
</script>

<script lang="ts">
    import type { PropsFor } from './utils/per-element-props.js'

    import HeroCheck from './icons/HeroCheck.svelte'
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
        group = $bindable([]),
        class: clazz,
        ...props
    }: MockCheckboxProps = $props()

    let {
        icon: { class: iconClass, ...iconProps },
        span: { class: spanClass, ...spanProps },
    } = $derived(getPerElementProps(props, 'icon', 'span'))

    const size = 'size-4'
</script>

<label
    class="gap-md group/checkbox relative inline-flex items-center {COMPONENT_DISABLED_CONTAINER}"
>
    <input
        {...props}
        class={cn(
            'peer bg-subtle enabled:hover:bg-subtle-lighter enabled:checked:hover:bg-primary-lighter enabled:checked:bg-primary shrink-0 appearance-none rounded-sm transition-colors disabled:border-transparent',
            COMPONENT_BORDER_HOCUS,
            COMPONENT_DISABLED,
            size,
            clazz,
        )}
        type="checkbox"
        bind:checked
        bind:group
    />

    <HeroCheck
        {...iconProps}
        class={cn(
            size,
            'absolute scale-50 opacity-0 transition peer-checked:scale-90 peer-checked:opacity-100',
            iconClass,
        )}
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
