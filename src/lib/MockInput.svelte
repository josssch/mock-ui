<script
    lang="ts"
    context="module"
>
    export interface MockInputProps extends HTMLInputAttributes {
        left?: Snippet
        right?: Snippet
    }
</script>

<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLInputAttributes } from 'svelte/elements'

    import cn from './utils/class-merge.js'

    let {
        left,
        right,
        type = 'text',
        value = $bindable(''),
        class: clazz,
        ...props
    }: MockInputProps = $props()
</script>

<div class="group-input relative">
    {#if left}
        <span
            class="absolute top-1/2 left-1.5 size-6 -translate-y-1/2 overflow-hidden"
        >
            {@render left()}
        </span>
    {/if}

    <input
        {...props}
        {type}
        class={cn(
            'rounded-default bg-subtle px-md py-sm border-blur focus:border-focus border-1 transition-colors disabled:text-current/50 disabled:hover:cursor-not-allowed',
            left && 'pl-8',
            right && 'pr-8',
            clazz,
        )}
        bind:value
    />

    {#if right}
        <span
            class="absolute top-1/2 right-1.5 size-6 -translate-y-1/2 overflow-hidden"
        >
            {@render right()}
        </span>
    {/if}
</div>
