import React, { ReactElement } from 'react'
import Header from '../../../components/common/Header/Header'
import {GetStaticPropsContext, GetStaticPropsResult} from 'next'
import {getAllWorksIds, getWorkData} from '../../../data/workPagesFuncs'
import PortfolioConfig from '../../../data/PortfolioConfigType'
import Portfolio from '../../../components/workPage/Portfolio/Portfolio'

type HomePropType = {
    workData: PortfolioConfig.Item
}

export default function Home(props: HomePropType): ReactElement {
    const { workData } = props

    return (
        <>
            <Header />
            <Portfolio workData={workData} />
        </>
    )
}

export async function getStaticPaths(context: any) {
    return {
        paths: getAllWorksIds(),
        fallback: false
    }
}

export function getStaticProps(context: GetStaticPropsContext): GetStaticPropsResult<HomePropType> {
    // @ts-ignore
    const { sectionId, workId } = context.params

    return {
        props: {
            workData: getWorkData(sectionId, workId)
        }
    }
}