# vue_mediacube_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## Project description
### Deploy
```
https://mc-test.netlify.app
```
### Технологии
```
Vue.js, Vuex, VueRouter, Vue CLI, SCSS, JavaScript, HTML, ESLint, Git, Babel, Prettier

Делал около 40 часов, с учетом изучения документации Vue JS.

Библиотеки UI копмонентов:

1. Iview - https://www.iviewui.com/docs/introduce-en
2. Vue carousel - https://ssense.github.io/vue-carousel/
```
### Функционал
```
Доступные товары:
1. Одежда(Футболки и Худи)
2. Коллекции(Air Zoom)
```
```
Навбар состоит из лого(ведёт на главный экран), дропдауны с выбором товара, поиск(не реализовал) и корзину
```
```
При выборе товара, например Одежда > футболки, открывается экран с выбором из доступных предметов.
```
```
При выборе конкретной модели открывается страница товара

1. При наведении курсора на фото идет 2-ухкратное увеличение.
2. Переключать основную картинку можно с помощью кнопок слайдера или нажав на одно из маленьких превью.
3. Над названием товара есть хлебные крошки.
4. Кнопки выбора размера.
5. Кнопки выбора цвета.
6. Переключатель количества товара.
7. Кнопка добавить в корзину.
8. Блок рекомендаций(статичный, мало товаров, не было смысла реализовывать случайный рендер). При нажатии открывает товар.
9. История просмотров. Просмотренные товары сохранаяются в local storage и выводятся в карусель. При нажатии открывает товар.
10. Футболка Nike Pro, её нет в наличии, в корзину добавить нельзя.
```
```
Блок корзины:
1. Если корзина пуста, выводится соответствующая надпись.
2. У каждого добавленного товара есть свой блок, который состоит из названия модели, размера, количества, цены за выбранное количество. 
3. Если несколько раз добавить одинаковый товар, то его итоговое количество будет изменяться, а дубликатов в корзине не будет.
4. Товары одной модели, но разного размера считаются разными и попадают в разные компоненты.
5. Товары можно удалять из корзины.
6. Данные хранятся в local storage.
7. Итоговая сумма по всем товарам.
8. Кнопка оформить заказ без функционала
```
```
Есть два layouta. До 800px выбор товара находится в открывающемся бургер меню. После 800px из dropdown вверху страницы.

Полный адаптив до 320px
```
## Что хотел бы реализовать
```
1. Поиск.
2. Свайпер картинок на телефоне.
3. Footer. В нем нет функционала, поэтому решил не тратить время.
4. User data. Хранить  логин пароль на firebase.
5. Рандомный рендер товаров в блоке "Смотрите также". Мало товаров, чтобы сделать хорошо.

В целом уже достаточно времени потратил на проект, реализовать можно было много чего еще.
```

