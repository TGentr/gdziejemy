const quotes = [
  {
    name: 'Wielka 23/2',
    quote: 'Vegab',
  },
  {
    name: 'Piekary 17',
    quote: 'miXtura',
  },
  {
    name: 'Limanowskiego 2',
    quote: 'Vege Pizza',
  },
  {
    name: '23 Lutego 29/33',
    quote: 'Porażka',
  },
];

const buttonn = document.querySelector('#wybierz');
const quotee = document.querySelector('#quote');
const autor = document.querySelector('#autor');
buttonn.addEventListener('click', showRandomEatery);

const showRandomEatery = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);

  quotee.innerHTML = quotes[randomNumber].quote;
  autor.innerHTML = quotes[randomNumber].name;
};
