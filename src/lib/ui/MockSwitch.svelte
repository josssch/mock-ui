<script
    lang="ts"
    module
>
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentLabelProp } from './types.js'

    export interface MockSwitchProps
        extends HTMLInputAttributes,
            ComponentLabelProp {}
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
        class: clazz,
        ...props
    }: MockSwitchProps = $props()
</script>

<label
    class="group/switch relative inline-flex items-center gap-md {COMPONENT_DISABLED_CONTAINER}"
>
    <input
        {...props}
        class={cn(
            'peer relative h-4 w-8 shrink-0 appearance-none rounded-full bg-container-dim transition-colors checked:bg-component enabled:not-checked:hover:bg-container',
            COMPONENT_BORDER_HOCUS,
            COMPONENT_DISABLED,
            // Circle Part
            'after:absolute after:left-0 after:aspect-square after:h-full after:translate-x-0 after:rounded-full after:bg-on-container after:transition-all checked:after:left-full checked:after:-translate-x-full checked:after:bg-on-component',
            clazz,
        )}
        type="checkbox"
        bind:checked
    />

    <span class="peer-disabled:brightness-50">
        {#if children}
            {@render children()}
        {:else if label}
            {label}
        {/if}
    </span>
</label>
