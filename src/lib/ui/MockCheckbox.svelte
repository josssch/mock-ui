<script
    lang="ts"
    module
>
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentLabelProp } from '../types/component-prop-types.js'

    export interface MockCheckboxProps
        extends HTMLInputAttributes,
            ComponentLabelProp {
        group?: string[]
    }
</script>

<script lang="ts">
    import HeroCheck from '../icons/HeroCheck.svelte'
    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
        COMPONENT_DISABLED_CONTAINER,
    } from '../tailwind-common.js'
    import cn from '../utils/class-merge.js'

    let {
        children,
        label,
        checked = $bindable(false),
        group = $bindable([]),
        class: clazz,
        ...props
    }: MockCheckboxProps = $props()

    const size = 'size-4'
</script>

<label
    class="group/checkbox relative inline-flex items-center gap-md {COMPONENT_DISABLED_CONTAINER}"
>
    <input
        {...props}
        class={cn(
            'peer shrink-0 appearance-none rounded-sm bg-subtle transition-colors enabled:checked:bg-component enabled:hover:bg-subtle-lighter enabled:checked:hover:bg-component-lighter disabled:border-transparent',
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
        class="absolute {size} scale-50 opacity-0 transition peer-checked:scale-90 peer-checked:opacity-100"
    />

    <span class="peer-disabled:text-current/50">
        {#if children}
            {@render children()}
        {:else if label}
            {label}
        {/if}
    </span>
</label>
