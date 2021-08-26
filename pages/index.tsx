import { ReactElement } from 'react'
import Header from '../components/common/Header/Header'
import AboutDev from '../components/indexPage/AboutDev/AboutDev'
import DetailsDev from '../components/indexPage/DetailsDev/DetailsDev'
import Info from '../components/indexPage/Info/Info'
import Tools from '../components/indexPage/Tools/Tools'
import Experience from '../components/indexPage/Experience/Experience'
import ToPortfolioButton from '../components/indexPage/ToPortfolioButton/ToPortfolioButton'

export default function Home(): ReactElement {
    return (
        <>
            <Header />
            <AboutDev />
            <DetailsDev />
            <Info>
                <Tools />
                <Experience />
            </Info>
            <ToPortfolioButton />
        </>
    )
}

