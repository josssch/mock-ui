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

<select
    {...props}
    class={cn(
        'group/select rounded-default bg-subtle px-md py-sm transition-colors',
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
