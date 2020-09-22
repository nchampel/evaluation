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
 * @return void
 */
function afficheRecommandations() {
  let draws = [];
  for (k = 0 ; k < books.length ; k ++) {
      draws.push(k);
  }
  // mélange les valeurs du tableau draws
  draws.sort(() => Math.random() - 0.5);
  let results = [];
  for (i = 0; i < 3; i++) {
    results.push(books[draws[i]]);
  }
  let divArticles = document.getElementById("articles");
  for (j = 0; j < results.length; j++) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let address = results[j].volumeInfo.imageLinks != null ? results[j].volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150";
    image.setAttribute("src", address);
    image.setAttribute("alt", "livre");
    article.appendChild(image);
    let div = document.createElement("div");
    div.classList.add("infos-book");
    let h4 = document.createElement("h4");
    h4.innerText = results[j].volumeInfo.title;
    div.appendChild(h4);
    let author = document.createElement("p");
    let authorName = results[j].volumeInfo.authors != null ? results[j].volumeInfo.authors[0] : "pas d'auteur";
    author.innerText = authorName;
    div.appendChild(author);
    let price = document.createElement("p");
    let priceAmount = results[j].saleInfo.listPrice != null ? results[j].saleInfo.listPrice.amount + "€" : "pas à vendre";
    price.innerText = priceAmount;
    price.classList.add("price");
    div.appendChild(price);
    article.appendChild(div);
    divArticles.appendChild(article);
  }
}
/**
 * affiche les livres en fonction d'un prix maximum passé en paramètre
 * @param {int} prixMax
 * @return void
 */
function afficheLivres(prixMax) {
  let results = books.filter((books) => books.saleInfo.listPrice.amount < prixMax);
  let divArticles = document.getElementById("articles-selection");
  for (j = 0; j < results.length; j++) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    image.setAttribute("src", results[j].image);
    image.setAttribute("alt", "livre");
    article.appendChild(image);
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerText = results[j].titre;
    div.appendChild(h4);
    let author = document.createElement("p");
    author.innerText = results[j].auteur;
    div.appendChild(author);
    let description = document.createElement("p");
    description.innerText = results[j].description;
    description.classList.add("description");
    div.appendChild(description);
    article.appendChild(div);
    let price = document.createElement("p");
    price.innerText = results[j].prix + "€";
    article.appendChild(price);
    divArticles.appendChild(article);
  }
}

function RechercheLivres(recherche) {
  let url = "https://www.googleapis.com/books/v1/volumes?q=" + recherche;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let nonJsonBooks = xhr.responseText;
      let responseJSON = JSON.parse(nonJsonBooks);
      books = responseJSON.items;
      console.log(books);
      afficheRecommandations();
      afficheLivres(36);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
RechercheLivres("ecmascript");
