<script
    lang="ts"
    module
>
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentLabelProp } from './types.js'

    export interface MockCheckboxProps
        extends HTMLInputAttributes,
            ComponentLabelProp {
        group?: string[]
    }
</script>

<script lang="ts">
    import cn from '$lib/utils/class-merge.js'
    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
        COMPONENT_DISABLED_CONTAINER,
    } from './tailwind-common.js'

    let {
        children,
        label,
        checked = $bindable(false),
        group = $bindable([]),
        class: clazz,
        ...props
    }: MockCheckboxProps = $props()
</script>

<label
    class="group/checkbox relative inline-flex items-center gap-md {COMPONENT_DISABLED_CONTAINER}"
>
    <input
        {...props}
        class={cn(
            'peer size-4 shrink-0 appearance-none rounded-sm bg-subtle transition-colors enabled:checked:bg-component enabled:hover:bg-subtle-lighter enabled:checked:hover:bg-component-lighter disabled:border-transparent',
            COMPONENT_BORDER_HOCUS,
            COMPONENT_DISABLED,
            clazz,
        )}
        type="checkbox"
        bind:checked
        bind:group
    />

    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="absolute size-4 scale-50 opacity-0 transition peer-checked:scale-90 peer-checked:opacity-100"
    >
        <path
            fill-rule="evenodd"
            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
        />
    </svg>

    <span class="peer-disabled:text-current/50">
        {#if children}
            {@render children()}
        {:else if label}
            {label}
        {/if}
    </span>
</label>
