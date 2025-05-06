/*
 * The question here is probably: why not use classes -- that's the POINT of CSS!?
 *
 * It's because given the circumstances of using Tailwind & `tailwind-merge`, it makes more sense
 * to place Tailwind classes on components so they are easily overridable. The point of this library
 * is to be super quick to use, so when conflicting Tailwind classes come into the `class=` attribute it
 * should behave and merge as expected without then need for `!important`.
 */

export const COMPONENT_BORDER = 'border border-outline-dim'
export const COMPONENT_BORDER_FOCUS = `${COMPONENT_BORDER} focus:border-outline`
export const COMPONENT_BORDER_HOCUS = `${COMPONENT_BORDER_FOCUS} enabled:hover:border-outline`

export const COMPONENT_DISABLED =
    'disabled:border-transparent disabled:cursor-not-allowed disabled:text-current/50'

export const COMPONENT_DISABLED_CONTAINER = 'has-disabled:cursor-not-allowed'
