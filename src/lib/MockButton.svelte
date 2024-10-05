<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'

    import cn from './utils/class-merge.js'

    let {
        children,
        label,
        small,
        circle,
        class: clazz,
        type = 'button',
        ghost = false,
        ...props
    }: HTMLButtonAttributes & {
        label?: string
        ghost?: boolean
        circle?: boolean
        small?: boolean
        class?: string
    } = $props()
</script>

<button
    {...props}
    {type}
    class={cn(
        'gap-sm group-button flex cursor-pointer items-center font-medium disabled:cursor-not-allowed disabled:text-current/50',
        !small && (circle ? 'p-sm' : 'px-md py-sm'),
        circle ? 'aspect-square rounded-full' : 'rounded-default',
        ghost
            ? 'hover:underline'
            : 'enabled:from-primary enabled:to-primary-lighter border-blur enabled:hover:border-focus border-1 bg-gradient-to-t transition active:transition-none enabled:active:translate-y-0.5',
        clazz,
    )}
>
    {#if children}
        {@render children()}
    {:else if label}
        <span>{label}</span>
    {/if}
</button>
