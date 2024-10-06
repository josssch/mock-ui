<script
    lang="ts"
    context="module"
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
        'rounded-default group/select px-md py-sm bg-subtle transition-colors',
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
