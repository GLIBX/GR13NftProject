import { Chains } from "./chains";

export function getChainIds () {
    const chainData = [...Chains]
    const ids = []

    chainData.map((each) => (
        ids.push({
            id: each.id,
            label: each.label
        })
    ))

    return ids
}