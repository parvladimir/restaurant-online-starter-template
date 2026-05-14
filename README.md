# Restaurant Online Starter Template

Статический универсальный шаблон сайта для ресторанов, кафе, баров, пиццерий, донерных, гриль-хаусов и локального food-бизнеса в Германии.

Сайт работает без сборки и без фреймворка: достаточно загрузить файлы на Netlify, Vercel, Cloudflare Pages или обычный shared hosting вроде IONOS/STRATO.

## Структура

```text
/
├── index.html
├── menu.html
├── gallery.html
├── contact.html
├── impressum.html
├── datenschutz.html
├── 404.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── js/menu.js
│   └── img/
├── data/
│   ├── site-config.js
│   └── menu.js
├── docs/README.md
└── php/contact.php
```

## 1. Как настроить данные ресторана

Откройте `data/site-config.js` и измените данные клиента:

- `restaurantName`
- `slogan`
- `cuisineType`
- `phone`
- `email`
- `whatsappNumber`
- `address`, `postalCode`, `city`
- `googleMapsEmbedUrl`, `googleMapsLink`
- `openingHours`
- `reservationEnabled`, `deliveryEnabled`, `pickupEnabled`
- `legalCompanyName`, `ownerName`, `vatId`, `impressumAddress`, `privacyEmail`

Немецкий язык используется по умолчанию. Английские варианты можно менять в полях вида:

```js
slogan: {
  de: "Mediterrane Küche & Grill in Dorsten",
  en: "Mediterranean cuisine & grill in Dorsten"
}
```

Цвета сайта также задаются в `data/site-config.js` и применяются через CSS-переменные.

## 2. Как редактировать меню

Откройте `data/menu.js`.

Меню разбито на категории:

- Vorspeisen
- Hauptgerichte
- Pizza
- Döner
- Burger
- Salate
- Desserts
- Getränke

Каждое блюдо поддерживает:

```js
{
  name: { de: "Pizza Margherita", en: "Pizza Margherita" },
  description: { de: "...", en: "..." },
  price: "8,90 €",
  image: "assets/img/food/photos/pizza-margherita.jpg",
  tags: ["vegetarian", "popular"],
  allergens: ["Gluten", "Milch"],
  available: true
}
```

Поддерживаемые теги: `popular`, `vegetarian`, `vegan`, `spicy`.

## 3. Как заменить изображения

Замените файлы в папках:

- `assets/img/hero-food-order.jpg`
- `assets/img/food/`
- `assets/img/gallery/`
- `assets/img/logo-placeholder.svg`
- `assets/img/favicon.svg`

Сохраняйте те же имена файлов, если не хотите менять пути в `data/site-config.js` и `data/menu.js`.

Рекомендуемые размеры:

- Hero: 1400x1000 px или больше
- Блюда: 900x675 px
- Галерея: 900x675 px
- Логотип: SVG или PNG с прозрачным фоном

## 4. Как сгенерировать и заменить QR-код

QR-код находится здесь:

```text
assets/img/qr-menu-placeholder.png
```

Он должен вести на страницу:

```text
https://ваш-домен.de/menu.html
```

Сгенерируйте QR-код любым надежным генератором, скачайте PNG и замените `assets/img/qr-menu-placeholder.png`.

Подробная короткая инструкция есть в `docs/README.md`.

## 5. Деплой на Netlify, Vercel или Cloudflare Pages

Так как сборка не нужна:

1. Загрузите проект в GitHub/GitLab или импортируйте папку напрямую.
2. В настройках build command оставьте пусто.
3. Publish/output directory: корень проекта `/`.
4. После деплоя проверьте страницы `index.html`, `menu.html`, `contact.html`, `impressum.html`, `datenschutz.html`.

Для формы на статическом хостинге используйте Formspree, Tally, EmailJS или другой внешний провайдер.

## 6. Загрузка на обычный shared hosting

Для IONOS, STRATO и похожих хостингов:

1. Зайдите в FTP/SFTP или файловый менеджер.
2. Загрузите все файлы и папки в публичную папку сайта, например `htdocs`, `httpdocs` или `public_html`.
3. Убедитесь, что `index.html` лежит в корне публичной папки.
4. Если используете PHP fallback формы, настройте адрес получателя в `php/contact.php`.

## 7. Подключение домена

Обычно нужно:

- указать домен в панели хостинга или Pages-платформы;
- настроить DNS-записи у регистратора;
- дождаться обновления DNS;
- включить SSL-сертификат;
- заменить `seo.canonicalUrl` в `data/site-config.js` на реальный домен.

Пример:

```js
seo: {
  canonicalUrl: "https://www.restaurant-name.de/"
}
```

## 8. Настройка контактной формы

В `data/site-config.js` есть поля:

```js
formProvider: "formspree",
formEndpoint: ""
```

Для Formspree вставьте endpoint:

```js
formEndpoint: "https://formspree.io/f/xxxxxxx"
```

Если `formEndpoint` пустой, форма отправляется на `php/contact.php`. PHP работает только на хостинге с поддержкой PHP и настроенной функцией `mail()`.

В `php/contact.php` обязательно замените:

```php
$to = 'info@musterkueche.de';
```

## 9. Что клиент должен проверить юридически

Перед публикацией владелец бизнеса или юридический консультант должен проверить:

- `impressum.html`
- `datenschutz.html`
- корректность владельца, адреса, налоговых данных;
- необходимость cookie-banner;
- Google Maps и другие внешние сервисы;
- права на изображения;
- тексты меню, аллергены и цены;
- требования к онлайн-заказу, доставке и бронированию.

Юридические страницы в шаблоне являются только заготовками и не являются юридически полной консультацией.

## 10. Рекомендации по дизайн-темам

Тема сайта выбирается в `data/site-config.js`:

```js
theme: "premium-dark",
showThemeSwitcher: true
```

Доступные темы:

- `premium-dark`: best for fine dining, steakhouse, wine bar, premium restaurant.
- `cocktail-neon`: best for cocktail bars, lounges, night bars, shisha bars, event bars.
- `imbiss-pro`: best for döner, burger, pizza, grill, chicken, snack bars and takeaway.
- `cafe-minimal`: best for cafés, bakeries, brunch places, breakfast restaurants and ice cream cafés.
- `german-gasthaus`: best for German restaurants, Biergarten, local family restaurants and traditional cuisine.

Для разработки можно оставить `showThemeSwitcher: true`. Тогда в правом нижнем углу появится переключатель тем. Перед передачей сайта клиенту обычно ставят:

```js
showThemeSwitcher: false
```

Страница для сравнения всех тем:

```text
theme-preview.html
```

Быстрый preview конкретной темы:

```text
index.html?theme=cafe-minimal
```

## 11. Design Quality Check

Template now uses local demo stock photos for the food-ordering hero, all menu cards, theme hero images and the gallery:

- `assets/img/hero-food-order.jpg`
- `assets/img/food/photos/`
- `assets/img/gallery/*.jpg`
- `assets/img/hero-*.jpg`

The demo photos are local stock photos from Pexels. Pexels allows website/template usage according to its license page, but before delivering a client website you should replace them with real client photos or verify image licenses/usage rights again: https://www.pexels.com/license/

Food websites depend heavily on real, appetizing images.

Этот шаблон можно показывать клиентам как демо, но для реального ресторанного сайта обязательно нужны хорошие фотографии.

Перед передачей проекта клиенту проверьте:

- заменить demo hero placeholders на реальные фото ресторана, еды, напитков или интерьера;
- использовать разные фото для выбранной темы, например вечерние фото для `premium-dark`, барные фото для `cocktail-neon`, крупные блюда для `imbiss-pro`;
- проверить, что главное фото не слишком темное, не размытое и не выглядит как случайная stock-картинка;
- заменить изображения блюд в `assets/img/food/`;
- заменить галерею в `assets/img/gallery/`;
- проверить мобильный первый экран, потому что ресторанные сайты часто открывают со смартфона;
- проверить читаемость Impressum и Datenschutz в выбранной теме.

Цель дизайна: каждая тема должна выглядеть как отдельный демо-сайт, который фрилансер может показать разным владельцам ресторанов в Германии.
