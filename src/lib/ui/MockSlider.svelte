<script
    lang="ts"
    module
>
    import type { HTMLInputAttributes } from 'svelte/elements'

    export interface MockSliderProps extends HTMLInputAttributes {}
</script>

<script lang="ts">
    import cn from '$lib/utils/class-merge.js'
    import { COMPONENT_BORDER, COMPONENT_DISABLED } from './tailwind-common.js'

    let {
        value = $bindable(0),
        class: clazz,
        ...props
    }: MockSliderProps = $props()
</script>

<input
    {...props}
    class={cn(
        'h-2 appearance-none rounded-full bg-subtle',
        COMPONENT_BORDER,
        COMPONENT_DISABLED,
        clazz,
    )}
    type="range"
    bind:value
/>

<style>
    input::-webkit-slider-thumb,
    input::-moz-range-thumb {
        appearance: none;

        /* stolen from `rounded-full`, even though 999px would be fine */
        border-radius: calc(infinity * 1px);

        background: var(--color-component);
        border: 1px solid var(--color-edge);

        transition: all var(--default-transition-duration)
            var(--default-transition-timing-function);
    }

    input:active::-webkit-slider-thumb,
    input:active::-moz-range-thumb {
        background: var(--color-component-lighter);
        border-color: var(--color-edge-focused);
    }
</style>
