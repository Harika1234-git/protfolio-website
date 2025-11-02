const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const filterBtns = document.querySelectorAll('.btn');

let currentIndex = 0;

// Show Lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Close on outside click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Category Filtering
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.btn.active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.image-card').forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
