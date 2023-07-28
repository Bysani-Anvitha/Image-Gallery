// Get references to elements
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Add event listeners to thumbnails
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    // Update main image source
    const src = thumbnail.getAttribute('src');
    const alt = thumbnail.getAttribute('alt');
    mainImage.setAttribute('src', src);
    mainImage.setAttribute('alt', alt);
  });
});

// Handle previous button click
prevBtn.addEventListener('click', () => {
  const currentThumbnail = document.querySelector('.thumbnail[src="' + mainImage.getAttribute('src') + '"]');
  const prevThumbnail = currentThumbnail.previousElementSibling;

  if (prevThumbnail) {
    // Update main image source with previous thumbnail
    const src = prevThumbnail.getAttribute('src');
    const alt = prevThumbnail.getAttribute('alt');
    mainImage.setAttribute('src', src);
    mainImage.setAttribute('alt', alt);
  }
});

// Handle next button click
nextBtn.addEventListener('click', () => {
  const currentThumbnail = document.querySelector('.thumbnail[src="' + mainImage.getAttribute('src') + '"]');
  const nextThumbnail = currentThumbnail.nextElementSibling;

  if (nextThumbnail) {
    // Update main image source with next thumbnail
    const src = nextThumbnail.getAttribute('src');
    const alt = nextThumbnail.getAttribute('alt');
    mainImage.setAttribute('src', src);
    mainImage.setAttribute('alt', alt);
  }
});
