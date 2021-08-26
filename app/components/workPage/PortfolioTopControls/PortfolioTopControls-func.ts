import {useDispatch} from 'react-redux'
import rootActions from '../../../store/rootActions'
import { useAppSelector } from '../../../store/store'
import RootReducerTypes from '../../../store/rootTypes'
import {getWorksConfigBySectionName} from '../../../data/workPagesFuncs'
import PortfolioConfig from '../../../data/PortfolioConfigType'

export function useGetLeftSwitcherItemClickHandler() {
    const dispatch = useDispatch()
    const portfolioMobileView = useAppSelector(store => store.portfolioMobileView)

    return function () {
        let newView: RootReducerTypes.PortfolioMobileView =
            portfolioMobileView === 'Меню' ? 'Описание' : 'Меню'

        dispatch(rootActions.setPortfolioMobileView(newView))
    }
}


export function useGetPrevAndNextWorkUrl(workItem: PortfolioConfig.Item) {
    const worksWithTheSaveSet = getWorksConfigBySectionName(workItem.set)

    const currentWorkIdx = worksWithTheSaveSet.findIndex(workData => workData.portfolioLink === workItem.portfolioLink)


    const addBefore = '/' + workItem.set + '/'

    let prevUrl = ''
    if (worksWithTheSaveSet[currentWorkIdx - 1]) {
        prevUrl = addBefore + worksWithTheSaveSet[currentWorkIdx - 1]?.portfolioLink
    }

    let nextUrl = ''
    if (worksWithTheSaveSet[currentWorkIdx + 1]) {
        nextUrl = addBefore + worksWithTheSaveSet[currentWorkIdx + 1]?.portfolioLink
    }

    return { prevUrl, nextUrl }
}
