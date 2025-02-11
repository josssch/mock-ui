<script
    lang="ts"
    module
>
    import type { MockInputProps } from './MockInput.svelte'

    export interface MockInputSubmitProps extends MockInputProps {}
</script>

<script lang="ts">
    import HeroCircleArrow from '../icons/HeroCircleArrow.svelte'
    import MockInput from './MockInput.svelte'

    let { value = $bindable(''), ...props }: MockInputSubmitProps = $props()
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
