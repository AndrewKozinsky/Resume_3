import React, {ReactNode, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeCN } from '../../../utils/StringUtils'

export type MenuPropType = {
    itemsDetails: MenuMenuItems | MenuSwitcherItems
    extraClass?: string
}

export type MenuMenuItems = {
    type: 'menu'
    items: MenuMenuItem[]
}
export type MenuMenuItem = {
    label: string
    to: string
}

export type MenuSwitcherItems = {
    type: 'switcher'
    items: MenuSwitcherItem[]
    initialActiveLabel?: string
}
export type MenuSwitcherItem = {
    label: string
    onClick?: any
}

const CN = 'menu'

export default function Menu(props: MenuPropType) {
    const { itemsDetails, extraClass } = props

    let itemsElems: ReactNode

    if (itemsDetails.type === 'menu') {
        itemsElems = <MenuItems details={itemsDetails} />
    }
    else if (itemsDetails.type === 'switcher') {
        itemsElems = <SwitcherItems details={itemsDetails} />
    }

    return (
        <nav className={makeCN([CN, extraClass])}>
            {itemsElems}
        </nav>
    )
}


type MenuItemPropType = {
    details: MenuMenuItems
}

function MenuItems(props: MenuItemPropType) {
    const { details } = props
    const router = useRouter()

    const itemsElems = details.items.map((itemData, i) => {
        let cls = [`${CN}__item`]

        // Is menu item must be active
        if(router.asPath === itemData.to || router.query.slug === itemData.to) {
            cls.push(`${CN}__item--active`)
        }

        // Is menu item pointed at parent page then it must be active
        const addressParts = router.asPath.split('/')
        const matchedPart = addressParts.find(part => part === itemData.to.slice(1))
        if (matchedPart?.length) cls.push(`${CN}__item--active`)

        if(!itemData.to) {
            cls.push(`${CN}__item--disabled`)
        }

        if (itemData.to) {
            return (
                <Link href={itemData.to} key={i}>
                    <a className={makeCN(cls)}>
                        {itemData.label}
                    </a>
                </Link>
            )
        }
        else {

            return (
                <span className={makeCN(cls)} key={i}>
                    {itemData.label}
                </span>
            )
        }
    })

    return <>{itemsElems}</>
}


type SwitcherItemPropType = {
    details: MenuSwitcherItems
}

function SwitcherItems(props: SwitcherItemPropType) {
    const { details } = props

    const [activeLabel, setActiveLabel] = useState(details.initialActiveLabel)

    const itemsElems = details.items.map((itemData, i) => {
        let cls = [`${CN}__item`]
        if (activeLabel === itemData.label) {
            cls.push(`${CN}__item--active`)
        }

        function onClickHandler(itemData: MenuSwitcherItem) {
            setActiveLabel(itemData.label)
            if (itemData.onClick) itemData.onClick()
        }

        const itemAttrs = {
            className: makeCN(cls),
            onClick: () => onClickHandler(itemData)
        }

        return (
            <button {...itemAttrs} key={i}>
                {itemData.label}
            </button>
        )
    })

    return <>{itemsElems}</>
}
