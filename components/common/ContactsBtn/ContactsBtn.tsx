import React from 'react'
import { useAppSelector } from '../../../store/store'
import { makeCN } from '../../../utils/StringUtils'

export default function ContactsBtn() {
    const CN = 'contacts'

    const addresses = useAppSelector(state => state.addresses)

    // Создам массив с разметкой ссылок
    const linksMarkup = addresses.map((cellData, i) => {
        const spanCls = [`${CN}-btn__text`, `${CN}-btn__text__` + cellData.prefix]

        return (
            <a href={cellData.href} className={`${CN}__btn`} key={i} >
                <span className={makeCN(spanCls)}>
                    {cellData.text}
                </span>
            </a>
        )
    })

    return (
        <div className={CN}>
            <button className={`${CN}__front-btn`}>Контакты</button>
            <aside className={`${CN}__list`}>
                {linksMarkup}
            </aside>
        </div>
    )
}
