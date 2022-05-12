import React from 'react'

type DetailsParagraphPropType = {
    header: string
    text: string
}

export default function DetailsParagraph(props: DetailsParagraphPropType) {
    const { header, text } = props

    const CN = 'details-paragraph'

    return (
        <article>
            <h3 className={CN}>{header}</h3>
            <p className={`${CN}__text`}>{text}</p>
        </article>
    )
}

