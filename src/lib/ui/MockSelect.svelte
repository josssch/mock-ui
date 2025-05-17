<script
    lang="ts"
    module
>
    import type { HTMLSelectAttributes } from 'svelte/elements'

    export interface MockSelectProps extends HTMLSelectAttributes {}
</script>

<script lang="ts">
    import cn from '$lib/utils/class-merge.js'
    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
    } from './tailwind-common.js'

    let {
        children,
        class: clazz,
        value = $bindable(),
        ...props
    }: MockSelectProps = $props()
</script>

<div class="relative inline-block">
    <select
        {...props}
        class={cn(
            'group/select appearance-none rounded-default bg-container-dim py-sm pr-xl pl-md transition-colors',
            COMPONENT_BORDER_HOCUS,
            COMPONENT_DISABLED,
            clazz,
        )}
        bind:value
    >
        {#if children}
            {@render children()}
        {:else}
            <option value="null">No Options</option>
        {/if}
    </select>

    <!-- HeroIcon's chevron-down -->
    <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="pointer-events-none absolute top-1/2 right-md size-4 -translate-y-1/2"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
    </svg>
</div>
