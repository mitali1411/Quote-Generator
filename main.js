// Async-Await - Get Quote

let h4 = document.querySelector('h4');
let h6 = document.querySelector('h6');
let button = document.querySelector('button');

const getQuote = async() => {

    const response = await fetch('https://quotable.io/random');
    const data = await response.json();
    h4.innerText = '" ' + data.content + ' "';
    h6.innerText = "— " + data.author;
}


button.addEventListener('click', getQuote);