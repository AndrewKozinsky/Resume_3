import React from 'react'
import PortfolioConfig from '../../../data/PortfolioConfigType'
import {makeCN} from '../../../utils/StringUtils'

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

    if (!workData.shortDescription) return null
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
        if (descItem.type === 'header') {
            return <FullDescriptionHeader item={descItem} key={i} />
        }
        else if (descItem.type === 'text') {
            return <FullDescriptionText item={descItem} key={i} />
        }
        else if (descItem.type === 'image') {
            return <FullDescriptionImage item={descItem} key={i} />
        }
        else if (descItem.type === 'video') {
            return <FullDescriptionVideo item={descItem} key={i} />
        }
    })

    return (
        <div className={`${CN}__full-description`}>
            {descriptionParts}
        </div>
    )
}

type FullDescriptionHeaderItemPropType = {
    item: PortfolioConfig.DescriptionHeaderItem
}

function FullDescriptionHeader(props: FullDescriptionHeaderItemPropType) {
    const { item } = props

    const Tag = item.tag

    const classes = [`${CN}__full-description-header`, `${CN}__full-description-header--${item.tag}`]

    return (
        <Tag className={ makeCN(classes) }>
            {item.text}
        </Tag>
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
        <picture className={`${CN}__full-description-image-pic`} key={images[0].src}>
            { sources }
            { img }
        </picture>
    )
}

type FullDescriptionVideoItemPropType = {
    item: PortfolioConfig.DescriptionVideoItem
}

function FullDescriptionVideo(props: FullDescriptionVideoItemPropType) {
    const { item } = props

    // Set type to videos
    const videos = item.videos.map(videoData => {
        const videoTypes = videoData.src.split('.')
        const videoDataType = videoTypes[videoTypes.length - 1]

        return { ...videoData, type: videoDataType }
    })

    const sources = videos.map((videoData, i) => {
        return <source type={`video/${videoData.type}`} src={videoData.src} key={i} />
    })

    const videoAttrs: {[key: string]: boolean | string} = {
        controls: true,
        preload: "auto",
        autoPlay: true,
        loop: true,
        muted: true,
        className: `${CN}__full-description-video`,
        key: videos[0].src
    }
    if (item.poster) {
        videoAttrs.poster = item.poster
    }

    return (
        <div className={`${CN}__full-description-video-w`}>
            <video {...videoAttrs}>
                {sources}
            </video>
        </div>
    )
}
