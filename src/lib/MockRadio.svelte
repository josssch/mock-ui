<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { SnippetOrString } from './utils/snippet-or-string.js'

    import cn from './utils/class-merge.js'
    import { toSnippet } from './utils/snippet-or-string.js'

    let {
        label,
        value = $bindable(''),
        group = $bindable(''),
        class: clazz,
        ...props
    }: HTMLInputAttributes & {
        label: SnippetOrString
        group?: string
    } = $props()
</script>

<label class="gap-md group-radio relative inline-flex items-center">
    <input
        {...props}
        class={cn(
            'border-blur bg-subtle peer enabled:hover:bg-subtle-lighter checked:bg-primary enabled:checked:hover:bg-primary-lighter hover:border-focus peer relative size-4 appearance-none rounded-full border-1 transition-colors after:scale-0 checked:after:scale-100',
            //
            'after:absolute after:top-1/2 after:left-1/2 after:size-1 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white/75 after:transition-transform',
            clazz,
        )}
        type="radio"
        bind:value
        bind:group
    />

    <span class="peer-disabled:text-current/50">
        {@render toSnippet(label)()}
    </span>
</label>
