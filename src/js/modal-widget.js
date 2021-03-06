const refs = {
  createWidget: document.querySelector('.modal__znaiderest-widget'),
  addAttribute: document.getElementById('gasstra-widget-iframe'),
};

let newDiv = document.createElement('gasstra-widget');
refs.createWidget.appendChild(newDiv);

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

setAttributes(newDiv, {
  id: 'gasstra-widget',
  clientId: '2420e446d9144244b542c1dee14cd271',
  theme: 'white',
  maxGuestsNumber: '10',
  locale: 'uk',
  width: '100%',
  height: '1000',
  'background-color': '#f7f0e4',
  custom: JSON.stringify({
    'background-color': '#fffbed',
    'button-background': '#ff5c5c',
    'button-text-color': '#ffffff',
    'button-color__hover': '#43291b',
  }),
  policies: JSON.stringify({
    uk: {
      title: 'Політика бронювання',
      paragraph:
        'Просимо Вас уважно ознайомитися з політикою бронювання. Ми можемо гарантувати Ваше бронювання за дотримання наступних положень та умов:',
      items: [
        'запізнення на 15+ хвилин без попередження скасовує Ваше бронювання',
        'столик зарезервований на 2 години 30 хвилин',
        'ми включаємо 10% чайових в чек від 3 тис. грн',
        'біля ресторану немає паркувальних місць, тому просимо заздалегідь спланувати свій маршрут',
        'для змін або скасування бронювання ми будемо вдячні, якщо Ви зателефонуєте нам за номером <a href=&apos;tel:380680686975&apos;>+38-068-068-69-75</a>',
        'замовлення на страви і напої приймаємо до 20:00 год',
      ],
    },
  }),
});
