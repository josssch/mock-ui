<script
    lang="ts"
    module
>
    import type { MockInputProps } from './MockInput.svelte'

    export interface MockInputSubmitProps extends MockInputProps {}
</script>

<script lang="ts">
    import MockInput from './MockInput.svelte'

    let { value = $bindable(''), ...props }: MockInputSubmitProps = $props()
</script>

<MockInput
    {...props}
    bind:value
>
    {#snippet right()}
        <button
            type="submit"
            class="size-full cursor-pointer"
            aria-label="Submit"
        >
            <!-- HeroIcon's arrow-right-circle -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        </button>
    {/snippet}
</MockInput>
