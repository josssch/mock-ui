# Mock UI

Very simple component library made in [Svelte v5](https://svelte.dev/) and [Tailwind v4](https://tailwindcss.com/). The point of this for me was to test out what each update is bringing to the table. But now, has turned into what I consider to be a very useful component starter-pack for my projects.

![Preview of Components](docs/preview_2025-02.png)

## Visual Design Language

I tried keeping a consistent design language across all components, primarily ones that are interactable (form components).

1. All Components
    - Light border (white with 25% opacity), which allows it to play off the backgroud color and is therefore widely applicable
        - The border becomes lighter (50% opacity) when the user is only _one step away_ from using a component
    - Compact in size, allowing for easier scaling
2. Disabled Components
    - Borders disappear, which let's them blend into the background
        - Their color is set to `transparent` so they don't shrink in size
    - Cursor is `not-allowed`
    - Text color should be 50% less opaque

## API Design

I have tried to make it so components make use of Svelte v5's new feature, [Snippets](https://svelte.dev/docs/svelte/svelte#Snippet), wherever they can. These effectively allow for passing Svelte code as arguments, but I avoided that where I could.

### Example 1 / `MockButton`

In some component's cases, they accept children in place of the `label` attribute.

```html
<!-- This is valid -->
<MockButton>Label</MockButton>

<!-- But I prefer this way unless you need HTML -->
<MockButton label="Label" />
```

If you need to pass in some fancily styled elements it's worth noting that all components that render children have the `group/<component>` Tailwind class on them. In `MockButton`'s case, it is `group/button`.

### Example 2 / `MockInput`

`MockInput` allows you to pass snippets to render buttons or icons on the left or right side of the input field.

```svelte
{#snippet right()}
    <Icon
        class="size-6"
        data={faX}
    />
{/snippet}

<MockInput {right} />
```

### Example 3 / Recoloring Components

All components primarily make use of `var(--color-component)` for their coloring. Through the power of Tailwind, it's now very easy to change the color of a component or a group of components.

```svelte
<!-- this makes the button turn red -->
<MockButton
    class="component-red-500"
    label="Hello world"
/>
```

The format is `component-<color>` where `<color>` is any Tailwind color. This also trickles down to child elements, so you can easily change the color of a group of components.

```svelte
<!-- makes both buttons red -->
<div class="component-red-500">
    <MockButton label="Hello world" />
    <MockButton label="Hey world" />
</div>

<!-- remains the default primary color -->
<MockButton label="Hi world" />
```

The primary color is also configurable in the Tailwind config.

### Component Props

All unknown props passed to a component are passed to the target component element. Which means, aside from wrapper elements, you aren't missing access to any attributes on mock components.

### The `class` Attribute

All classes passed into `class` on all components are merged with `tailwind-merge` on the primary visual element of the component.

## Accessibility

All components are designed to be keyboard accessible, by keeping them as simple and as close to their original counterparts as possible. All components work with plain `<form>` tags.

## Todo

Things I'd like to accomplish in this component library in order for me to consider it complete.

- [x] `MockFileSelect`
    - [ ] Make inner `MockButton` not require an onclick handler, likely the solution will be replacing the button with a different element
- [x] `MockSelect`
    - [ ] Fix default appearance in Safari to not be glossy
- [x] `MockSlider`
    - [x] Add track fill, preferably without the need for JavaScript
- [x] Consistently use CSS variables for coloring, this way setting a variable can trickle down to child elements and overall feel more natural to change (a lot like what's done in `MockInput` for `ghost`)
    - This is achieved now by using the custom written `component-<color>` Tailwind utility. This utility sets the `--color-component` CSS variable on the element it is applied to. This means now changing the color of a component, or even a group of components, is as simple as using `component-blue-600` as a CSS class.
- [ ] `shadcn/ui`-like CLI for installing components
- [ ] For components where they are comprised of several HTML elements, it's not immediately clear where the rest of the `$props()` go. Furthermore, it's _annoying_ you have to even choose where they go, **a prop grouping API** where other elements can be specified with a prefix (e.g. `<el>-<prop>`, `label-class="max-w-36"` makes `class` apply to `label`, `svg-class="size-24"` applies `class` to a given `svg`, etc.)

## Final Notes

- I have not set this up to be used as a library, but more as a boilerplate repository
- The current set of components currently are focused around being form compatible
