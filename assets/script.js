// Script du Bouton "Voir plus" pour la partie "Biographie"
const btnBox = document.getElementById('box');
const btnLessBox = document.getElementById('box-less');
const bioBox = document.getElementById('biobox');
btnLessBox.style.display = 'none'

btnBox.addEventListener('click', () => {
  btnBox.style.display = 'none';

  bioBox.style.display = 'block';

  btnLessBox.style.display = 'block';

});

btnLessBox.addEventListener('click' , () => {
  btnBox.style.display = 'block';

  bioBox.style.display = 'none';

  btnLessBox.style.display = 'none';

})

// Script du Bouton "Voir plus" pour la partie "Discographie"
const btnMoreAlbum = document.getElementById('more-album');
const btnLessAlbum = document.getElementById('less-album');
const container = document.getElementById('add-album');
btnLessAlbum.style.display = 'none'

btnMoreAlbum.addEventListener('click', () => {
  btnMoreAlbum.style.display = 'none';

  btnLessAlbum.style.display = 'block';

  container.style.display = 'block';

});

btnLessAlbum.addEventListener('click' , () => {
  btnMoreAlbum.style.display = 'block';

  container.style.display = 'none';

  btnLessAlbum.style.display = 'none';

})



// Script du Pop-Up "Accessibilité" pour la partie "Biographie"
const openButton = document.querySelector('.open-popup');
const closeButton = document.querySelector('.close');
const popup = document.getElementById('popup');

openButton.addEventListener('click', () => {
  popup.style.visibility = 'visible';
});

closeButton.addEventListener('click', () => {
  popup.style.visibility = 'hidden';
});