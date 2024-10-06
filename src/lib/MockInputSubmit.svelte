<script lang="ts">
    import type { MockInputProps } from './MockInput.svelte'

    import HeroCircleArrow from './icons/HeroCircleArrow.svelte'
    import MockInput from './MockInput.svelte'

    let { value = $bindable(''), ...props }: MockInputProps = $props()
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
    bind:value
/>
