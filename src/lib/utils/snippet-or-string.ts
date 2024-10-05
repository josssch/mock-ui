import type { Snippet } from 'svelte'

import { createRawSnippet } from 'svelte'

export type SnippetOrString = string | Snippet

export function toSnippet(str: SnippetOrString) {
    if (typeof str !== 'string') {
        return str
    }

    return createRawSnippet(() => ({
        render: () => str,
    }))
}
