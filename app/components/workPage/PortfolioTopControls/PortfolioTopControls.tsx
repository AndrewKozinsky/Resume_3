import React, {useCallback, useMemo} from 'react'
import Menu from '../../common/Menu/Menu'
import {useAppSelector} from '../../../store/store'
import {
    useGetPrevAndNextWorkUrl,
    useGetLeftSwitcherItemClickHandler
} from './PortfolioTopControls-func'
import PortfolioConfig from "../../../data/PortfolioConfigType"
import {MenuMenuItems, MenuSwitcherItems } from '../../common/Menu/MenuTypes'


const CN = 'portfolio-top-controls'

type PortfolioTopControlsPropType = {
    workData: PortfolioConfig.Item
}

export default function PortfolioTopControls(props: PortfolioTopControlsPropType) {
    const { workData } = props

    return (
        <>
            <div className={`${CN}__top-mobile-part`}>
                <LeftSwitcher />
                <AnotherWorksLinks workData={workData} />
            </div>
        </>
    )
}


function LeftSwitcher() {
    const portfolioMobileView = useAppSelector(store => store.portfolioMobileView)

    const onClickHandler = useGetLeftSwitcherItemClickHandler()

    const items: MenuSwitcherItems = {
        type: 'switcher',
        items: [
            { label: 'Меню', onClick:  onClickHandler},
            { label: 'Описание', onClick: onClickHandler }
        ],
        initialActiveLabel: portfolioMobileView
    }

    return <Menu itemsDetails={items} extraClass={`${CN}__top-mobile-view-switcher`} />
}


type TopMobilePartPropType = {
    workData: PortfolioConfig.Item
}

function AnotherWorksLinks(props: TopMobilePartPropType) {
    const { workData } = props

    const { prevUrl, nextUrl } = useGetPrevAndNextWorkUrl(workData)

    const items: MenuMenuItems = {
        type: 'menu',
        items: [
            { label: 'Пред.', to: prevUrl },
            { label: 'След.', to: nextUrl }
        ],
    }

    return <Menu itemsDetails={items} extraClass={`${CN}__top-mobile-page-links`} />
}

