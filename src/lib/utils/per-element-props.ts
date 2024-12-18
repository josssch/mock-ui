type Props = Record<string, any>
type PropKeys<T extends Props> = Extract<keyof T, string>

type GroupKey<G extends string, K extends string> = `${G}-${K}`

export type PropsFor<GroupName extends string, P extends Props> = {
    [K in PropKeys<P> as GroupKey<GroupName, K>]?: P[K]
}

export type GroupsFrom<P extends Props, Groups extends string[]> = {
    // for every single group named provided
    [GroupName in Groups[number]]: {
        // for every key in Props that starts with this particular GroupName,
        // extract the part after the dash, and rename it back to how it was
        [K in PropKeys<P> as K extends GroupKey<GroupName, infer Rest>
            ? Rest
            : never]: P[K]
    }
}

export default function getPerElementProps<S extends string[], P extends Props>(
    props: P,
    ...groups: S
): GroupsFrom<P, S> {
    // create an object with each group as a key, with an empty object for each
    // ['label', 'example'] => { label: {}, example: {} }
    const groupsFromProps = groups.reduce(
        (prev, g) => ({ ...prev, [g]: {} }),
        {} as GroupsFrom<P, S>,
    )

    for (const [key, value] of Object.entries(props)) {
        const group = groups.find(g => key.startsWith(`${g}-`)) as
            | S[number]
            | undefined

        if (!group) continue

        const newKey = key.slice(
            `${group}-`.length,
        ) as keyof (typeof groupsFromProps)[typeof group]

        groupsFromProps[group][newKey] = value

        // delete it from the props, as expected
        delete props[key]
    }

    return groupsFromProps
}
