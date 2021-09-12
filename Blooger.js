let container = document.querySelector('.container');
let flecheGauche = document.querySelector('.flecheGauche');
let flecheDroite = document.querySelector('.flecheDroite');


var addition;
var soustraction;
var resultat;

function translationX (){
    let valeurTranslation = window.getComputedStyle(container);
    let matrice = new WebKitCSSMatrix(valeurTranslation.transform);
    let valeurX = matrice.m41 ;
    resultat =(valeurX*100)/document.documentElement.clientWidth;
    soustraction = resultat - 32;
    addition = resultat + 32;
}
// ----------------------Droite------------------------
flecheDroite.addEventListener('click', function(){

    translationX();

     if(resultat > -50){
        container.style.transition = "none";
         container.style.transform = "translate3d(-153.5vw,0,0)";
         translationX();
         container.style.transition = "all 0.4s ease-in";
         container.style.transform = "translate3d(" + addition + "vw,0,0)";
                
     }else{
        container.style.transition = "all 0.4s ease-in";
        container.style.transform = "translate3d(" + addition + "vw,0,0)";

    }
})
// ---------------------------Gauche-----------------------
flecheGauche.addEventListener('click', function(){

    translationX();

     if(resultat < -130){
        container.style.transition = "none";
         container.style.transform = "translate3d(-29vw,0,0)";
         translationX();
         container.style.transition = "all 0.4s ease-in";
         container.style.transform = "translate3d(" + soustraction + "vw,0,0)";
      
     }else{
        container.style.transition = "all 0.4s ease-in";
        container.style.transform = "translate3d(" + soustraction + "vw,0,0)";

    }
})