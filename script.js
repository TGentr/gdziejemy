const quotes = [
{
    name: 'restauracja 1',
    quote: 'adres',
},
{
    name: 'restauracja 2',
    quote: 'adres 2',
},
{
    name: 'restauracja 3',
    quote: 'adres 3',
},
]

//zmienne

const buttonn = document.querySelector("#wybierz");
const quotee = document.querySelector("#quote");
const autor = document.querySelector("#autor");
buttonn.addEventListener('click', pokazuj);

function pokazuj (){

// random number from array

let rande = Math.floor(Math.random()*quotes.length);
console.log(rande);
//problem: losowe liczby nie mogą się powtarzać

//quotee.innerHTML = `${quotes[1].quote}`;
//quotee.innerHTML = `${quotes[rande].quote}`;


quotee.innerHTML = quotes[rande].quote;
autor.innerHTML = quotes[rande].name;


}


