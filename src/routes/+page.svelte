<script>
    import HeroDollar from '$lib/icons/HeroDollar.svelte'
    import MockButton from '$lib/MockButton.svelte'
    import MockCheckbox from '$lib/MockCheckbox.svelte'
    import MockFileSelect from '$lib/MockFileSelect.svelte'
    import MockInput from '$lib/MockInput.svelte'
    import MockInputMultiline from '$lib/MockInputMultiline.svelte'
    import MockInputSubmit from '$lib/MockInputSubmit.svelte'
    import MockRadio from '$lib/MockRadio.svelte'
    import MockSelect from '$lib/MockSelect.svelte'
    import MockSlider from '$lib/MockSlider.svelte'
    import MockSwitch from '$lib/MockSwitch.svelte'
</script>

{#snippet icon()}
    <HeroDollar class="text-focus size-6" />
{/snippet}

{#snippet heading(/** @type {string} */ text)}
    <h1 class="w-full text-center text-3xl font-bold">{text}</h1>
{/snippet}

<div class="gap-xl p-xl flex flex-wrap items-start justify-center">
    {@render heading('Buttons')}

    <MockButton>
        {@render icon()}
        <span>Some Text</span>
    </MockButton>

    <MockButton
        href="#button"
        label="Ghost"
        ghost
        small
    />

    <MockButton
        label="Disabled"
        disabled
    />

    <MockButton circle>{@render icon()}</MockButton>

    {@render heading('Inputs')}

    <MockInput
        left={icon}
        placeholder="Amount..."
    />

    <MockInput
        placeholder="Example"
        disabled
    />

    <MockInput
        placeholder="Ghost"
        ghost
    />

    <form action="#submitted">
        <MockInputSubmit
            type="password"
            placeholder="Password..."
        />
    </form>

    <MockInputMultiline placeholder="So many lines" />
    <MockInputMultiline
        placeholder="No lines for you"
        disabled
    />

    {@render heading('Checkboxes')}

    <MockCheckbox
        label="Check Me"
        checked
    />

    <MockCheckbox
        label="Cannot Check Me"
        checked
        disabled
    />

    <MockSwitch
        label="Switch Me"
        checked
    />

    <MockSwitch
        label="No Switching Me"
        checked
        disabled
    />

    {@render heading('Selection')}

    <MockSelect>
        <optgroup label="Foo">
            <option value="1">Foo</option>
        </optgroup>

        <optgroup label="Bar">
            <option value="2">Bar</option>
            <option value="3">Baz</option>
        </optgroup>
    </MockSelect>

    <MockSelect disabled></MockSelect>

    {@render heading('Slider')}

    <MockSlider />

    {@render heading('Radio Buttons')}

    <ul>
        <li>
            <MockRadio
                label="Radio 1"
                name="radio"
                value="1"
                group="1"
            />
        </li>

        <li>
            <MockRadio
                label="Radio 2"
                name="radio"
                value="2"
            />
        </li>

        <li>
            <MockRadio
                label="Radio 3"
                name="radio"
                value="3"
                disabled
            />
        </li>
    </ul>

    {@render heading('File Select')}

    <MockFileSelect />
    <MockFileSelect multiple />
    <MockFileSelect disabled />
</div>
