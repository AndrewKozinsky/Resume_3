import React from 'react'
import PortfolioConfig from '../../../data/PortfolioConfigType'

const CN = 'portfolio-content'

type PortfolioContentPropType = {
    workData: PortfolioConfig.Item
}

export default function PortfolioContent(props: PortfolioContentPropType) {
    const { workData } = props

    return (
        <>
            <Header workData={workData} />
            <ShortDescription workData={workData} />
            <OuterLinks workData={workData} />
            <Tags workData={workData} />
            <FullDescription workData={workData} />
        </>
    )
}

type CommonPropType = {
    workData: PortfolioConfig.Item
}

function Header(props: CommonPropType) {
    const { workData } = props
    return <h1 className={`${CN}__header`}>{workData.title}</h1>
}

function ShortDescription(props: CommonPropType) {
    const { workData } = props
    return <p className={`${CN}__short-description`}>{workData.shortDescription}</p>
}

function OuterLinks(props: CommonPropType) {
    const { workData } = props

    if (!workData.github && !workData.siteLink) return null

    let siteLink = null
    if (workData.siteLink && workData.siteLinkText) {
        siteLink = (
            <div className={`${CN}__outer-link`} key='site'>
                <img src="/icons/site.svg" className={`${CN}__outer-link-icon`} alt=""/>
                <a href={workData.siteLink} className={`${CN}__outer-link-link`}>
                    {workData.siteLinkText}
                </a>
            </div>
        )
    }

    let githubLink = null
    if (workData.github) {
        githubLink = (
            <div className={`${CN}__outer-link`} key='github'>
                <img src="/icons/github.svg" className={`${CN}__outer-link-icon`} alt=""/>
                <a href={workData.github} className={`${CN}__outer-link-link`}>
                    Код на GitHub
                </a>
            </div>
        )
    }


    return (
        <div className={`${CN}__outer-links`}>
            {[siteLink, githubLink]}
        </div>
    )
}

function Tags(props: CommonPropType) {
    const { workData } = props

    if (!workData.tags) return null

    const tagElems = workData.tags.map(tagName => {
        return <span className={`${CN}__tag`} key={tagName}>{tagName}</span>
    })

    return <p className={`${CN}__tags`}>{tagElems}</p>
}

function FullDescription(props: CommonPropType) {
    const { workData } = props

    if (!workData.description) return null

    const descriptionParts = workData.description.map((descItem, i) => {
        if (descItem.type === 'text') {
            return <FullDescriptionText item={descItem} key={i} />
        }
        else if (descItem.type === 'image') {
            return <FullDescriptionImage item={descItem} key={i} />
        }
    })

    return (
        <div className={`${CN}__full-description`}>
            {descriptionParts}
        </div>
    )
}

type FullDescriptionTextItemPropType = {
    item: PortfolioConfig.DescriptionTextItem
}

function FullDescriptionText(props: FullDescriptionTextItemPropType) {
    const { item } = props

    return (
        <p className={`${CN}__full-description-text`}>
            {item.text}
        </p>
    )
}

type FullDescriptionImageItemPropType = {
    item: PortfolioConfig.DescriptionImageItem
}

function FullDescriptionImage(props: FullDescriptionImageItemPropType) {
    const { item } = props

    // Set type to images
    const images = item.images.map(imageData => {
        const imageTypes = imageData.src.split('.')
        const imageType = imageTypes[imageTypes.length - 1]

        return { ...imageData, type: imageType }
    })

    const sources = images.map((imageData, i) => {
        // Get image src like /portfolio/kflex_des/kflex_1
        const imageSrcWithoutFileExtension = imageData.src.split('.')[0]

        // Get image full srcset
        let srcSet = imageData.src
        if (imageData.retina) srcSet += `, ${imageSrcWithoutFileExtension}@2x.${imageData.type} 2x`

        return <source type={`image/${imageData.type}`} srcSet={srcSet} key={i} />
    })

    const mainImg = images.find(imageData => ['jpg', 'jpeg', 'png'].includes(imageData.type) )
    const img = <img src={mainImg?.src} className={`${CN}__full-description-image`} />

    return (
        <picture>
            { sources }
            { img }
        </picture>
    )
}
