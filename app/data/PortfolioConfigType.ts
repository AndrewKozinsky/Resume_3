
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
    export type DescriptionItem = DescriptionHeaderItem | DescriptionTextItem | DescriptionImageItem | DescriptionVideoItem

    export type DescriptionHeaderItem = {
        type: 'header',
        tag: 'h2' | 'h3'
        text: string
    }

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
        poster?: string
        videos: DescriptionVideoItemSource[]
    }
    type DescriptionVideoItemSource = {
        src: string
    }
}


export default PortfolioConfig
