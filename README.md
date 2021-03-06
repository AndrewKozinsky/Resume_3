# Сайт Андрея Козинского
Личный сайт для поиска работы. На главной странице общая информация о компетенциях и опыте работы, на странице /code портфолио с примерами сделанных работ, на странице /design работы с макетами сайтов.

### Технологии
- React (create-react-app)
- NextJS
- NodeJS

### Запуск на локальном компьютере
1. Перейтиде в любую папку на вашем компьютере. Например в папку пользователя: ```cd ~```
2. Скопируйте репозиторий: ```git clone https://github.com/AndrewKozinsky/Resume_3.git```
3. Перейдите в папку app созданного проекта: ```cd Resume_3/app```
4. Установите зависимости: ```npm install```
5. Перейдите в корень проекта: ```cd ..```
6. Проект работает в Докере. Поэтому запустите его на своём компьютере.
7. Выполните команду ```docker-compose -f docker-compose-dev.yml up --build``` для запуска проекта в Docker-compose.
8. В браузере перейдите по адресу **localhost:3000**.

### Запуск на сервере
1. Зайдите на сервер по SSH ```ssh 'root@194.93.0.199'```. Это сработает если у вас есть публичный SSH-ключ сервера.
2. Перейдите в папку с сайтом ```cd /home/sites/Resume_3```
3. Скачайте новые файлы ```git pull```
4. Выведите все запущенные контейнеры ```docker ps``` и скопируйте идентификатор контейнера собранный из образа.
5. Остановите уже запущенный контейнер с приложением ```docker container stop 78b44b398aec```
6. Снова запустите Docker по настройкам описанных в docker-compose-server.yml ```docker-compose -f docker-compose-server.yml up --build -d```. Флаг -d запускает команду в режиме detach чтобы не занимать Консоль только этим процессом.