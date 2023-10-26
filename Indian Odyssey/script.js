// JavaScript code for rotating featured artworks
const featuredArtworks = document.querySelectorAll('.featured .art-piece');
let currentArtwork = 0;

setInterval(() => {
  featuredArtworks[currentArtwork].classList.remove('active');
  currentArtwork = (currentArtwork + 1) % featuredArtworks.length;
  featuredArtworks[currentArtwork].classList.add('active');
}, 3000);

// JavaScript code for the lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCloseButton = lightbox.querySelector('.close-button');
const artPieces = document.querySelectorAll('.art-piece');

artPieces.forEach((artPiece, index) => {
  artPiece.addEventListener('click', () => {
    lightboxImage.src = artPiece.querySelector('img').src;
    lightbox.style.display = 'block';
  });
});

lightboxCloseButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// JavaScript code for user comments and ratings
const commentForm = document.getElementById('comment-form');
const userComments = document.querySelector('.user-comments');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const comment = commentForm.querySelector('textarea').value;
  const userName = commentForm.querySelector('input').value;

  if (comment.trim() !== '' && userName.trim() !== '') {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('user-comment');
    commentDiv.innerHTML = `
      <h4>${userName}</h4>
      <p>${comment}</p>
      <div class="rating">
        <!-- Add your rating stars or input elements here -->
      </div>
    `;

    userComments.appendChild(commentDiv);

    // Clear the form
    commentForm.querySelector('textarea').value = '';
    commentForm.querySelector('input').value = '';
  }
});

// JavaScript code for the interactive map


// Create a fallback image for any errors in loading images
function addFallbackImage(imageElement, fallbackImage) {
  imageElement.src = fallbackImage;
  imageElement.onerror = () => {
    imageElement.src = 'fallback-image.jpg';
  };
}

// Add fallback images for featured artworks, hidden gem, and most viewed
const featuredImages = featuredArtworks.map((artPiece) => artPiece.querySelector('img'));
const hiddenGemImage = document.querySelector('.gem-piece img');
const mostViewedImage = document.querySelector('.viewed-piece img');

featuredImages.forEach((image) => addFallbackImage(image, 'fallback-image.jpg'));
addFallbackImage(hiddenGemImage, 'fallback-image.jpg');
addFallbackImage(mostViewedImage, 'fallback-image.jpg');
