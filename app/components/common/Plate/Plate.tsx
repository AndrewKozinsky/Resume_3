import React, {ReactNode} from 'react'

type PlatePropType = {
    children: ReactNode
}

export default function Plate(prop: PlatePropType) {
    const CN = 'plate'

    return (
        <aside className={CN}>
            {prop.children}
        </aside>
    )
}
