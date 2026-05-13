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
  image: "assets/img/food/pizza.png",
  tags: ["vegetarian", "popular"],
  allergens: ["Gluten", "Milch"],
  available: true
}
```

Поддерживаемые теги: `popular`, `vegetarian`, `vegan`, `spicy`.

## 3. Как заменить изображения

Замените файлы в папках:

- `assets/img/hero-restaurant.png`
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
