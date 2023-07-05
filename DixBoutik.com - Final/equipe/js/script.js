const nav = document.querySelector('nav');
const burger = document.getElementById('burger');


burger.addEventListener("click", function (){
    burger.classList.toggle('active');
    nav.classList.toggle('open');
});

// 1. LEIA

// La fonction que l'on va appeler lorsque l'utilisateur remplit le formulaire

function modifTexte1(){
    document.getElementById('formLeia').addEventListener('submit', function(e){
    e.preventDefault();

    //recupère le nom donné grace a l'id de la balise input où le nom a été entré

    var nom1 = document.getElementById('nom1').value;
    var poste1 = document.getElementById('poste1').value;
    var description1 = document.getElementById('description1').value;

    //modifie avec le nom donné

    if(nom1 != ''){
    document.getElementById('nom-leia1').innerHTML = nom1;

    }
    else{}
  
    if(poste1 != ''){
      document.getElementById('poste-leia1').innerHTML = poste1;

  }
    else{}
  
    if(description1 != ''){
    document.getElementById('texte-leia1').innerHTML= description1;
    }
    else{}
  });
    }
    
    //j'appelle la fonction créée pour qu'elle fonctionne

    modifTexte1();

    function afficherFormulaire1(){

  // on récupère l'élément form

  var formulaire1 = document.getElementById('formLeia');

  // Condition pour afficher/cacher le formulaire en fonction de son état

  if(formulaire1.style.display == 'none'){
  formulaire1.style.display = 'block';
  }else{
  formulaire1.style.display = 'block';
  }
    }
  
  var form1=document.getElementById("formLeia");
  function submitForm1(event){
  
     //Empêche le raffraichissement de la page
     event.preventDefault();
  }
  
  form1.addEventListener('submit', submitForm1);



  function cacherFormulaire1()
{
    var formulaire11 = document.getElementById('formLeia');
    if(formulaire11.style.display == 'block'){
        formulaire11.style.display = 'none';
        }else{
        formulaire11.style.display = 'none';
        }

}




// 2. LUKE

// La fonction que l'on va appeler lorsque l'utilisateur remplit le formulaire

function modifTexte2(){
    document.getElementById('formLuke').addEventListener('submit', function(e){
    e.preventDefault();

    //recupère le nom donné grace a l'id de la balise input où le nom a été entré

    var nom2 = document.getElementById('nom2').value;
    var poste2 = document.getElementById('poste2').value;
    var description2 = document.getElementById('description2').value;

    //modifie avec le nom donné

    if(nom2 != ''){
    document.getElementById('nom-luke2').innerHTML = nom2;

    }
    else{}
  
    if(poste2 != ''){
      document.getElementById('poste-luke2').innerHTML = poste2;

  }
    else{}
  
    if(description2 != ''){
    document.getElementById('texte-luke2').innerHTML= description2;
    }
    else{}
  });
    }
    
    //j'appelle la fonction créée pour qu'elle fonctionne

    modifTexte2();
    function afficherFormulaire2(){

  // on récupère l'élément form

  var formulaire2 = document.getElementById('formLuke');

  // Condition pour afficher/cacher le formulaire en fonction de son état

  if(formulaire2.style.display == 'none'){
  formulaire2.style.display = 'block';
  }else{
  formulaire2.style.display = 'block';
  }
    }
  
  var form2=document.getElementById("formLuke");
  function submitForm2(event){
  
     //Empêche le raffraichissement de la page
     event.preventDefault();
  }
  
  form2.addEventListener('submit', submitForm2);



  function cacherFormulaire2()
{
    var formulaire22 = document.getElementById('formLuke');
    if(formulaire22.style.display == 'block'){
        formulaire22.style.display = 'none';
        }else{
        formulaire22.style.display = 'none';
        }

}

// 3. HAN

// La fonction que l'on va appeler lorsque l'utilisateur remplit le formulaire

function modifTexte3(){
    document.getElementById('formHan').addEventListener('submit', function(e){
    e.preventDefault();

    //recupère le nom donné grace a l'id de la balise input où le nom a été entré

    var nom3 = document.getElementById('nom3').value;
    var poste3 = document.getElementById('poste3').value;
    var description3 = document.getElementById('description3').value;

    //modifie avec le nom donné

    if(nom3 != ''){
    document.getElementById('nom-han3').innerHTML = nom3;

    }
    else{}
  
    if(poste3 != ''){
      document.getElementById('poste-han3').innerHTML = poste3;

  }
    else{}
  
    if(description3 != ''){
    document.getElementById('texte-han3').innerHTML= description3;
    }
    else{}
  });
    }
    
    //j'appelle la fonction créée pour qu'elle fonctionne

    modifTexte3();
    function afficherFormulaire3(){

  // on récupère l'élément form

  var formulaire3 = document.getElementById('formHan');

  // Condition pour afficher/cacher le formulaire en fonction de son état

  if(formulaire3.style.display == 'none'){
  formulaire3.style.display = 'block';
  }else{
  formulaire3.style.display = 'block';
  }
    }
  
  var form3=document.getElementById("formHan");
  function submitForm3(event){
  
     //Empêche le raffraichissement de la page
     event.preventDefault();
  }
  
  form3.addEventListener('submit', submitForm3);



  function cacherFormulaire3()
{
    var formulaire33 = document.getElementById('formHan');
    if(formulaire33.style.display == 'block'){
        formulaire33.style.display = 'none';
        }else{
        formulaire33.style.display = 'none';
        }

}

// 4. CHEWBACCA

// La fonction que l'on va appeler lorsque l'utilisateur remplit le formulaire

function modifTexte4(){
    document.getElementById('formChewbacca').addEventListener('submit', function(e){
    e.preventDefault();

    //recupère le nom donné grace a l'id de la balise input où le nom a été entré

    var nom4 = document.getElementById('nom4').value;
    var poste4 = document.getElementById('poste4').value;
    var description4 = document.getElementById('description4').value;

    //modifie avec le nom donné

    if(nom4 != ''){
    document.getElementById('nom-chewbacca4').innerHTML = nom4;

    }
    else{}
  
    if(poste4 != ''){
      document.getElementById('poste-chewbacca4').innerHTML = poste4;

  }
    else{}
  
    if(description4 != ''){
    document.getElementById('texte-chewbacca4').innerHTML= description4;
    }
    else{}
  });
    }
    
    //j'appelle la fonction créée pour qu'elle fonctionne

    modifTexte4();
    function afficherFormulaire4(){

  // on récupère l'élément form

  var formulaire4 = document.getElementById('formChewbacca');

  // Condition pour afficher/cacher le formulaire en fonction de son état

  if(formulaire4.style.display == 'none'){
  formulaire4.style.display = 'block';
  }else{
  formulaire4.style.display = 'block';
  }
    }
  
  var form4=document.getElementById("formChewbacca");
  function submitForm4(event){
  
     //Empêche le raffraichissement de la page
     event.preventDefault();
  }
  
  form4.addEventListener('submit', submitForm4);



  function cacherFormulaire4()
{
    var formulaire44 = document.getElementById('formChewbacca');
    if(formulaire44.style.display == 'block'){
        formulaire44.style.display = 'none';
        }else{
        formulaire44.style.display = 'none';
        }

}

// 5. BEN

// La fonction que l'on va appeler lorsque l'utilisateur remplit le formulaire

function modifTexte5(){
    document.getElementById('formBen').addEventListener('submit', function(e){
    e.preventDefault();

    //recupère le nom donné grace a l'id de la balise input où le nom a été entré

    var nom5 = document.getElementById('nom5').value;
    var poste5 = document.getElementById('poste5').value;
    var description5 = document.getElementById('description5').value;

    //modifie avec le nom donné

    if(nom5 != ''){
    document.getElementById('nom-ben5').innerHTML = nom5;

    }
    else{}
  
    if(poste5 != ''){
      document.getElementById('poste-ben5').innerHTML = poste5;

  }
    else{}
  
    if(description5 != ''){
    document.getElementById('texte-ben5').innerHTML= description5;
    }
    else{}
  });
    }
    
    //j'appelle la fonction créée pour qu'elle fonctionne

    modifTexte5();
    function afficherFormulaire5(){

  // on récupère l'élément form

  var formulaire5 = document.getElementById('formBen');

  // Condition pour afficher/cacher le formulaire en fonction de son état

  if(formulaire5.style.display == 'none'){
  formulaire5.style.display = 'block';
  }else{
  formulaire5.style.display = 'block';
  }
    }
  
  var form5=document.getElementById('formBen');
  function submitForm5(event){
  
     //Empêche le raffraichissement de la page
     event.preventDefault();
  }
  
  form5.addEventListener('submit', submitForm5);



  function cacherFormulaire5()
{
    var formulaire55 = document.getElementById('formBen');
    if(formulaire55.style.display == 'block'){
        formulaire55.style.display = 'none';
        }else{
        formulaire55.style.display = 'none';
        }

}

// 6. Z6PO

// La fonction que l'on va appeler lorsque l'utilisateur remplit le formulaire

function modifTexte6(){
    document.getElementById('formZ6PO').addEventListener('submit', function(e){
    e.preventDefault();

    //recupère le nom donné grace a l'id de la balise input où le nom a été entré

    var nom6 = document.getElementById('nom6').value;
    var poste6 = document.getElementById('poste6').value;
    var description6 = document.getElementById('description6').value;

    //modifie avec le nom donné

    if(nom6 != ''){
    document.getElementById('nom-z6po6').innerHTML = nom6;

    }
    else{}
  
    if(poste6 != ''){
      document.getElementById('poste-z6po6').innerHTML = poste6;

  }
    else{}
  
    if(description6 != ''){
    document.getElementById('texte-z6po6').innerHTML= description6;
    }
    else{}
  });
    }
    
    //j'appelle la fonction créée pour qu'elle fonctionne

    modifTexte6();
    function afficherFormulaire6(){

  // on récupère l'élément form

  var formulaire6 = document.getElementById('formZ6PO');

  // Condition pour afficher/cacher le formulaire en fonction de son état

  if(formulaire6.style.display == 'none'){
  formulaire6.style.display = 'block';
  }else{
  formulaire6.style.display = 'block';
  }
    }
  
  var form6=document.getElementById("formZ6PO");
  function submitForm6(event){
  
     //Empêche le raffraichissement de la page
     event.preventDefault();
  }
  
  form6.addEventListener('submit', submitForm6);



  function cacherFormulaire6()
{
    var formulaire66 = document.getElementById('formZ6PO');
    if(formulaire66.style.display == 'block'){
        formulaire66.style.display = 'none';
        }else{
        formulaire66.style.display = 'none';
        }

}