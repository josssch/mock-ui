<script lang="ts">
    import type { HTMLTextareaAttributes } from 'svelte/elements'

    import {
        COMPONENT_BORDER_FOCUS,
        COMPONENT_DISABLED,
    } from './tailwind-common.js'
    import cn from './utils/class-merge.js'

    let {
        value = $bindable(''),
        class: clazz,
        ...props
    }: HTMLTextareaAttributes = $props()
</script>

<textarea
    {...props}
    class={cn(
        'rounded-default bg-subtle py-sm px-md resize-none transition-colors',
        COMPONENT_BORDER_FOCUS,
        COMPONENT_DISABLED,
        clazz,
    )}
    bind:value
></textarea>
