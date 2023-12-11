const randomNumber = Math.floor(Math.random() * 9) + 1; // Від 1 до 9

const imageElement = document.createElement('img');

imageElement.src = 'images/' + randomNumber + '.jpg';
imageElement.alt = 'Random Image';

document.body.appendChild(imageElement);