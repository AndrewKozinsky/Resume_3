import React from 'react'
import Image from 'next/image'

const CN = 'about-dev'

export default function AboutDev() {
    return (
        <section className={CN}>
            <div className={`${CN}__photo-side`}>
                <MyPhoto />
            </div>
            <div className={`${CN}__text-side`}>
                <TextContent />
            </div>
        </section>
    )
}

function MyPhoto() {
    const photoWebP = '/myPhoto/my_photo.webp'
    const photoWebP2X = '/myPhoto/my_photo@2x.webp'
    const photoJpeg = '/myPhoto/my_photo.jpg'
    const photoJpeg2X = '/myPhoto/my_photo@2x.jpg'

    const srcSetLargeWebP = photoWebP + ", " + photoWebP2X + ' 2x'
    const srcSetLargeJpeg = photoJpeg + ", " + photoJpeg2X + ' 2x'

    return (
        <picture>
            <source type="image/webp" srcSet={srcSetLargeWebP} />
            <source type="image/jpeg" srcSet={srcSetLargeJpeg} />

            {/*<Image src={photoJpeg} className={`${CN}__photo`} alt='Андрей Козинский' layout='fill' />*/}
            <img src={photoJpeg} className={`${CN}__photo`} alt='Андрей Козинский' />
        </picture>
    )
}

function TextContent() {
    // Получу массив параграфов вводного текста в зависимости от pageType
    const aboutTextArr = [
        'Я разработчик клиентской части сайтов и приложений.',
        'Мой подход — разобраться в задаче, заранее увидеть подводные камни и сделать всё в срок без напоминаний.',
        'Буду рад стать частью команды создающей веб-системы.'
    ]

    // Разметка с абзацами
    const textsArr = aboutTextArr.map((text, i) => {
        return <p className={`${CN}__text`} key={i}>{text}</p>
    })

    return <>{textsArr}</>
}
