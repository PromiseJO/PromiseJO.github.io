//code header mobile

const nav = document.querySelector('nav');
const burger = document.getElementById('burger');
burger.addEventListener("click", function (){
    burger.classList.toggle('active');
    nav.classList.toggle('open');
});

//Ces variable stoque dabord le nombre d'articles par défauft dans le panier

//Articles et quantités

let articleChaussettes = 1;
let articleMontre = 1;
let articleSac = 1;
let articleTshirt = 1;



//Prix articles

let prixArticleChaussettes = 3;
let prixArticleMontre = 10;
let prixArticleSac = 10;
let prixArticleTshirt = 10;


//Quantité total

let articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;

//Prix total

let prixTotal = (prixArticleChaussettes * articleChaussettes) + (prixArticleMontre * articleMontre) + (prixArticleSac * articleSac) + (prixArticleTshirt * articleTshirt);

//Prix total produit unité


let prixTotalUnite1 =  prixArticleChaussettes * articleChaussettes;
let prixTotalUnite2 =  prixArticleMontre * articleMontre;
let prixTotalUnite3 =  prixArticleSac * articleSac;
let prixTotalUnite4 =  prixArticleTshirt * articleTshirt;

//Budget

function miseAJourCouleurTotal(){
    let totalElement = document.getElementById('Total');
    let totalElement2 = document.getElementById('euro');
    let total = Number(totalElement.textContent);
    if(total < 50){
        totalElement.style.color = "green";
        totalElement2.style.color = "green";
    }else if(total >= 50 && total < 75) {
        totalElement.style.color = "orange";
        totalElement2.style.color = "orange";
    }else if(total >= 75) {
        totalElement.style.color = "red";
        totalElement2.style.color = "red";
    }
}

miseAJourCouleurTotal()



//Ajouter

function Ajouter(idProduit){
    if( articlesTotal === 15){
        alert('Impossible d\'effectuer cette action. Vous avez dépassé la limite d\'articles autorisée')
    } 
    else{
        if(idProduit === 'Chaussettes'){
            articleChaussettes = articleChaussettes + 1;
            document.getElementById('quantiteproduit1').textContent = articleChaussettes;
            prixTotalUnite1 =  prixArticleChaussettes * articleChaussettes;
            document.getElementById('prix-total-du-produit1').textContent = prixTotalUnite1;
            document.getElementById('quantite-dans-panier1').textContent = articleChaussettes;
            document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
            articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
            document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';
            
            panierVide();
            document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
            miseAJourCouleurTotal();
            
        }
        else if(idProduit === 'Montre'){
            articleMontre = articleMontre + 1;
            document.getElementById('quantiteproduit2').textContent = articleMontre;
            prixTotalUnite2 =  prixArticleMontre * articleMontre;
            document.getElementById('prix-total-du-produit2').textContent = prixTotalUnite2;
            document.getElementById('quantite-dans-panier2').textContent = articleMontre;
            document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
            articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
            document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';

            panierVide();
            document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
            miseAJourCouleurTotal();
            
        }
        else if(idProduit === 'Sac'){
            articleSac = articleSac + 1;
            document.getElementById('quantiteproduit3').textContent = articleSac;
            prixTotalUnite3 =  prixArticleSac * articleSac;
            document.getElementById('prix-total-du-produit3').textContent = prixTotalUnite3;
            document.getElementById('quantite-dans-panier3').textContent = articleSac;
            document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
            articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
            document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';

            panierVide();
            document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
            miseAJourCouleurTotal();
            
        }
        else if(idProduit === 'Tshirt'){
            articleTshirt = articleTshirt + 1;
            document.getElementById('quantiteproduit4').textContent = articleTshirt;
            prixTotalUnite4 =  prixArticleTshirt * articleTshirt;
            document.getElementById('prix-total-du-produit4').textContent = prixTotalUnite4;
            document.getElementById('quantite-dans-panier4').textContent = articleTshirt;
            document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
            articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
            document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';

            panierVide();
            document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
            miseAJourCouleurTotal();
            

        }
    }
}




//Supprimer 

function Supprimer(idProduit){
    if(idProduit === 'Chaussettes'){
        articleChaussettes = articleChaussettes - 1;
        document.getElementById('quantiteproduit1').textContent = articleChaussettes;
        prixTotalUnite1 =  prixArticleChaussettes * articleChaussettes;
        document.getElementById('prix-total-du-produit1').textContent = prixTotalUnite1;
        document.getElementById('quantite-dans-panier1').textContent = articleChaussettes;
        document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
        articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
        document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';

        panierVide();
        document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
        miseAJourCouleurTotal();
    }
    else if(idProduit === 'Montre'){
        articleMontre = articleMontre - 1;
        document.getElementById('quantiteproduit2').textContent = articleMontre;
        prixTotalUnite2 =  prixArticleMontre * articleMontre;
        document.getElementById('prix-total-du-produit2').textContent = prixTotalUnite2;
        document.getElementById('quantite-dans-panier2').textContent = articleMontre;
        document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
        articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
        document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';

        panierVide();
        document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
        miseAJourCouleurTotal();
    }
    else if(idProduit === 'Sac'){
        articleSac = articleSac - 1;
        document.getElementById('quantiteproduit3').textContent = articleSac;
        prixTotalUnite3 =  prixArticleSac * articleSac;
        document.getElementById('prix-total-du-produit3').textContent = prixTotalUnite3;
        document.getElementById('quantite-dans-panier3').textContent = articleSac;
        document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
        articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
        document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';

        panierVide();
        document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
        miseAJourCouleurTotal();
        
    }
    else if(idProduit === 'Tshirt'){
        articleTshirt = articleTshirt - 1;
        document.getElementById('quantiteproduit4').textContent = articleTshirt;
        prixTotalUnite4 =  prixArticleTshirt * articleTshirt;
        document.getElementById('prix-total-du-produit4').textContent = prixTotalUnite4;
        document.getElementById('quantite-dans-panier4').textContent = articleTshirt;
        document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
        articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
        document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';

        panierVide();
        document.getElementById('Total').textContent = prixTotalUnite1 + prixTotalUnite2 + prixTotalUnite3 + prixTotalUnite4;
        miseAJourCouleurTotal();
    }
    else{
        alert('erreur');
    }

}




// Tout effacer

function ToutEffacer() {
    let element1 = document.getElementById("tout-effacer");
        element1.remove();
        let element3 = document.getElementById("caisse");
        element3.remove();
    if (articleChaussettes > 0) {
        articleChaussettes = 0;
        articlesTotal = 0;
        document.getElementById('quantiteproduit1').textContent = articleChaussettes;
        document.getElementById('prix-total-du-produit1').textContent = 0;
        document.getElementById('quantite-dans-panier1').textContent = 0;
        document.getElementById('Total').textContent = 0;
        document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous n\'avez aucun article dans votre panier';
        let element1 = document.getElementById("article-panier1");
        element1.remove();
        let element2 = document.getElementById("article-reca1");
        element2.remove();
        
    }
  
    if (articleMontre > 0) {
        articleMontre = 0;
        articlesTotal = 0;
        document.getElementById('quantiteproduit2').textContent = articleMontre;
        document.getElementById('prix-total-du-produit2').textContent = 0;
        document.getElementById('quantite-dans-panier2').textContent = 0;
        document.getElementById('Total').textContent = 0;
        document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous n\'avez aucun article dans votre panier';
        let element1 = document.getElementById("article-panier2");
        element1.remove();
        let element2 = document.getElementById("article-reca2");
        element2.remove();
        
    }
  
    if (articleSac > 0) {
        articleSac = 0;
        articlesTotal = 0;
        document.getElementById('quantiteproduit3').textContent = articleSac;
        document.getElementById('prix-total-du-produit3').textContent = 0;
        document.getElementById('quantite-dans-panier3').textContent = 0;
        document.getElementById('Total').textContent = 0;
        document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous n\'avez aucun article dans votre panier';
        let element1 = document.getElementById("article-panier3");
        element1.remove();
        let element2 = document.getElementById("article-reca3");
        element2.remove();
        
    }
  
    if (articleTshirt > 0) {
        articleTshirt = 0;
        articlesTotal = 0;
        document.getElementById('quantiteproduit4').textContent = articleTshirt;
        document.getElementById('prix-total-du-produit4').textContent = 0;
        document.getElementById('quantite-dans-panier4').textContent = 0;
        document.getElementById('Total').textContent = 0;
        document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous n\'avez aucun article dans votre panier';
        let element1 = document.getElementById("article-panier4");
        element1.remove();
        let element2 = document.getElementById("article-reca4");
        element2.remove();
        
    }
  
    // Rest of your code...
  }


//Retirer article du panier si 0 

function supressionDuPanier(idProduit){
    if(idProduit === 'Chaussettes' && articleChaussettes <= 0){
        let element1 = document.getElementById("article-panier1");
        element1.remove();
        let element2 = document.getElementById("article-reca1");
        element2.remove();
       
    }
    else if(idProduit === 'Montre' && articleMontre <= 0){
        let element1 = document.getElementById("article-panier2");
        element1.remove();
        let element2 = document.getElementById("article-reca2");
        element2.remove();
        
    }
    else if(idProduit === 'Sac' && articleSac <= 0){
        let element1 = document.getElementById("article-panier3");
        element1.remove();
        let element2 = document.getElementById("article-reca3");
        element2.remove();
       
    }
    else if(idProduit === 'Tshirt' && articleTshirt <= 0){
        let element1 = document.getElementById("article-panier4");
        element1.remove();
        let element2 = document.getElementById("article-reca4");
        element2.remove();
        
    }
}

//si le panier est vide afficher message

function panierVide() {
    articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;  // recalculate articlesTotal
    if(articlesTotal === 0){
        document.getElementById("total-quantite-dans-le-panier").textContent ='Vous n\'avez aucun article dans votre panier';
        let element1 = document.getElementById("tout-effacer");
        element1.remove();
        let element3 = document.getElementById("caisse");
        element3.remove();
    }
    else{
        document.getElementById("aucun-article").textContent ='';
    }
}

panierVide();

//Changer la couler

//Affichage des quantite de produit actuelle

document.getElementById('quantiteproduit1').textContent = articleChaussettes;
document.getElementById('quantiteproduit2').textContent = articleMontre;
document.getElementById('quantiteproduit3').textContent = articleSac;
document.getElementById('quantiteproduit4').textContent = articleTshirt;

//affichage du prix total d'un produit en prenant en compte la quantité


document.getElementById('prix-total-du-produit1').textContent = prixTotalUnite1;
document.getElementById('prix-total-du-produit2').textContent = prixTotalUnite2;
document.getElementById('prix-total-du-produit3').textContent = prixTotalUnite3;
document.getElementById('prix-total-du-produit4').textContent = prixTotalUnite4;

//affichage de nombre d'exemplaire d'un produit dans le panier


document.getElementById('quantite-dans-panier1').textContent = articleChaussettes;
document.getElementById('quantite-dans-panier2').textContent = articleMontre;
document.getElementById('quantite-dans-panier3').textContent = articleSac;
document.getElementById('quantite-dans-panier4').textContent = articleTshirt;

//affichage du prix total

document.getElementById('Total').textContent = prixTotal;

//affichage du nombre d'article total dans le panier

articlesTotal = articleChaussettes + articleMontre + articleSac + articleTshirt;
document.getElementById('total-quantite-dans-le-panier').textContent = 'Vous avez' + ' ' + articlesTotal + ' ' +'articles dans votre panier';




