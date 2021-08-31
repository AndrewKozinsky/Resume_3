import PortfolioConfig from './PortfolioConfigType'

const portfolioConfigItems: PortfolioConfig.Items = [
    // CODE
    {
        set: 'code',
        category: 'React',
        title: 'Записная книжка',
        github: 'https://github.com/AndrewKozinsky/editor-public-copy',
        siteLink: 'https://editorium.net/editor',
        siteLinkText: 'editorium.net/editor',
        portfolioLink: 'editor',
        shortDescription: 'Личный проект, делаю для себя в свободное время. Тут можно будет писать не просто текст, а HTML для выделения важный блоков.',
        tags: ['React', 'Hooks', 'Redux', 'TypeScript', 'SCSS', 'Docker', 'NodeJS', 'Nginx', 'Nest', 'Postgres'],
        description: [
            {
                type: 'text',
                text: 'Публикую этот код чтобы вы смогли посмотреть его качество и оценить мои актуальные знания и принципы по которым я его пишу.'
            },
            {
                type: 'text',
                text: 'Вам не удастся запустить проект потому что я убрал некоторую конфиденциальную информацию вроде данных по подключению к базе данных и логин и пароль для доступа к сервису массовой отправки почты.'
            },
            {
                type: 'video',
                poster: '/portfolio/editor_dev/editor_1_poster.png',
                videos: [
                    { src: '/portfolio/editor_dev/editor_1.webm' },
                    { src: '/portfolio/editor_dev/editor_1.mp4' },
                ]
            },
            {
                type: 'header',
                tag: 'h2',
                text: 'Инструменты'
            },
            {
                type: 'header',
                tag: 'h3',
                text: 'Инфраструктура'
            },
            {
                type: 'text',
                text: 'Контейнеры Docker-а в docker-compose. Маршрутизатор — Nginx.'
            },
            {
                type: 'header',
                tag: 'h3',
                text: 'Серверная часть'
            },
            {
                type: 'text',
                text: 'В качестве сервера использовал Node.'
            },
            {
                type: 'text',
                text: 'Для написания API изначально использовал Express в связке с Mongo. Потом переписал на Nest с Postgres-ом. Просто хотел попробовать как оно. С Монгой поменьше геморроя, тем более я не собираюсь как-то по-особому нагружать базу, поэтому без разницы что использовать. На первом месте стоит удобство.'
            },
            {
                type: 'header',
                tag: 'h3',
                text: 'Клиентская часть'
            },
            {
                type: 'text',
                text: 'React с TypeScript. Самописная сборка ВебПака. Стили на SCSS. Маршрутизация React-Router.'
            },
            {
                type: 'header',
                tag: 'h2',
                text: 'Решения'
            },
            {
                type: 'header',
                tag: 'h3',
                text: 'Обработчик форм'
            },
            {
                type: 'text',
                text: 'Изначально для работы с формами планировал использовать Formic. Но мне не нравится его концепция записывания в атрибуты формы функцию, в которую нужно передавать форму. Там есть более элегантное решение с хуком, но в нём нет важных методов, поэтому для меня он бесполезен.'
            },
            {
                type: 'text',
                text: 'Поэтому решил сделать свою реализацию. Она состоит их трёх составляющих:'
            },
            {
                type: 'text',
                text: '1. Объект с настройками полей и общей работы формы.'
            },
            {
                type: 'text',
                text: '2. Вызова хука для создания Местного хранилища (так же он возвращает объект с полезными методами управления формой).'
            },
            {
                type: 'text',
                text: '3. Компонента в который передаётся объект с настройками полей и Местное хранилище. Компонент возвращает сгенерированную разметку полей и реализует логику работы формы.'
            },
            {
                type: 'text',
                text: 'Поэтому минимальную форму можно сделать за ≈ 30 строк.'
            },
            {
                type: 'header',
                tag: 'h3',
                text: 'Компонент структуры статей'
            },
            {
                type: 'text',
                text: 'Наиболее подходящее решение react-sortable-tree не установилась на 17-ю версию Реакта. А других библиотек не нашёл. Поэтому написал свою реализацию.'
            },
            {
                type: 'text',
                text: 'Я написал возможность удаления и выделения папок/статей, изменения местоположения с обновлением данных в базе данных.'
            },
        ]
    },
    {
        set: 'code',
        category: 'React',
        title: 'Информационная система',
        portfolioLink: 'info-system',
        shortDescription: 'В качестве удалённого сотрудника в течение 9 месяцев делал клиентскую часть информационной системы. Первые 3 месяца код писал на JavaScript, затем решили перейти на TypeScript. Не могу показать ни название компании, ни внешний вид, ни код из-за Соглашения о неразглашения.',
        tags: ['React', 'Class components', 'Hooks', 'Redux', 'TypeScript', 'Git Flow', 'WebSocket', 'Storybook', 'SCSS']
    },
    {
        set: 'code',
        category: 'React',
        title: 'Дилетантские чтения',
        github: 'https://github.com/AndrewKozinsky/diletant',
        portfolioLink: 'diletant',
        shortDescription: 'Концепция переиначивания сайта «Дилетанта». Рисовал и верстал макеты, писал логику переходов между страницами.',
        tags: ['React', 'Hooks', 'Redux', 'react-router', 'animation', 'SCSS'],
        description: [
            {
                type: 'text',
                text: 'Это достаточно старый проект на котором я хотел получше узнать про маршрутизацию, плавные переходы между страницами и хуки Реакта. Сейчас я уже не пишу в таком стиле (не ставлю логику в представление).'
            },
            {
                type: 'video',
                poster: '/portfolio/diletant_dev/diletant_1_poster.jpg',
                videos: [
                    { src: '/portfolio/diletant_dev/diletant_1.webm' },
                    { src: '/portfolio/diletant_dev/diletant_1.mp4' },
                ]
            }
        ]
    },
    {
        set: 'code',
        category: 'React',
        title: 'Список дел',
        github: 'https://github.com/AndrewKozinsky/docker-todo',
        portfolioLink: 'todo',
        shortDescription: 'Приложение по ведению списка заметок — мой полигон для закрепления навыков владения новыми технологиями. Изначально они были написаны на Реакте по уроку преподавателя, затем я нарисовал новый макет с другими стилями и добавил туда некоторые новые возможности. После изучения Ноды и Экспресса переделал проект чтобы заметки можно было сохранять в базе данных. В третьей реинкарнации добавился Докер и микро-сервисная архитектура для загрузки заметок на сервер.',
        tags: ['React', 'Hooks', 'Redux', 'NodeJS', 'SCSS', 'Docker', 'Nginx', 'Express', 'Mongo'],
        description: [
            {
                type: 'video',
                poster: '/portfolio/todo_dev/todo_1_poster.png',
                videos: [
                    { src: '/portfolio/todo_dev/todo_1.webm' },
                    { src: '/portfolio/todo_dev/todo_1.mp4' },
                ]
            },
            {
                type: 'text',
                text: 'На ГитХабе есть инструкция по запуску.'
            },
        ]
    },
    {
        set: 'code',
        category: 'React',
        title: 'Личный сайт',
        github: 'https://github.com/AndrewKozinsky/Resume_3',
        siteLink: 'https://andrewkozinsky.ru',
        siteLinkText: 'AndrewKozinsky.ru',
        portfolioLink: 'personal-site',
        shortDescription: 'Решил попробовать сделать личный сайт на NextJS заодно и посмотреть на инструмент.',
        tags: ['React', 'Hooks', 'Redux', 'NodeJS', 'SCSS', 'Docker', 'Nginx', 'NextJS'],
        description: [
            {
                type: 'video',
                poster: '/portfolio/personal_site_dev/personal_site_1_poster.png',
                videos: [
                    { src: '/portfolio/personal_site_dev/personal_site_1.webm' },
                    { src: '/portfolio/personal_site_dev/personal_site_1.mp4' },
                ]
            },
        ]
    },
    {
        set: 'code',
        category: 'Вёрстка',
        title: 'K-Flex.ru',
        portfolioLink: 'kflex',
        siteLink: 'https://kflex.ru',
        siteLinkText: 'kflex.ru',
        tags: ['HTML', 'CSS', 'JavaScript'],
        shortDescription: 'Нарисовал макеты и сверстал сайт звукоизоляционных материалов K-Flex. Это классический сайт с административной частью на СУС.',
        description: [
            {
                type: 'video',
                poster: '/portfolio/kflex_dev/kflex_1_poster.jpg',
                videos: [
                    { src: '/portfolio/kflex_dev/kflex_1.webm' },
                    { src: '/portfolio/kflex_dev/kflex_1.mp4' },
                ]
            },
        ]
    },
    {
        set: 'code',
        category: 'Вёрстка',
        title: 'Volсano.ru',
        portfolioLink: 'volcano',
        siteLink: 'http://volcano.ru',
        siteLinkText: 'volcano.ru',
        tags: ['HTML', 'CSS', 'JavaScript'],
        shortDescription: 'Нарисовал макеты и сверстал сайт климатической техники Volcano. Это классический сайт с административной частью на СУС.',
        description: [
            {
                type: 'video',
                poster: '/portfolio/volcano_dev/volcano_1_poster.jpg',
                videos: [
                    { src: '/portfolio/volcano_dev/volcano_1.webm' },
                    { src: '/portfolio/volcano_dev/volcano_1.mp4' },
                ]
            },
        ]
    },
    {
        set: 'code',
        category: 'Вёрстка',
        title: 'Тепломаш.рф',
        portfolioLink: 'teplomash',
        siteLink: 'http://https://xn--80ajsejet8c.xn--p1ai/',
        siteLinkText: 'Тепломаш.рф',
        tags: ['HTML', 'CSS', 'JavaScript'],
        shortDescription: 'Нарисовал макеты и сверстал сайт климатической техники Тепломаш. Это классический сайт с административной частью на СУС.',
        description: [
            {
                type: 'video',
                poster: '/portfolio/teplomash_dev/teplomash_1_poster.jpg',
                videos: [
                    { src: '/portfolio/teplomash_dev/teplomash_1.webm' },
                    { src: '/portfolio/teplomash_dev/teplomash_1.mp4' },
                ]
            },
        ]
    },
    {
        set: 'code',
        category: 'Вёрстка',
        title: 'Фрико',
        portfolioLink: 'friko',
        tags: ['HTML', 'CSS', 'JavaScript'],
        shortDescription: 'Нарисовал макеты и сверстал сайт климатической техники Frico. К сожалению его уже нет в интернете. Сохранились только картинки.',
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/teplomash_des/teplomash_1.jpg', retina: true },
                    { src: '/portfolio/teplomash_des/teplomash_1.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/teplomash_des/teplomash_2.png', retina: true },
                    { src: '/portfolio/teplomash_des/teplomash_2.webp', retina: true },
                ]
            },
        ]
    },

    // DESIGN
    {
        set: 'design',
        title: 'Теплоизоляция K-FLEX',
        portfolioLink: 'kflex',
        siteLinkText: 'www.kflex.ru',
        siteLink: 'https://kflex.ru',
        shortDescription: 'Сделал макеты каталога теплоизолящионного оборудования K-Flex. После сверстал.',
        tags: ['Sketch'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/kflex_des/kflex_1.jpg', retina: true },
                    { src: '/portfolio/kflex_des/kflex_1.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/kflex_des/kflex_2.jpg', retina: true },
                    { src: '/portfolio/kflex_des/kflex_2.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/kflex_des/kflex_3.jpg', retina: true },
                    { src: '/portfolio/kflex_des/kflex_3.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/kflex_des/kflex_4.png', retina: true },
                    { src: '/portfolio/kflex_des/kflex_4.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/kflex_des/kflex_5.png', retina: true },
                    { src: '/portfolio/kflex_des/kflex_5.webp', retina: true },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Русхит',
        portfolioLink: 'rusheat',
        siteLinkText: 'www.rusheat.ru',
        siteLink: 'https://rusheat.ru',
        shortDescription: 'Придумал, нарисовал и сверстал страницы и иллюстрации магазина климатического оборудования. Код писал в классическом стиле.',
        tags: ['Sketch'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/rusheat_des/rusheat_1.jpg', retina: true },
                    { src: '/portfolio/rusheat_des/rusheat_1.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/rusheat_des/rusheat_2.jpg', retina: true },
                    { src: '/portfolio/rusheat_des/rusheat_2.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/rusheat_des/rusheat_3.jpg', retina: true },
                    { src: '/portfolio/rusheat_des/rusheat_3.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/rusheat_des/rusheat_4.jpg', retina: true },
                    { src: '/portfolio/rusheat_des/rusheat_4.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/rusheat_des/rusheat_5.jpg', retina: true },
                    { src: '/portfolio/rusheat_des/rusheat_5.webp', retina: true },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Письма',
        portfolioLink: 'letters',
        shortDescription: 'Письма для рассылок о различных событиях.',
        tags: ['Sketch', 'Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/letters_des/letters_1.jpg', retina: true },
                    { src: '/portfolio/letters_des/letters_1.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/letters_des/letters_2.jpg', retina: true },
                    { src: '/portfolio/letters_des/letters_2.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/letters_des/letters_3.jpg', retina: true },
                    { src: '/portfolio/letters_des/letters_3.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/letters_des/letters_4.jpg', retina: true },
                    { src: '/portfolio/letters_des/letters_4.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/letters_des/letters_5.jpg', retina: true },
                    { src: '/portfolio/letters_des/letters_5.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/letters_des/letters_6.jpg', retina: true },
                    { src: '/portfolio/letters_des/letters_6.webp', retina: true },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Ремпласт',
        portfolioLink: 'remplast',
        shortDescription: 'Макеты сайта про ремонт пластиковых окон.',
        tags: ['Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/remplast_des/remplast_1.jpg', retina: true },
                    { src: '/portfolio/remplast_des/remplast_1.webp', retina: true },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Провкус',
        portfolioLink: 'provkus',
        shortDescription: 'Макеты сайта про доставку полуфабрикатов для приготовления пищи.',
        tags: ['Sketch'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/provkus_des/provkus_1.jpg' },
                    { src: '/portfolio/provkus_des/provkus_1.webp' },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'La Bandada',
        portfolioLink: 'labandada',
        shortDescription: 'Макеты сайта аргентинского отеля.',
        tags: ['Sketch'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/labandada_des/labandada_1.jpg' },
                    { src: '/portfolio/labandada_des/labandada_1.webp' },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/labandada_des/labandada_2.jpg' },
                    { src: '/portfolio/labandada_des/labandada_2.webp' },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/labandada_des/labandada_3.jpg' },
                    { src: '/portfolio/labandada_des/labandada_3.webp' },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/labandada_des/labandada_4.jpg' },
                    { src: '/portfolio/labandada_des/labandada_4.webp' },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Сайт с метросхемой',
        portfolioLink: 'metro',
        shortDescription: 'Макеты сайта со схемой метро, информацией о закрытых станциях и прочая полезная информация.',
        tags: ['Sketch'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/metro_des/metro_1.png' },
                    { src: '/portfolio/metro_des/metro_1.webp' },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/metro_des/metro_2.png' },
                    { src: '/portfolio/metro_des/metro_2.webp' },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/metro_des/metro_3.png' },
                    { src: '/portfolio/metro_des/metro_3.webp' },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Volcano',
        portfolioLink: 'volcano',
        shortDescription: 'Каталог климатической техники Volcano.',
        tags: ['Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/volcano_des/volcano_1.jpg', retina: true },
                    { src: '/portfolio/volcano_des/volcano_1.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/volcano_des/volcano_2.jpg', retina: true },
                    { src: '/portfolio/volcano_des/volcano_2.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/volcano_des/volcano_3.png', retina: true },
                    { src: '/portfolio/volcano_des/volcano_3.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/volcano_des/volcano_4.jpg', retina: true },
                    { src: '/portfolio/volcano_des/volcano_4.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/volcano_des/volcano_5.jpg', retina: true },
                    { src: '/portfolio/volcano_des/volcano_5.webp', retina: true },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Деньги под залог авто',
        portfolioLink: 'autobuyer',
        shortDescription: 'Одностраничник с калькулятором, условиями, примерами выкупленных автомобилей и суммами и адресом.',
        tags: ['Sketch'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/autobuyer_des/autobuyer_1.jpg', retina: true },
                    { src: '/portfolio/autobuyer_des/autobuyer_1.webp', retina: true },
                ]
            }
        ]
    },
    {
        set: 'design',
        title: 'Бульдорс',
        portfolioLink: 'buldoors',
        shortDescription: 'Главная страница сайта производителя дверей',
        tags: ['Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/buldoors_des/buldoors_1.jpg' },
                    { src: '/portfolio/buldoors_des/buldoors_1.webp' },
                ]
            }
        ]
    },
    {
        set: 'design',
        title: 'Тепломаш',
        portfolioLink: 'teplomash',
        shortDescription: 'Страницы и иллюстрации для сайта тепловой техники',
        tags: ['Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/teplomash_des/teplomash_1.jpg', retina: true },
                    { src: '/portfolio/teplomash_des/teplomash_1.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/teplomash_des/teplomash_2.png', retina: true },
                    { src: '/portfolio/teplomash_des/teplomash_2.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/teplomash_des/teplomash_3.png', retina: true },
                    { src: '/portfolio/teplomash_des/teplomash_3.webp', retina: true },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Friko',
        portfolioLink: 'friko',
        shortDescription: 'Страницы каталога климатической техники',
        tags: ['Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/friko_des/friko_1.png', retina: true },
                    { src: '/portfolio/friko_des/friko_1.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/friko_des/friko_2.png', retina: true },
                    { src: '/portfolio/friko_des/friko_2.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/friko_des/friko_3.jpg', retina: true },
                    { src: '/portfolio/friko_des/friko_2.webp', retina: true },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/friko_des/friko_4.png', retina: true },
                    { src: '/portfolio/friko_des/friko_4.webp', retina: true },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Соучастники',
        portfolioLink: 'accomplies',
        shortDescription: 'Макет одностраничника про взыскание долгов',
        tags: ['Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/accomplies_des/accomplies_1.jpg' },
                    { src: '/portfolio/accomplies_des/accomplies_1.webp' },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Обучение в Австрии',
        portfolioLink: 'austria',
        shortDescription: 'Макет главной страницы сайта про обучение в Австрии',
        tags: ['Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/austria_des/austria_1.jpg' },
                    { src: '/portfolio/austria_des/austria_1.webp' },
                ]
            },
        ]
    },
    {
        set: 'design',
        title: 'Prana Food',
        portfolioLink: 'prana',
        shortDescription: 'Макеты сайта с информацией о питании коктейлями Prana Food',
        tags: ['Photoshop'],
        description: [
            {
                type: 'image',
                images: [
                    { src: '/portfolio/prana_des/prana_1.jpg' },
                    { src: '/portfolio/prana_des/prana_1.webp' },
                ]
            },
            {
                type: 'image',
                images: [
                    { src: '/portfolio/prana_des/prana_2.jpg' },
                    { src: '/portfolio/prana_des/prana_2.webp' },
                ]
            },
        ]
    },
]

export default portfolioConfigItems