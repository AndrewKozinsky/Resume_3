import PortfolioConfig from '../../../data/PortfolioConfigType'
import { MenuMenuItems } from '../../common/Menu/MenuTypes'

export type ItemsInCategoriesType = {
    [key: string]: PortfolioConfig.Items
}

export function divideItemsByCategories(config: PortfolioConfig.Items): ItemsInCategoriesType {
    const result: ItemsInCategoriesType = {}

    config.forEach(item => {
        const itemCategory = item.category || ''

        result[itemCategory] = []
    })

    config.forEach(item => {
        const itemCategory = item.category || ''

        result[itemCategory].push(item)
    })

    return result
}

export function getItemsConfigForMenuComponent(
    workData: PortfolioConfig.Item, items: PortfolioConfig.Items
): MenuMenuItems {
    return {
        type: 'menu',
        items: items.map(item => ({
            label: item.title,
            to: '/' + workData.set + '/' + item.portfolioLink
        }))
    }
}
