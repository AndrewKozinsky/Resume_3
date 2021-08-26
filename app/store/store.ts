import { useMemo } from 'react'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
//@ts-ignore
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'


let store: any

function initStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState: any) => {
    let _store = store ?? initStore()

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore() {
    //@ts-ignore
    return useMemo(initializeStore, [])
}


export type AppStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector