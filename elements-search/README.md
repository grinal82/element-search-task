# Навигационное меню

Домашнее задание к занятию 1.2 «Способы поиска нужного HTML-элемента».

## Описание 

Необходимо реализовать двухуровневое навигационное меню. 
При клике на пункт должны открываться подразделы 

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовые CSS-стили

Пункты меню представлены кодом:

```html
<li class="menu__item">
    <a href="https://netology.ru/" class="menu__link">Главная</a>
</li>
```

Те, которые имеют вложенное меню:

```html
<li class="menu__item">
    <a href="" class="menu__link">О компании</a>
    <ul class="menu menu_sub">
        <li class="menu__item">
            <a href="https://netology.ru/clients" class="menu__link">Клиенты</a>
        </li>
        <li class="menu__item">
            <a href="https://netology.ru/service" class="menu__link">Обслуживание</a>
        </li>
        <li class="menu__item">
            <a href="https://netology.ru/wearecool" class="menu__link">Награды</a>
        </li>
    </ul>
</li>
```

Для показа вложенного меню, вам необходимо поставить класс *menu_active* вот так:

```html
<ul class="menu menu_sub menu_active">
    <!-- ... -->
</ul>

```

### Процесс реализации

1. Используя цикл зарегистрируйте обработчики события *click* на элементах с классом *menu__link*
2. Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс *menu_active*
3. Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные
пункты меню должны без помех переводить пользователя на соответствующие страницы.