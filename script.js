const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const images = Array.from(document.querySelectorAll(".clickable-image"));
const prevBtn = document.getElementById("prevImage");
const nextBtn = document.getElementById("nextImage");

let currentIndex = 0;

function showImage(index) {
    modal.style.display = "flex";
    modalImg.src = images[index].src;
    currentIndex = index;
}

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        showImage(index);
    });
});

modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === modalImg) {
        modal.style.display = "none";
    }
});

nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        } else if (e.key === "Escape") {
            modal.style.display = "none";
        }
    }
});

const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que clique na imagem também feche
    modal.style.display = "none";
});