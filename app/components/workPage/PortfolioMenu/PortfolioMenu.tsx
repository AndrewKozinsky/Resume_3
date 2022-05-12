import React, { ReactElement, useMemo } from 'react'
import {
    divideItemsByCategories,
    getItemsConfigForMenuComponent,
    ItemsInCategoriesType
} from './PortfolioMenu-func'
import Menu from '../../common/Menu/Menu'
import { makeCN } from '../../../utils/StringUtils'

const CN = 'portfolio-menu'

import {getWorksConfigBySectionName} from '../../../data/workPagesFuncs'
import PortfolioConfig from '../../../data/PortfolioConfigType'

type PortfolioMenuPropType = {
    workData: PortfolioConfig.Item
}

const PortfolioMenu = (props: PortfolioMenuPropType) => {
    const { workData } = props

    const config = getWorksConfigBySectionName(workData.set)

    const itemsInCategories: ItemsInCategoriesType = useMemo(function () {
        return divideItemsByCategories(config)
    }, [config])

    const resultArr: ReactElement[] = []

    Object.keys(itemsInCategories).forEach(function (catName: string, i: number) {
        if (catName) {
            const subHeaderAttrs: SubheaderPropType = {
                header: catName,
                topOffset: i > 0
            }
            resultArr.push(<Subheader {...subHeaderAttrs} key={catName} />)
        }
        const itemsConfig = getItemsConfigForMenuComponent(workData, itemsInCategories[catName])
        resultArr.push(<Menu itemsDetails={itemsConfig} key={catName + '1'} />)
    })

    return (
        <>
            {resultArr}
        </>
    )
}

export default PortfolioMenu


type SubheaderPropType = {
    header: string
    topOffset?: boolean
}
function Subheader(props: SubheaderPropType) {
    const { header, topOffset } = props

    const classes = [`${CN}__header`]
    if (topOffset) classes.push(`${CN}__header--top-offset`)

    return <h4 className={makeCN(classes)}>{header}</h4>
}

