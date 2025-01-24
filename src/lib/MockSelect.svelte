<script
    lang="ts"
    module
>
    import type { HTMLSelectAttributes } from 'svelte/elements'

    export interface MockSelectProps extends HTMLSelectAttributes {}
</script>

<script lang="ts">
    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
    } from './tailwind-common.js'
    import cn from './utils/class-merge.js'

    let {
        children,
        class: clazz,
        value = $bindable(),
        ...props
    }: MockSelectProps = $props()
</script>

<select
    {...props}
    class={cn(
        'rounded-default group/select px-md py-sm bg-subtle relative appearance-none transition-colors',
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

<style>
    select:not([multiple]) {
        padding-right: var(--spacing-xl);

        /* todo: use something else, since this gives us zero control over color */
        background: var(--color-subtle)
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='white'/></g></svg>")
            no-repeat right var(--spacing-md) top 50%;
    }
</style>
