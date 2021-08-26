import React from 'react'
import Link from 'next/link'

export default function ToPortfolioButton() {
    const CN = 'to-portfolio-button'

    return (
        <div className={`${CN}__wrapper`}>
            <Link href='/code/info-system' passHref>
                <button className={CN}>Работы</button>
            </Link>
        </div>
    )
}