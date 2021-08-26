import { addresses } from "./addresses";

namespace RootReducerTypes {

    export type Addresses = typeof addresses
    export type PortfolioMobileView = 'Меню' | 'Описание'
    export type EnteredOnAuthorName = boolean

    export const SET_PORTFOLIO_MOBILE_VIEW = 'SET_PORTFOLIO_MOBILE_VIEW'
    export type SetPortfolioMobileViewAction = {
        type: typeof SET_PORTFOLIO_MOBILE_VIEW
        payload: PortfolioMobileView
    }

    export const SET_ENTERED_ON_AUTHOR_NAME = 'SET_ENTERED_ON_AUTHOR_NAME'
    export type SetEnteredOnAuthorNameAction = {
        type: typeof SET_ENTERED_ON_AUTHOR_NAME
        payload: EnteredOnAuthorName
    }


    export type RootAction =
        | SetPortfolioMobileViewAction
        | SetEnteredOnAuthorNameAction
}

export default RootReducerTypes