import React from 'react'
import Link from 'next/link'
import Menu from '../Menu/Menu'
import ContactsBtn from '../ContactsBtn/ContactsBtn'
import { useGetMainLinkHover } from './Header-func'
import {MenuMenuItems} from '../Menu/MenuTypes'

const menuItems: MenuMenuItems = {
    type: 'menu',
    items: [
        {label: 'Главная', to: '/'},
        {label: 'Код', to: '/code'},
        {label: 'Макеты', to: '/design'},
    ]
}

export default function Header() {
    const CN = 'header'

    const onMainLintMouseEnter = useGetMainLinkHover(true)
    const onMainLintMouseLeave = useGetMainLinkHover(false)

    return (
        <header className={CN}>
            <div className={`${CN}__left-side`}>
                <Link href='/'>
                    <a>
                        <p
                            className={`${CN}__header`}
                            onMouseEnter={onMainLintMouseEnter}
                            onMouseLeave={onMainLintMouseLeave}
                        >
                            Андрей Козинский
                        </p>
                    </a>
                </Link>
                <p className={`${CN}__subtext`}>33 года, Оренбург</p>
            </div>
            <div className={`${CN}__right-side`}>
                <Menu itemsDetails={menuItems} extraClass={`${CN}__menu`} />
                <ContactsBtn />
            </div>
        </header>
    )
}