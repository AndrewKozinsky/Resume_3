import { useCallback } from 'react'

/**
 * Обработчик наведения/уведения на/с главную ссылку.
 * При этом действии фон страницы становится синим.
 * @param isHovered
 */
export function useGetMainLinkHover(isHovered: boolean) {
    return useCallback(function () {
        const body = document.body

        if (isHovered) body.style.backgroundColor = 'rgb(15, 114, 224)'
        else body.style.backgroundColor = 'rgb(231, 238, 246)'

    }, [isHovered])
}