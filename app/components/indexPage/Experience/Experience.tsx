import React from 'react'
import { getData } from './ExperienceData'
import { ExperienceData } from './ExperienceTypes'

const CN = 'experience'

export default function Experience() {
    const items = getData().map((data, i) => {
        return (
            <section className={CN} key={i}>
                <h3 className={`${CN}__header`}>
                    {data.company}
                </h3>
                <p className={`${CN}__duration`}>
                    {data.duration}
                </p>
                <h4 className={`${CN}__position`}>
                    {data.position}
                </h4>
                <Description descriptions={data.description} />
            </section>
        )
    })

    return <>{items}</>
}

type DescriptionPropType = {
    descriptions: ExperienceData.DescriptionArr
}

function Description(props: DescriptionPropType) {

    const parts = props.descriptions.map((descItemData, i) => {
        if (descItemData.type === 'text') {
            return (
                <p className={`${CN}__description-text`} key={i}>
                    {descItemData.text}
                </p>
            )
        }
        else if (descItemData.type === 'list') {
            return (
                <ul className={`${CN}__description-list-ul`} key={i}>
                    {
                        descItemData.items.map((text, k) => {
                            return (
                                <li className={`${CN}__description-list-li`} key={k}>
                                    {text}
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
        else {
            return null
        }
    })

    return <>{parts}</>
}
