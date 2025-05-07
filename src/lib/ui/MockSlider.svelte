<script
    lang="ts"
    module
>
    import type { HTMLInputAttributes } from 'svelte/elements'

    export interface MockSliderProps extends HTMLInputAttributes {}
</script>

<script lang="ts">
    import cn from '$lib/utils/class-merge.js'
    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
    } from './tailwind-common.js'

    let {
        value = $bindable(0),
        class: clazz,
        ...props
    }: MockSliderProps = $props()
</script>

<input
    {...props}
    class={cn(
        '[--height:--spacing(4)] [--width:--spacing(64)]',
        'h-(--height) w-(--width) appearance-none rounded-full transition-colors',
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
        clazz,
    )}
    type="range"
    bind:value
/>

<style>
    input {
        /* 2px is border-width * 2 */
        --adjusted-height: calc(var(--height) - 2px);

        appearance: none;
        overflow: hidden;

        background-color: var(--color-container-dim);

        &:enabled:hover {
            background-color: var(--theme-container);
        }

        &::-webkit-slider-runnable-track {
            -webkit-appearance: none;
        }

        &:enabled::-webkit-slider-thumb {
            cursor: ew-resize;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;

            width: var(--adjusted-height);
            height: var(--adjusted-height);

            background-color: var(--color-on-component);
            border-radius: calc(1px * infinity);

            box-shadow: calc(var(--width) * -1 - var(--adjusted-height) / 2) 0 0
                var(--width) var(--color-component);
        }

        &::-moz-range-progress {
            height: 100%;
            background-color: var(--color-component);
        }

        &:enabled::-moz-range-thumb {
            cursor: ew-resize;
        }

        /*
            As far as my testing goes, placing this and the -webkit-slider-thumb together
            results in either one of them not working, so duplicate styles for now.
        */
        &::-moz-range-thumb {
            appearance: none;

            width: var(--adjusted-height);
            height: var(--adjusted-height);

            border: unset;
            border-radius: calc(1px * infinity);
        }
    }
</style>
