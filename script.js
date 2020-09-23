let books = [
  {
    titre: "16 lunes",
    auteur: "Kami Garcia",
    prix: 25,
    image: "https://via.placeholder.com/150",
    description:
      "1 blablabla g i g ig yi yfi iy iyf  fiy f yfy ifyi fyi fyi iy ff  iyf yi iyff if iyif",
  },
  {
    titre: "17 lunes",
    auteur: "Kami Garcia",
    prix: 30,
    image: "https://via.placeholder.com/150",
    description: "2 blablabla",
  },
  {
    titre: "18 lunes",
    auteur: "Kami Garcia",
    prix: 20,
    image: "https://via.placeholder.com/150",
    description: "3 blablabla",
  },
  {
    titre: "19 lunes",
    auteur: "Kami Garcia",
    prix: 40,
    image: "https://via.placeholder.com/150",
    description: "4 blablabla",
  },
];
/**
 * affiche 3 livres au hasard
 *
 * @return void
 */
function afficheRecommandations() {
  let draws = [];
  for (k = 0; k < books.length; k++) {
    draws.push(k);
  }
  // mélange les valeurs du tableau draws
  draws.sort(() => Math.random() - 0.5);
  let results = [];
  for (i = 0; i < 3; i++) {
    results.push(books[draws[i]]);
  }
  let divArticles = document.getElementById("articles");
  divArticles.innerHTML = "";
  for (j = 0; j < results.length; j++) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let address =
      results[j].volumeInfo.imageLinks != null
        ? results[j].volumeInfo.imageLinks.thumbnail
        : "https://via.placeholder.com/150";
    image.setAttribute("src", address);
    image.setAttribute("alt", "livre");
    article.appendChild(image);
    let div = document.createElement("div");
    div.classList.add("infos-book");
    let h4 = document.createElement("h4");
    h4.innerText = results[j].volumeInfo.title;
    div.appendChild(h4);
    let author = document.createElement("p");
    let authorName =
      results[j].volumeInfo.authors != null
        ? results[j].volumeInfo.authors[0]
        : "pas d'auteur";
    author.innerText = authorName;
    div.appendChild(author);
    let price = document.createElement("p");
    let priceAmount =
      results[j].saleInfo.listPrice != null
        ? results[j].saleInfo.listPrice.amount + "€"
        : "pas à vendre";
    price.innerText = priceAmount;
    price.classList.add("price");
    div.appendChild(price);
    article.appendChild(div);
    divArticles.appendChild(article);
  }
}
/**
 * affiche les livres en fonction d'un prix maximum passé en paramètre
 *
 * @param {int} prixMax Le prix maximum que l'on veut
 * @return void
 */
function afficheLivres(prixMax) {
  // élimine du tableau books les entrées aux informations incomplètes sur le prix
  let fullBooks = [];
  for (i = 0; i < books.length; i++) {
    books[i].saleInfo.listPrice != null ? fullBooks.push(books[i]) : "";
  }

  let results = fullBooks.filter(
    (fullBooks) => fullBooks.saleInfo.listPrice.amount < prixMax
  );
  let divArticles = document.getElementById("articles-selection");
  for (j = 0; j < results.length; j++) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let address =
      results[j].volumeInfo.imageLinks != null
        ? results[j].volumeInfo.imageLinks.thumbnail
        : "https://via.placeholder.com/150";
    image.setAttribute("src", address);
    image.setAttribute("alt", "livre");
    article.appendChild(image);
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerText = results[j].volumeInfo.title;
    div.appendChild(h4);
    let author = document.createElement("p");
    let authorName =
      results[j].volumeInfo.authors != null
        ? results[j].volumeInfo.authors[0]
        : "pas d'auteur";
    author.innerText = authorName;
    div.appendChild(author);
    let description = document.createElement("p");
    description.innerText = results[j].volumeInfo.description;
    description.classList.add("description");
    div.appendChild(description);
    article.appendChild(div);
    let price = document.createElement("p");
    price.innerText = results[j].saleInfo.listPrice.amount + "€";
    article.appendChild(price);
    divArticles.appendChild(article);
  }
}
/**
 * Récupère les livres selon un mot à partir de l'api de google
 *
 * @param {string} recherche Le mot recherché
 * @return void
 */
function RechercheLivres(recherche) {
  //console.log('dans fonction');

  let url = "https://www.googleapis.com/books/v1/volumes?q=" + recherche;
  /*const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let nonJsonBooks = xhr.responseText;
      let responseJSON = JSON.parse(nonJsonBooks);
      books = responseJSON.items;
      console.log(books);
      afficheRecommandations();
      afficheLivres(28);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();*/
  //console.log(url);
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
      books = data.items;
      //console.log(books);
      afficheRecommandations();
      afficheLivres(28);
      })
    )
    .catch(function (error) {
      console.log("Il y a eu un problème avec l'opération fetch: ", error);
    });
}
//RechercheLivres("ecmascript");
let searchBar = document.getElementById("search");
//console.log(searchBar.value);
let boutonGo = document.getElementById("submission");
boutonGo.addEventListener("click", function (event) {
  event.preventDefault();
  RechercheLivres(searchBar.value);
});
