import React from 'react'
import DetailsParagraph from '../DetailsParagraph/DetailsParagraph'
import SalaryPlate from '../SalaryPlate/SalaryPlate'

export default function DetailsDev() {
    const CN = 'about-details'

    return (
        <section className={`${CN}-wrapper`}>
            <div>
                <DetailsParagraph header='Знание классических и современных подходов' text='Имею равный опыт разработки сайтов как в классическом стиле, так и полностью на Реакте (формирование разметки через JavaScript с запросом данных на API).' />
                <DetailsParagraph header='Широкий диапазон знаний' text='Хотя моя основная специализация разработка клиентской части веб-сайтов, но я так же имею базовый уровень написания серверных API, заворачивание сервисов в контейнеры и выкладки на сервер.' />
            </div>
            <div>
                <DetailsParagraph header='Опыт проектирования сайтов' text='Около 7 лет занимался их оформлени. Поэтому для меня не проблема сделать проект без привлечения дизайнеров.' />
                <SalaryPlate />
            </div>
        </section>
    )
}
