/** @type {import('prettier').Config} */
export default {
    plugins: [
        '@ianvs/prettier-plugin-sort-imports',
        'prettier-plugin-svelte',
        'prettier-plugin-tailwindcss',
    ],

    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],

    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    endOfLine: 'lf',
    printWidth: 80,
    proseWrap: 'preserve',
    semi: false,
    singleAttributePerLine: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',

    tailwindAttributes: ['tw', 'class'],
    tailwindFunctions: ['clsx', 'twMerge', 'cn'],

    importOrder: [
        '<TYPES>',
        '<TYPES>^[./]',
        '',
        '<BUILTIN_MODULES>',
        '<THIRD_PARTY_MODULES>',
        '',
        '^\\$lib',
        '^[./]',
        '',
    ],
}
