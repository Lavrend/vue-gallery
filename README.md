# Vue Gallery

Vue Gallery - это приложение-галерея с SPA структурой, адаптированное под основные размеры экранара (Desktop, Table, Mobile), кроссбраузерное (для IE >= 10), разработанное для демонстрации возможностей связки Vue.js + Vuex, при поддержке Backend-end части [VueGalleryServer](https://github.com/Lavrend/vue-gallery-server)

## [DEMO](https://vue-gallery.now.sh/)

## Стэк технологий

* [Vue.js](https://ru.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/ru/)
* [Vue Router](https://router.vuejs.org/ru/)
* [Vue CLI v3.x](https://cli.vuejs.org/ru/)
* [Axios](https://github.com/axios/axios)
* [Webpack](https://webpack.js.org/) - работает под капотом Vue CLI (+ кастомный конфиг vue.config.js)
* [Lodash](https://lodash.com/) - вспомогательные утилиты (исп. модульно, debounce & throttle & ...)
* [i18next](https://www.i18next.com/) - для переводов
* также Pug (бывший  Jade), SASS/SCSS, БЭМ, [Code-style (Airbnb)](https://github.com/Lavrend/javascript-airbnb)

## Основная структура проекта
```
vue-gallery
└── dist/
└── public/
└── src/
    └── assets/
    └── compiledIcons/
    └── components/
    └── config/
    └── directives/
    └── layouts/
    └── pages/
    └── plugins/
    └── server/
    └── store/
    └── styles/
    └── ui/
    └── utils/
    |
    └── App.vue
    └── main.js
    └── router.js
└── tests/
    └── ...

└── package.json
└── vue.config.js
└── README.md
└── ...
```

* compiledIcons/ - скомпилированные svg-иконки
* components/ - основные компоненты приложения
* config/ - конфиги
* directives/ - кастомные директивы Vue.js
* layouts/ - компоненты отображения, макеты (layouts)
* pages/ - компоненты страниц (Home, Gallery, About, etc.)
* plugins/ - кастомные функционал Vue.js (Плагины)
* server/ - обертка для работы с серверным API (ServerCore)
* store/ - компоненты хранилища, глобальное состояние (Vuex Store)
* styles/ - глобальные стили (миксины, variables, transitions, etc.)
* ui/ - базовые, кастомные компоненты интерфейса (кнопки, селекты, инпуты, иконки, и т.д.)
* utils/ - вспомогательные скрипты и утилиты (Хэлперы)
* App.vue - основной компонент приложения
* main.js - точка входа
* router.js - маршрутизация приложения

## Установка

Для работы необходим [Node.js](https://nodejs.org/) и менеджер пакетов ([npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/))

* Node.js - v10.14.2
* yarn - v1.15.2

### 1. Установить зависимости

```sh
cd vue-gallery
yarn install
```

### 2. Собрать svg иконки (разовая сборка)
```
yarn run svg
```

### 3. Собрать локально, запустить дев сервер

```sh
yarn start
```

## Боевая сборка

В последствии сборка и деплой будет автоматизирована, но пока что все этапы запускаются независимо

### Собрать и минифицировать билд
```
yarn run build
```

### Запустить eslint
```
yarn run lint
```

### Запустить юнит-тесты
```
yarn run test:unit
```

## Деплой

Для деплоя и хостинга используется платформа ZEIT (Now 2.0) - [Cборщик @now/static-build](https://zeit.co/docs/v2/deployments/official-builders/static-build-now-static-build/)

## TODO
