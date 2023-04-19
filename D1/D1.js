
// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.


let rimuoviLink = document.getElementsByClassName("list-unstyled")[1];
rimuoviLink = rimuoviLink.children[1].innerText = " ";
console.log(rimuoviLink);

/*let twitrem = document.querySelectorAll("aside div.p-4")[2].lastElementChild.querySelectorAll("li")[1];
console.log(twitrem);*/

//EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

let linkRem1 = document.getElementsByClassName("lead mb-0")[0];
let linkrem2 = document.getElementsByClassName("col p-4 d-flex flex-column position-static")[0];
let linkrem3 = document.getElementsByClassName("col p-4 d-flex flex-column position-static")[1];

let keepRead1 = linkRem1.children[0]
keepRead1.addEventListener("click", function () {
    linkRem1.innerHtml = "";
})

