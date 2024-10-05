<script lang="ts">
    import type { MockInputProps } from './MockInput.svelte'

    import HeroCircleArrow from './icons/HeroCircleArrow.svelte'
    import MockInput from './MockInput.svelte'
    import cn from './utils/class-merge.js'

    let {
        class: clazz,
        value = $bindable(''),
        ...props
    }: MockInputProps = $props()
</script>

{#snippet submit()}
    <button
        type="submit"
        class="size-full cursor-pointer"
    >
        <HeroCircleArrow />
    </button>
{/snippet}

<MockInput
    {...props}
    right={submit}
    class={cn('pr-8', clazz)}
    bind:value
/>
