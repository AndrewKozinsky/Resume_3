import {ReactNode, useEffect} from 'react'
import {GetStaticPropsContext, GetStaticPropsResult } from 'next'
import {getWorksConfigBySectionName} from '../../data/workPagesFuncs'
import {useRouter} from 'next/router'


export type SectionIdType = 'code' | 'design'

type SectionPagePropType = {
    sectionId: SectionIdType
}

export default function SectionPage(props: SectionPagePropType): ReactNode {
    const { sectionId } = props
    const router = useRouter()

    useEffect(function() {
        const firstWorkAddress = sectionId + '/' + getWorksConfigBySectionName(sectionId)[0].portfolioLink
        router.push( firstWorkAddress )
    })

    return null
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {sectionId: 'code'}},
            {params: {sectionId: 'design'}},
        ],
        fallback: false
    }
}

export function getStaticProps(context: GetStaticPropsContext): GetStaticPropsResult<SectionPagePropType> {
    let sectionId: SectionIdType = context.params?.sectionId
        ? context.params.sectionId as SectionIdType
        : 'code'

    return {
        props: {
            sectionId
        }
    }
}

