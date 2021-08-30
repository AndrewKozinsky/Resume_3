import React from 'react'

namespace PortfolioConfig {
    export type Items = Item[]

    export type Item = {
        set: Set
        category?: string
        title: string
        portfolioLink: string
        siteLinkText?: string
        siteLink?: string
        shortDescription?: string
        tags?: string[]
        github?: string
        description?: Description
    }

    export type Set = 'code' | 'design'

    type Description = DescriptionItem[]
    export type DescriptionItem = DescriptionTextItem | DescriptionImageItem | DescriptionVideoItem
    export type DescriptionTextItem = {
        type: 'text'
        text: string
    }
    export type DescriptionImageItem = {
        type: 'image'
        images: DescriptionImageItemSource[]
    }
    type DescriptionImageItemSource = {
        src: string
        retina?: true
    }

    export type DescriptionVideoItem = {
        type: 'video'
        videos: DescriptionVideoItemSource[]
    }
    type DescriptionVideoItemSource = {
        src: string
    }
}


export default PortfolioConfig