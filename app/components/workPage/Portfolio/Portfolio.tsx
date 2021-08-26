import React from 'react'
import PortfolioConfig from '../../../data/PortfolioConfigType'
// import {codePortfolioConfig, designPortfolioConfig} from '../data/portfolioConfigs'
import PortfolioTopControls from '../PortfolioTopControls/PortfolioTopControls'
import { useGetMainLeftAndRightClasses } from './Portfolio-func'
import { makeCN } from '../../../utils/StringUtils'
import {getWorksConfigBySectionName} from '../../../data/workPagesFuncs'
import PortfolioMenu from '../PortfolioMenu/PortfolioMenu'
import PortfolioContent from '../PortfolioContent/PortfolioContent'

type PortfolioPropType = {
    workData: PortfolioConfig.Item
}

export default function Portfolio(props: PortfolioPropType) {
    const { workData } = props

    const CN = 'portfolio'

    const { mainLeftClasses, mainRightClasses } = useGetMainLeftAndRightClasses(CN)

    return (
        <section className={CN}>
            <div className={`${CN}__top-part`}>
                <PortfolioTopControls workData={workData} />
            </div>
            <div className={`${CN}__main-part`}>
                <div className={ makeCN(mainLeftClasses) }>
                    <PortfolioMenu workData={workData} />
                </div>
                <div className={ makeCN(mainRightClasses) }>
                    <PortfolioContent workData={workData} />
                </div>
            </div>
        </section>
    )
}
