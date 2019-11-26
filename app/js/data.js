
var pharms = [
  {
    metro: "м. Новокосино",
    metroClass: "m-yellow",
    address: "Реутов, Дзержинского ул. 11-В",
    statusColor: "green",
    statusText: "меньше 3 шт.",
    schedule: ["Круглосуточно"],
    price: "383,00 Р",
    type: "pharmacy",
    typeRu: 'Аптека',
    checklist: "pharm ortop drog home 24hours",
    id: "105543",
    coords: [50.45987, 30.516174],
    style: 'islands#blueIcon'
  },
  {
    metro: "м. Новокосино",
    metroClass: "m-yellow",
    address: "Пушкина ул. 12-В, корп. 834",
    statusColor: "yellow",
    statusText: "осталась 1 шт",
    schedule: ["Ежедневно", " 8:00-22:00"],
    price: "40110,00 Р",
    type: "pharmacy-optics",
    typeRu: 'Аптека/Оптика',
    checklist: "pharm optic drog",
    id: "1974052",
    coords: [50.445049, 30.528598],
    style: 'islands#blueIcon'
  },
  {
    metro: "м. Молодёжная",
    metroClass: "m-yellow",
    address: "Ельнинская ул., 23 стр. 2",
    statusColor: "blue",
    statusText: "меньше 3 шт.",
    schedule: ["Круглосуточно"],
    price: "383,00 Р",
    type: "pharmacy",
    typeRu: 'Аптека',
    checklist: "pharm ortop drog home 24hours",
    id: "105543",
    coords: [50.443334, 30.520163],
    style: 'islands#blueIcon'
  },
  {
    metro: "г. Зеленоград",
    metroClass: "m-yellow",
    address: "Ельнинская ул., 23 стр. 2",
    statusColor: "red",
    statusText: "больше 3 шт",
    schedule: ["Ежедневно", " 8:00-22:00"],
    price: "4010,00 Р",
    type: "pharmacy-optics-drogerie",
    typeRu: 'Аптека/Оптика/Дрогери',
    checklist: "pharm optic drog",
    id: "1974052",
    coords: [50.446977, 30.505269],
    style: 'islands#blueIcon'
  },
  {
    metro: "м. Кузнецкий мост",
    metroClass: "m-yellow",
    address: "Пушечная ул., 9/6 стр. 1",
    statusColor: "orange",
    statusText: "осталась 1 шт",
    schedule: ["Ежедневно", " 8:00-22:00"],
    price: "40110,00 Р",
    type: "pharmacy-optics",
    typeRu: 'Аптека/Оптика',
    checklist: "pharm optic drog",
    id: "1974052",
    coords: [50.452512, 30.530889],
    style: 'islands#blueIcon'
  },
  {
    metro: "м. Братиславская",
    metroClass: "m-yellow",
    address: "Пушечная ул., 9/6 стр. 1",
    statusColor: "grey",
    statusText: "меньше 3 шт.",
    schedule: ["Круглосуточно"],
    price: "383,00 Р",
    type: "24hours",
    typeRu: '24 часа',
    checklist: "pharm ortop drog home 24hours",
    id: "105543",
    coords: [50.50955, 30.60791],
    style: 'islands#blueIcon' 
  },
  {
    metro: "м. Ленинский Проспект",
    metroClass: "m-yellow",
    address: "Пушкина ул. 12-В, корп. 834",
    statusColor: "green",
    statusText: "осталась 1 шт",
    schedule: ["Ежедневно", " 8:00-22:00"],
    price: "40110,00 Р",
    type: "pharmacy",
    typeRu: 'Аптека',
    checklist: "pharm optic drog",
    id: "1974052",
    coords: [50.429083, 30.521708],
    style: 'islands#blueIcon'
  },
  {
    metro: "м. Девяткино",
    metroClass: "m-yellow",
    address: "Девяткино ул. 25",
    statusColor: "yellow",
    statusText: "осталась 1 шт",
    schedule: ["Ежедневно", " 8:00-22:00"],
    price: "40110,00 Р",
    type: '24hours',
    typeRu: '24 часа',
    checklist: "pharm optic drog",
    id: "1974052",
    coords: [50.454834, 30.516498],
    style: 'islands#blueIcon'
  },
  {
    metro: "м. Спасская",
    metroClass: "m-yellow",
    address: "Спасская ул. 25",
    statusColor: "blue",
    statusText: "меньше 3 шт.",
    schedule: ["Круглосуточно"],
    price: "383,00 Р",
    type: "pharmacy",
    typeRu: "Аптека",
    checklist: "pharm ortop drog home 24hours",
    id: "105543",
    coords: [50.426472, 30.563022],
    style: 'islands#blueIcon' 
  },
  {
    metro: "м. Преображенская",
    metroClass: "m-yellow",
    address: "Колодезный переулок, 3с29",
    statusColor: "red",
    statusText: "осталась 1 шт",
    schedule: ["Ежедневно", " 8:00-22:00"],
    price: "40110,00 Р",
    type: "pharmacy-optics-drogerie",
    typeRu: "Аптека/Оптика/Дрогери",
    checklist: "pharm optic drog",
    id: "1974052",
    coords: [50.45351, 30.516489],
    style: 'islands#blueIcon'
  }
]


// for (let i = 0; i < pharms.length; i++) {

//   let distance = Math.floor(Math.random() * 500) + 100

//   $('#pharms').append(`<div class="left-list__item"><div class="item-info"><div class="item-info__address">${pharms[i].address}</div><div class="item-info__places"><div class="places-item"><span class="${pharms[i].metroClass}">${pharms[i].metro}</span> <span><img src="img/@2x/people.svg" alt=""> ${distance}</span></div></div><div class="item-info__type">pharmacy</div></div><div class="item-workingtime"><span>${pharms[i].schedule}</span></div><div class="item-select">Выбрать</div><div class="item-reset">Сбросить</div></div>`);

// }