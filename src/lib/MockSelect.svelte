<script lang="ts">
    import type { HTMLSelectAttributes } from 'svelte/elements'

    let {
        children,
        value = $bindable(),
        ...props
    }: HTMLSelectAttributes & {} = $props()
</script>

<select
    {...props}
    class="border-blur focus:border-focus enabled:hover:border-focus rounded-default px-md py-sm bg-subtle border-1 transition-colors disabled:cursor-not-allowed disabled:text-current/50"
    bind:value
>
    {#if children}
        {@render children()}
    {:else}
        <option value="null">No Options</option>
    {/if}
</select>
