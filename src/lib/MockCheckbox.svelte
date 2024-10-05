<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { SnippetOrString } from './utils/snippet-or-string.js'

    import HeroCheck from './icons/HeroCheck.svelte'
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
</script>

<label class="gap-md group-checkbox relative inline-flex items-center">
    <!-- using absolute size-0 so it's still keyboard accessible -->
    <input
        {...props}
        class="peer absolute size-0"
        type="checkbox"
        bind:checked
        bind:group
    />

    <span
        class={cn(
            'bg-subtle border-blur peer-hover:border-focus peer-enabled:peer-hover:bg-subtle-lighter peer-enabled:peer-checked:peer-hover:bg-primary-lighter peer-enabled:peer-checked:bg-primary relative inline-block size-4 shrink-0 rounded-sm border-1 transition-colors [--checked:0] peer-checked:[--checked:1]',
            clazz,
        )}
    >
        <HeroCheck
            class="absolute inset-0 scale-[max(var(--checked),_0.5)] opacity-[var(--checked)] transition"
        />
    </span>

    <span class="peer-disabled:text-current/50">
        {@render toSnippet(label)()}
    </span>
</label>
