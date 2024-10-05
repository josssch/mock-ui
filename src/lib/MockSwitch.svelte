<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { SnippetOrString } from './utils/snippet-or-string.js'

    import cn from './utils/class-merge.js'
    import { toSnippet } from './utils/snippet-or-string.js'

    let {
        label,
        checked = $bindable(false),
        class: clazz,
        ...props
    }: HTMLInputAttributes & { label: SnippetOrString } = $props()
</script>

<label class="gap-md group-switch relative inline-flex items-center">
    <input
        {...props}
        class={cn(
            'bg-subtle border-blur hover:border-focus enabled:hover:bg-subtle-lighter enabled:checked:hover:bg-primary-lighter checked:bg-primary peer relative h-4 w-8 shrink-0 appearance-none rounded-full border-1 transition-colors',
            // Circle Part
            'after:absolute after:left-0 after:aspect-square after:h-full after:translate-x-0 after:rounded-full after:bg-white/50 after:transition-all checked:after:left-full checked:after:-translate-x-full checked:after:bg-white/75',
            clazz,
        )}
        type="checkbox"
        bind:checked
    />

    <span class="peer-disabled:text-current/50">
        {@render toSnippet(label)()}
    </span>
</label>
