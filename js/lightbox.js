const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const clickableImgs = document.querySelectorAll('.clickable-img');

clickableImgs.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
}
