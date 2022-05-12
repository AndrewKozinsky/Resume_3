import React from 'react'
import { useAppSelector } from '../../../store/store'
import { makeCN } from '../../../utils/StringUtils'

const CN = 'footer'

export default function Footer() {
    return (
        <address className={CN}>
            <Cells />
        </address>
    )
}

function Cells() {
    const addresses = useAppSelector(state => state.addresses)

    const cellsMarkup = addresses.map(cellData => {
        // Класс ссылки
        const linkCls = [`${CN}-link`, 'black-link', `${CN}-link__` + cellData.prefix]

        // Возвращаю разметку ссылки
        return (
            <div className={`${CN}__cell`} key={cellData.prefix}>
                <a href={cellData.href} className={makeCN(linkCls)}>
                    {cellData.text}
                </a>
            </div>
        )
    })

    return <>{cellsMarkup}</>
}