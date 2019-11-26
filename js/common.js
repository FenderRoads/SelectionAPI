document.addEventListener("DOMContentLoaded", function() {
  
  ymaps.ready(init);

function init() {

    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
            center: [50.443705, 30.530946],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        });
        // Контейнер для меню.
        // menu = $('<ul class="menu"></ul>');
        
    for (var i = 0, l = pharms.length; i < l; i++) {
        createMenuGroup(pharms[i]);
    }

    function createMenuGroup (group) {
        // Пункт меню.
        var menuItem = $(`<div class="left-tabs__item"><a href="#">${group.name}</a></div>`),
        // Коллекция для геообъектов группы.
            collection = new ymaps.GeoObjectCollection(null, { preset: group.style });
        // Контейнер для подменю.
            // submenu = $('<ul class="submenu"></ul>');

        // Добавляем коллекцию на карту.
        myMap.geoObjects.add(collection);
        // Добавляем подменю.
        $('.left-tabs').append(menuItem)

        // menuItem
        //     // .append(submenu)
        //     // Добавляем пункт в меню.
        //     // .appendTo(menu)
        //     // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
        //     // .find('a')
        //     .bind('click', function (e) {
        //         e.preventDefault();
        //         if (collection.getParent()) {
        //             myMap.geoObjects.remove(collection);
        //             // submenu.hide();
        //         } else {
        //             myMap.geoObjects.add(collection);
        //             // submenu.show();
        //         }
        //     });
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection);
        }
    }

    function createSubMenu (item, collection) {
        // Пункт подменю.
        var submenuItem = $(`<div class="left-list__item"><div class="item-info"><div class="item-info__address">${item.address}</div><div class="item-info__places"><div class="places-item"><span class="${item.metroClass}">${item.metro}</span> <span><img src="img/@2x/people.svg" alt=""> 400 m</span></div></div><div class="item-info__type">Аптека</div></div><div class="item-workingtime"><span>${item.schedule}</span></div><div class="item-select">Выбрать</div><div class="item-reset">Сбросить</div></div>`),
        // Создаем метку.
            placemark = new ymaps.Placemark(item.coords, { balloonContent: item.metro });

        // Добавляем метку в коллекцию.
        collection.add(placemark);
        // Добавляем пункт в подменю.
        $('.left-list').append(submenuItem)

        $(submenuItem).find('.item-select').on('click', function() {
          if (!placemark.balloon.isOpen()) {
            placemark.balloon.open();
          }
          return false;
        });

        $(submenuItem).find('.item-reset').on('click', function() {
          if (placemark.balloon.isOpen()) {
            placemark.balloon.close();
          }
          return false;
        });
        // submenuItem
        //     // .appendTo(submenu)
        //     // При клике по пункту подменю открываем/закрываем баллун у метки.
        //     .find('.item-select')
        //     .bind('click', function () {
        //         if (!placemark.balloon.isOpen()) {
        //             placemark.balloon.open();
        //         } else {
        //             placemark.balloon.close();
        //         }
        //         return false;
        //     });
    }

    // Добавляем меню в тэг BODY.
    // menu.appendTo($('body'));
    // Выставляем масштаб карты чтобы были видны все группы.
    myMap.setBounds(myMap.geoObjects.getBounds());
}
});

