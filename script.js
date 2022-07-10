const quotes = [
    {
        name: 'adres 1',
        quote: 'Test1',
    },
    {
        name: 'adres 2',
        quote: 'Test2',
    },
    {
        name: 'adres 3',
        quote: 'Test3',
    },
    {
        name: 'adres 4',
        quote: 'Test4',
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
    //problem: losowe liczby nie mogą się powtarzać do zrobienia next
    
    //quotee.innerHTML = `${quotes[1].quote}`;
    //quotee.innerHTML = `${quotes[rande].quote}`;
    
    
    quotee.innerHTML = quotes[rande].quote;
    autor.innerHTML = quotes[rande].name;
    
    
    }
    
