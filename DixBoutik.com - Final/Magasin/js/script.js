/****** MENU BURGER ******/

const nav = document.querySelector("nav");
const burger = document.getElementById("burger");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  nav.classList.toggle("open");
});

/******** Gestion des articles *********/

function ajouterArticle(index) {
  var input = document.getElementById("valeur" + index);
  var valeurActuelle = parseInt(input.value);
  var nouvelleValeur = valeurActuelle + 1;
  input.value = nouvelleValeur;
  calculerTotal();
}

function retirerArticle(index) {
  var input = document.getElementById("valeur" + index);
  var valeurActuelle = parseInt(input.value);
  var nouvelleValeur = valeurActuelle - 1;
  input.value = nouvelleValeur;
  calculerTotal();
}

function supprimerArticles(index) {
  var input = document.getElementById("valeur" + index);
  input.value = "0";
  calculerTotal();
}

function calculerTotal() {
  var total = 0;
  var prixElements = document.getElementsByClassName("prix");
  var quantiteElements = document.getElementsByTagName("input");
  var totalElement = document.getElementById("Total");
  for (var i = 0; i < prixElements.length; i++) {
    var prix = parseFloat(prixElements[i].textContent);
    var quantite = parseInt(quantiteElements[i].value);
    total += prix * quantite;
  }
  totalElement.textContent = "Prix Total: " + " " + total.toFixed(1) + "€";
}
