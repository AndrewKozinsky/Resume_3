import React from 'react'
import { makeCN } from '../../../utils/StringUtils'
import Plate from '../../common/Plate/Plate'

const CN = 'tools'

export default function Tools() {

    return (
        <section className={CN}>
            <div className={`${CN}__items-wrapper`}>
                <Plate>
                    <h3 className={`${CN}__header ${CN}__header--big`}>
                        TypeScript <Icon type='ts' />
                    </h3>
                    <div>
                        <p className={`${CN}__text`}>Писал на  нём как клиентские программы на Реакте, так и серверные на Экспрессе и Несте. В целом мне удаётся писать типы если не требуется какие-то особые реализации с хитным поведением. TypeScript показал для меня свою эффективность, поэтому планирую и дальше использовать на новой работе. </p>
                        <p className={`${CN}__text`}>До этого несколько лет писал только на JavaScript.</p>
                        <p className={`${CN}__text`}>Опыт: <b>1,5 года</b><span className={`${CN}__text-summary-divider`} />Уровень: <b>уверенное использование</b></p>
                    </div>
                </Plate>
                <Plate>
                    <h3 className={`${CN}__header ${CN}__header--big`}>
                        React <Icon type='react' />
                    </h3>
                    <div>
                        <p className={`${CN}__text`}>Сумею сделать широкий диапазон компонентов от элементов форм до страниц с множеством компонентов получающих данные с сервера и записывающие их в главное Хранилище. Писал как классовые компоненты, так и хуки.</p>
                        <p className={`${CN}__text`}>Делал свои сборки Реакта через Вебпак.</p>
                        <p className={`${CN}__text`}>Опыт: <b>1,5 года</b><span className={`${CN}__text-summary-divider`} />Уровень: <b>уверенное использование</b></p>
                    </div>
                </Plate>
            </div>

            <div className={`${CN}__items-wrapper`}>
                <div>
                    <div className={`${CN}__divider-w`}>
                        <div className={`${CN}__divider-name`}>Прочее</div>
                        <div className={`${CN}__divider-hr`} />
                    </div>

                    <h3 className={`${CN}__header`}>
                        <Icon type='docker' /> Docker
                    </h3>
                    <div>
                        <p className={`${CN}__text`}>Есть базовые знания Докера. Есть опыт настройки монорепозиторя из нескольких контейнерах с Nginx-ом, сервером с API, клиентом на Реакте и выкладкой его на сервер с настройкой SSL.</p>
                        <p className={`${CN}__text`}>Опыт: <b>1 год</b><span className={`${CN}__text-summary-divider`} />Уровень: <b>базовый</b></p>
                    </div>
                </div>

                <div>
                    <h3 className={`${CN}__header`}>
                        <Icon type='express' /> Express и <Icon type='nest' /> Nest
                    </h3>
                    <div>
                        <p className={`${CN}__text`}>Для себя писал API на Экспрессе и Несте. Данные хранились на Монго и Постгресе. Для взаимодействия с БД использовал Монгус и ТайпОРМ.</p>
                        <p className={`${CN}__text`}>Опыт: <b>несколько месяцев</b><span className={`${CN}__text-summary-divider`} />Уровень: <b>базовый</b></p>
                    </div>
                </div>

                <div>
                    <div className={`${CN}__divider-w`}>
                        <div className={`${CN}__divider-name`}>Программы</div>
                        <div className={`${CN}__divider-hr`} />
                    </div>

                    <div className={`${CN}__programs-w`}>
                        <div className={`${CN}__programs-inner-w`}>
                            <span className={`${CN}__programs-text`}>WebStorm</span>
                        </div>
                        <div className={`${CN}__programs-inner-w`}>
                            <span className={`${CN}__programs-text`}>Sketch</span>
                            <span className={`${CN}__programs-dot`} />
                            <span className={`${CN}__programs-text`}>Figma</span>
                            <span className={`${CN}__programs-dot`} />
                            <span className={`${CN}__programs-text`}>PS</span>
                            <span className={`${CN}__programs-dot`} />
                            <span className={`${CN}__programs-text`}>AI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

type IconPropType = {
    type: 'ts' | 'react' | 'docker' | 'express' | 'nest'
}

function Icon(prop: IconPropType) {
    const { type } = prop

    const cls: string[] = []

    if (type === 'ts' || type === 'react') {
        cls.push(`${CN}__big-icon`)
    }
    else {
        cls.push(`${CN}__icon`)
    }

    cls.push(`${CN}__icon--` + type)

    return <div className={ makeCN(cls) } />
}

