var monBouton = document.querySelector('button');

var monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
  var monNom = prompt("C'est quoi ton pseudal ?");
	if (nomNom == "je t'aime trop Idenix") {
			alert ("Moi aussi je t'aime...")
		}
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Bienvenue, ' + monNom;
}

if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  var nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Bienvenue, ' + nomEnregistré;
}


monBouton.onclick = function() {
  définirNomUtilisateur();
}
