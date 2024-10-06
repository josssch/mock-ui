<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { SnippetOrString } from './utils/snippet-or-string.js'

    import HeroCheck from './icons/HeroCheck.svelte'
    import {
        COMPONENT_BORDER_HOCUS,
        COMPONENT_DISABLED,
        COMPONENT_DISABLED_CONTAINER,
    } from './tailwind-common.js'
    import cn from './utils/class-merge.js'
    import { toSnippet } from './utils/snippet-or-string.js'

    let {
        label,
        checked = $bindable(false),
        group = $bindable([]),
        class: clazz,
        ...props
    }: HTMLInputAttributes & {
        label: SnippetOrString
        group?: string[]
    } = $props()

    const size = 'size-4'
</script>

<label
    class="gap-md group/checkbox relative inline-flex items-center {COMPONENT_DISABLED_CONTAINER}"
>
    <input
        {...props}
        class={cn(
            'peer bg-subtle enabled:hover:bg-subtle-lighter enabled:checked:hover:bg-primary-lighter enabled:checked:bg-primary shrink-0 appearance-none rounded-sm transition-colors disabled:border-transparent',
            COMPONENT_BORDER_HOCUS,
            COMPONENT_DISABLED,
            size,
            clazz,
        )}
        type="checkbox"
        bind:checked
        bind:group
    />

    <HeroCheck
        class="absolute {size} scale-50 opacity-0 transition peer-checked:scale-90 peer-checked:opacity-100"
    />

    <span class="peer-disabled:text-current/50">
        {@render toSnippet(label)()}
    </span>
</label>
