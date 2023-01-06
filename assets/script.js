const btnBox = document.getElementById('box');

btnBox.addEventListener('click', () => {
  btnBox.style.display = 'none';

  const bioBox = document.getElementById('biobox');
  bioBox.style.display = 'block';
});