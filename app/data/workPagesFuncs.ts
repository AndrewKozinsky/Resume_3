import portfolioConfigItems from './portfolioConfigs'
import { SectionIdType } from '../pages/[sectionId]'
import PortfolioConfig from './PortfolioConfigType'


export function getWorksConfigBySectionName(sectionName: SectionIdType): PortfolioConfig.Items {
    const worksArr: PortfolioConfig.Items = portfolioConfigItems.filter(item => {
        return item.set === sectionName
    })

    return worksArr
}

export function getAllWorksIds() {
    return portfolioConfigItems.map(item => {
        return {
            params: {
                sectionId: item.set,
                workId: item.portfolioLink
            }
        }
    })
}

export function getWorkData(set: PortfolioConfig.Set, workLink: string): PortfolioConfig.Item {
    const workIdx = portfolioConfigItems.findIndex(item => {
        return (item.set === set && item.portfolioLink === workLink)
    })

    return portfolioConfigItems[workIdx]
}
