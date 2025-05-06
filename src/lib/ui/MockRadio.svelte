<script
    lang="ts"
    module
>
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentLabelProp } from './types.js'

    export interface MockRadioProps
        extends HTMLInputAttributes,
            ComponentLabelProp {
        group?: string
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
        value = $bindable(''),
        group = $bindable(''),
        class: clazz,
        ...props
    }: MockRadioProps = $props()
</script>

<label
    class="group/radio relative inline-flex items-center gap-md {COMPONENT_DISABLED_CONTAINER}"
>
    <input
        {...props}
        class={cn(
            'peer peer relative size-4 appearance-none rounded-full bg-container-dim transition-colors after:scale-0 checked:bg-component checked:after:scale-100 enabled:not-checked:hover:bg-container',
            COMPONENT_BORDER_HOCUS,
            COMPONENT_DISABLED,
            //
            'after:absolute after:top-1/2 after:left-1/2 after:size-1 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-on-component after:transition-transform',
            clazz,
        )}
        type="radio"
        bind:value
        bind:group
    />

    <span class="peer-disabled:brightness-50">
        {#if children}
            {@render children()}
        {:else if label}
            {label}
        {/if}
    </span>
</label>
