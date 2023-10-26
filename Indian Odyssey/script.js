const containers = document.querySelectorAll('.art-piece');
const images = Array.from(containers).map(container => container.querySelector('img'));

let currentImage = 0;

setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  containers.forEach(container => {
    const imageElement = container.querySelector('img');
    imageElement.src = images[currentImage].src;
    imageElement.onerror = () => {
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
  });
}

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
    gemPiece.src = 'fallback-image.jpg';
  };
}

rotateHiddenGems();
setInterval(rotateHiddenGems, 86400000);

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
});

// Create a carousel that automatically rotates through the featured artworks
const featuredArtworks = document.querySelectorAll('.featured .art-piece');
let currentArtwork = 0;

setInterval(() => {
  featuredArtworks[currentArtwork].classList.remove('active');
  currentArtwork = (currentArtwork + 1) % featuredArtworks.length;
  featuredArtworks[currentArtwork].classList.add('active');
}, 3000);

// Create a lightbox that pops up when a user clicks on an artwork
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCloseButton = lightbox.querySelector('.close-button');

