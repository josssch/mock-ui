<script lang="ts">
    import type { HTMLSelectAttributes } from 'svelte/elements'

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
    }: HTMLSelectAttributes & {} = $props()
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
