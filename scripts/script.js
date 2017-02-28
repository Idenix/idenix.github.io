var monTitre = document.querySelector('h1');
monTitre.textContent = 'Hewew';
var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');
function définirNomUtilisateur() {
  var monNom = prompt('Dis ton nom, pd.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = monNom + ', t un pd.';
}
if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  var nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = nomEnregistré + ', t un pd.';
}
monBouton.onclick = function() {
  définirNomUtilisateur();
}