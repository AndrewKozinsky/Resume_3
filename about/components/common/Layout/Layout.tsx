import React, {ReactNode} from 'react'
import Footer from '../Footer/Footer'

type LayoutPropType = {
    children: ReactNode
}

export default function Layout(props: LayoutPropType) {
    const { children } = props

    return (
        <>
            <div className='main-part'>
                {children}
            </div>
            <footer className='bottom-part'>
                <Footer />
            </footer>
        </>
    )
}
