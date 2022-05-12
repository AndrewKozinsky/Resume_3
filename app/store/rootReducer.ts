import { addresses } from './addresses'
import RootReducerTypes from './rootTypes'

console.log()

type RootReducerType = {
    addresses: RootReducerTypes.Addresses
    portfolioMobileView: RootReducerTypes.PortfolioMobileView
    enteredOnAuthorName: RootReducerTypes.EnteredOnAuthorName
}

const initialState: RootReducerType = {
    addresses: addresses,
    portfolioMobileView: 'Меню',
    enteredOnAuthorName: false
}

function setPortfolioMobileView(state: RootReducerType, action: RootReducerTypes.SetPortfolioMobileViewAction): RootReducerType {
    return {
        ...state,
        portfolioMobileView: action.payload
    }
}

function setEnteredOnAuthorName(state: RootReducerType, action: RootReducerTypes.SetEnteredOnAuthorNameAction): RootReducerType {
    return {
        ...state,
        enteredOnAuthorName: action.payload
    }
}

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PORTFOLIO_MOBILE_VIEW':
            return setPortfolioMobileView(state, action)
        case 'SET_ENTERED_ON_AUTHOR_NAME':
            return setPortfolioMobileView(state, action)
        default:
            return state
    }
}

