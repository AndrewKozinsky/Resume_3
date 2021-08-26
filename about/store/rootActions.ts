import RootReducerTypes from './rootTypes'

const rootActions = {
    setPortfolioMobileView(payload: RootReducerTypes.PortfolioMobileView): RootReducerTypes.SetPortfolioMobileViewAction {
        return {
            type: RootReducerTypes.SET_PORTFOLIO_MOBILE_VIEW,
            payload
        }
    },

    setEnteredOnAuthorName(payload: RootReducerTypes.EnteredOnAuthorName): RootReducerTypes.SetEnteredOnAuthorNameAction {
        return {
            type: RootReducerTypes.SET_ENTERED_ON_AUTHOR_NAME,
            payload
        }
    },
}

export default rootActions