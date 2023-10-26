// JavaScript code for rotating most viewed tems section
const containers = document.querySelectorAll('.art-piece');
const images = Array.from(containers).map(container => container.querySelector('img'));

let currentImage = 0;

setInterval(() => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  containers.forEach(container => {
    const imageElement = container.querySelector('img');
    imageElement.src = images[currentImage].src;
    imageElement.onerror = () => {
      // Set a fallback image if the original image fails to load
      imageElement.src = 'fallback-image.jpg'; 
    };

    container.style.backgroundImage = `url(${images[currentImage].src})`;
  });
}, 3000);

for (const container of containers) {
  container.addEventListener('mouseover', () => {
    container.style.backgroundColor = '#eee';
  });

  container.addEventListener('mouseout', () => {
    container.style.backgroundColor = '';
  }
}

// JavaScript code for rotating hidden gems
const hiddenGems = [
  {
    image: 'https://i.pinimg.com/originals/61/c2/16/61c216f8c7bcb4db017e519da837a4b1.jpg',
    title: 'Toda Huts, Ooty, Tamil Nadu',
  },
  {
    image: 'https://i.pinimg.com/originals/44/17/18/441718a941ca028821a3fd577f208fb3.jpg',
    title: 'Maluti Temples, Jharkhand',
  },
  {
    image: 'https://fountainink.in/files/photostory/015760449702.jpg',
    title: 'Shekhawati, Rajasthan',
  },
];

let gemIndex = 0;
const gemPiece = document.querySelector('.gem-piece img');
const gemTitle = document.querySelector('.gem-piece h3');

function rotateHiddenGems() {
  gemPiece.src = hiddenGems[gemIndex].image;
  gemTitle.textContent = hiddenGems[gemIndex].title;
  gemIndex = (gemIndex + 1) % hiddenGems.length;
  gemPiece.onerror = () => {
    // Set a fallback image if the original image fails to load
    gemPiece.src = 'fallback-image.jpg'; 
  };
}

// Calling the function to start rotating hidden gems
rotateHiddenGems();
setInterval(rotateHiddenGems, 86400000);

// JavaScript code for tracking most viewed items
const viewedPieces = document.querySelectorAll('.viewed-piece');
let mostViewed = null;

viewedPieces.forEach((piece, index) => {
  piece.addEventListener('click', () => {
    if (mostViewed) {
      mostViewed.classList.remove('most-viewed');
    }
    piece.classList.add('most-viewed');
    mostViewed = piece;
  });
}
