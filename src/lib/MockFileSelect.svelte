<script
    lang="ts"
    module
>
    import type {
        HTMLAttributes,
        HTMLButtonAttributes,
        HTMLInputAttributes,
        HTMLLabelAttributes,
    } from 'svelte/elements'
    import type { ComponentLabelProp } from './types/component-prop-types.js'
    import type { PropsFor } from './utils/per-element-props.js'

    import cn from './utils/class-merge.js'

    export interface MockFileProps
        extends HTMLInputAttributes,
            ComponentLabelProp,
            PropsFor<'wrapper', HTMLLabelAttributes>,
            PropsFor<'span', HTMLAttributes<HTMLSpanElement>>,
            PropsFor<'button', HTMLButtonAttributes> {
        files?: FileList | null
    }
</script>

<script lang="ts">
    import MockButton from './MockButton.svelte'
    import { COMPONENT_DISABLED_CONTAINER } from './tailwind-common.js'
    import getPerElementProps from './utils/per-element-props.js'

    let {
        label,
        children,
        files = $bindable(),
        multiple = false,
        class: clazz = '',
        disabled,
        ...props
    }: MockFileProps = $props()

    let {
        wrapper: { class: wrapperClass, ...wrapperProps },
        span: { class: spanClass, ...spanProps },
        button: { onclick: buttonOnClick, ...buttonProps },
    } = $derived(getPerElementProps(props, 'button', 'span', 'wrapper'))

    let fileInputRef: HTMLInputElement | null = $state(null)
</script>

<label
    {...wrapperProps}
    class={cn(
        'gap-md group/file flex flex-wrap items-center',
        COMPONENT_DISABLED_CONTAINER,
        clazz,
        wrapperClass,
    )}
>
    <input
        {...props}
        bind:this={fileInputRef}
        type="file"
        class="hidden"
        bind:files
        {multiple}
        {disabled}
    />

    <MockButton
        {...buttonProps}
        onclick={event => {
            buttonOnClick?.(event)
            if (event.defaultPrevented) return

            fileInputRef?.click()
        }}
        label="Browse..."
        {disabled}
    />

    <span
        {...spanProps}
        class={cn(
            'truncate group-has-disabled/file:text-current/50 hover:text-clip',
            spanClass,
        )}
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
