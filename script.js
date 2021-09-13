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
]

//zmienne

const buttonn = document.querySelector("#wybierz");
const quotee = document.querySelector("#quote");
const autor = document.querySelector("#autor");
buttonn.addEventListener('click', pokazuj);

function pokazuj() {

    // random number from array

    let rande = Math.floor(Math.random() * quotes.length);
    console.log(rande);
    //problem: losowe liczby nie mogą się powtarzać do zrobienia next

    //quotee.innerHTML = `${quotes[1].quote}`;
    //quotee.innerHTML = `${quotes[rande].quote}`;


    quotee.innerHTML = quotes[rande].quote;
    autor.innerHTML = quotes[rande].name;


}

