import React from 'react'
import {useAppSelector} from '../../../store/store'
import { makeCN } from '../../../utils/StringUtils'


export default function Footer() {
    const CN = 'footer'

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

    return (
        <address className={CN}>
            {cellsMarkup}
        </address>
    )
}

