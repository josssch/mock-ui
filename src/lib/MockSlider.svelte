<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'

    import cn from './utils/class-merge.js'

    let {
        value = $bindable(0),
        class: clazz,
        ...props
    }: HTMLInputAttributes = $props()
</script>

<input
    {...props}
    class={cn(
        'bg-subtle border-blur h-2 appearance-none rounded-full border-1',
        clazz,
    )}
    type="range"
    bind:value
/>

<style>
    input {
        &::-webkit-slider-thumb,
        &::-moz-range-thumb {
            appearance: none;

            /* stolen from `rounded-full`, even though 999px would be fine */
            border-radius: calc(infinity * 1px);

            background: var(--color-primary);
            border: 1px solid var(--color-blur);

            transition: all var(--default-transition-duration)
                var(--default-transition-timing-function);
        }
    }

    input:active {
        &::-webkit-slider-thumb,
        &::-moz-range-thumb {
            background: var(--color-primary-lighter);
            border-color: var(--color-focus);
        }
    }
</style>
