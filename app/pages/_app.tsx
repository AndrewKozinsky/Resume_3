import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import Layout from '../components/common/Layout/Layout'
import '../styles/index.scss'

export default function App({Component, pageProps}: AppProps) {
    const store = useStore()

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
