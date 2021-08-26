import React from 'react'
import Plate from '../../common/Plate/Plate'

export default function SalaryPlate() {
    const CN = 'salary-plate'

    return (
        <Plate>
            <p className={`${CN}__traffic-light`}>Готов выполнить тестовое задание</p>
            <p className={`${CN}__text`}>Рассчитываю на оклад</p>
            <p className={`${CN}__text-big`}>
                от&nbsp;
                <span className={`${CN}__text-big--bigger`}>100&nbsp;000</span> рублей
            </p>
        </Plate>
    )
}
