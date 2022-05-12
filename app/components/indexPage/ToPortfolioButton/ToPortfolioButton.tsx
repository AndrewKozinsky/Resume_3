import React from 'react'
import Link from 'next/link'
import { getWorksConfigBySectionName } from '../../../data/workPagesFuncs'

export default function ToPortfolioButton() {
    const CN = 'to-portfolio-button'

    const firstWorkAddress = '/code/' + getWorksConfigBySectionName('code')[0].portfolioLink

    return (
        <div className={`${CN}__wrapper`}>
            <Link href={firstWorkAddress} passHref>
                <button className={CN}>Работы</button>
            </Link>
        </div>
    )
}
