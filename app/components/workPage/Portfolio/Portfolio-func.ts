import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../store/store'

export function useGetMainLeftAndRightClasses(CN: string) {
    const [mainLeftClasses, setMainLeftClasses] = useState<string[]>([])
    const [mainRightClasses, setMainRightClasses] = useState<string[]>([])

    const portfolioMobileView = useAppSelector(store => store.portfolioMobileView)

    useEffect(function () {
        const leftClasses = [`${CN}__main-left`]
        const rightClasses = [`${CN}__main-right`]

        if (portfolioMobileView === 'Меню') {
            leftClasses.push(`${CN}__main-left--visible`)
        }
        else if (portfolioMobileView === 'Описание') {
            rightClasses.push(`${CN}__main-right--visible`)
        }

        setMainLeftClasses(leftClasses)
        setMainRightClasses(rightClasses)

    }, [CN, portfolioMobileView])

    return { mainLeftClasses, mainRightClasses }
}

