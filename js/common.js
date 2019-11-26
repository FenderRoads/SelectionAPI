document.addEventListener("DOMContentLoaded", function() {

  // Табы
  $('.left-tabs__item').on('click', function() {
    let value = $(this).attr("data-filter");
    $('.left-list__item').not("."+value).css({"display": "none"});
    $('.left-list__item').filter("."+value).css({"display": "flex"});
  });
  
  $('.left-tabs .left-tabs__item').on('click', function() {
    $(this).addClass('left-tabs__item-active').siblings().removeClass('left-tabs__item-active')
  });


  // Поисковой фильтр
  $(".input").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $(".left-list .left-list__item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

ymaps.ready(init);

function init() {

    let myMap = new ymaps.Map('map', {
            center: [50.443705, 30.530946],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        });
        

    for (let i = 0, l = pharms.length; i < l; i++) {
      createItem(pharms[i]);
    }
  

    function createItem (group) {

        function rand(min,max,num){
          return Math.floor(Math.floor(Math.random()*(max-min+1)+min) / num) * num;
        }

        let randNum = rand(150, 750, 25),

        time = Math.floor(Math.random() * 5) + 2,

        item = $(`<div class="left-list__item ${group.type}"><div class="item-info"><div class="item-info__address">${group.address}</div><div class="item-info__places"><div class="places-item ${group.statusColor}"><span class="${group.metroClass}">${group.metro}</span> <span><img src="img/@2x/people.svg" alt=""> ${randNum} m</span></div></div><div class="item-info__type">${group.typeRu}</div></div><div class="item-workingtime"><span>${group.schedule}</span></div><div class="item-select">Выбрать</div><div class="item-reset">Сбросить</div></div>`),

        placemark = new ymaps.Placemark(group.coords, { 
          balloonContentBody: `<div class="item-info"><div class="item-info__address"><img src="img/@2x/heart.svg" alt=""> ${group.address}</div><div class="item-info__places"><div class="places-item ${group.statusColor}"><span class="${group.metroClass}">${group.metro}</span> <span><img src="img/@2x/people.svg" alt=""> ${randNum} m</span></div></div><div class="item-info__open">Откроеться через ${time} часа(ов)</div><div class="item-info__type">${group.typeRu}</div></div><div class="item-workingtime-balloon"><span>${group.schedule}</span></div>`,
          balloonContentFooter: `<div class="balloon-button">Сбросить</div>`
        },{
          iconLayout: 'default#image',
          iconImageHref: 'img/@2x/icon-mark.svg',
          iconImageSize: [22, 22],
          iconImageOffset: [-5, -14]
        }),
        collection = new ymaps.GeoObjectCollection(null, { preset: group.style });

        myMap.geoObjects.add(collection);
        collection.add(placemark);

        $('.left-list').append(item)
        
        $(item).find('.item-select').on('click', function() {
          if (!placemark.balloon.isOpen()) {
            placemark.balloon.open();
          }
          return false;
        });

        // $(item).find('.item-reset').on('click', function() {
        //   if (placemark.balloon.isOpen()) {
        //     placemark.balloon.close();
        //   }
        //   return false;
        // });
    }

    myMap.setBounds(myMap.geoObjects.getBounds());
}

});

