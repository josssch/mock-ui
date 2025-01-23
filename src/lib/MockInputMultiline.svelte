<script
    lang="ts"
    module
>
    import type {
        FormEventHandler,
        HTMLTextareaAttributes,
    } from 'svelte/elements'

    export interface MockInputMultilineProps extends HTMLTextareaAttributes {}
</script>

<script lang="ts">
    import { browser } from '$app/environment'

    import {
        COMPONENT_BORDER_FOCUS,
        COMPONENT_DISABLED,
    } from './tailwind-common.js'
    import cn from './utils/class-merge.js'

    let {
        value = $bindable(''),
        class: clazz,
        oninput,
        ...props
    }: MockInputMultilineProps = $props()

    const fieldResizer:
        | FormEventHandler<HTMLTextAreaElement>
        | null
        | undefined =
        !browser || CSS.supports('field-sizing', 'content')
            ? oninput
            : event => {
                  oninput?.(event)
                  if (event.defaultPrevented) return

                  const target = event.target
                  if (!(target instanceof HTMLTextAreaElement)) return

                  target.style.height = ''
                  target.style.height = `${target.scrollHeight}px`

                  target.style.width = ''
                  target.style.width = `${target.scrollWidth}px`
              }
</script>

<textarea
    {...props}
    oninput={fieldResizer}
    class={cn(
        'rounded-default bg-subtle py-sm px-md field-sizing-content max-h-32 min-h-16 w-64 resize-none transition-colors',
        COMPONENT_BORDER_FOCUS,
        COMPONENT_DISABLED,
        clazz,
    )}
    bind:value
></textarea>
