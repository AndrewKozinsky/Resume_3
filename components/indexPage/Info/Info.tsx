import React, {ReactElement} from 'react'

type InfoPropType = {
    children: [ReactElement, ReactElement]
}

export default function Info(prop: InfoPropType) {
    const { children } = prop

    const CN = 'info'

    return (
        <section className={CN}>
            <div>
                <h2 className={`${CN}__header`}>Инструменты</h2>
                {children[0]}
            </div>
            <div>
                <h2 className={`${CN}__header`}>Опыт работы</h2>
                {children[1]}
            </div>
        </section>
    )
}
