<script
    lang="ts"
    module
>
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { ComponentLabelProp } from './types/component-prop-types.js'

    import cn from './utils/class-merge.js'

    export interface MockFileProps
        extends HTMLInputAttributes,
            ComponentLabelProp {
        files?: FileList | null
    }
</script>

<script lang="ts">
    import MockButton from './MockButton.svelte'

    let {
        label,
        children,
        files = $bindable(),
        multiple = false,
        class: clazz = '',
        disabled,
        ...props
    }: MockFileProps = $props()

    let fileInputRef: HTMLInputElement | null = $state(null)
</script>

<label
    aria-disabled={disabled}
    class={cn(
        'gap-md group/file flex flex-wrap items-center aria-disabled:cursor-not-allowed',
        clazz,
    )}
>
    <input
        bind:this={fileInputRef}
        type="file"
        class="hidden"
        bind:files
        {multiple}
        {disabled}
        {...props}
    />

    <MockButton
        onclick={() => fileInputRef?.click()}
        label="Browse..."
        {disabled}
    />

    <span
        class="truncate group-aria-disabled/file:text-current/50 hover:text-clip"
    >
        {#if label}
            {label}
        {:else if !files || files.length === 0}
            No file{multiple ? 's' : ''} selected.
        {:else if files.length === 1}
            {files[0].name}
        {:else}
            {files.length} files selected.
        {/if}
    </span>
</label>
