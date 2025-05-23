const image = document.getElementById("image");
const lessthan = document.getElementById("less");
const greaterthan = document.getElementById("greater");
const dotsContainer = document.getElementById("dots-container");

const imageList = [
  "images/car1.jpeg",
  "images/car2.jpeg",
  "images/car3.jpeg",
  "images/car4.jpeg"
];

let index = 0;
let interval;

function createDots() {
  dotsContainer.innerHTML = "";
  imageList.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === index) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      updateImage();
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateImage() {
  image.style.opacity = 0;
  setTimeout(() => {
    image.src = imageList[index];
    image.style.opacity = 1;
  }, 300);
  createDots();
}

function nextImage() {
  index = (index + 1) % imageList.length;
  updateImage();
}

function prevImage() {
  index = (index - 1 + imageList.length) % imageList.length;
  updateImage();
}

greaterthan.addEventListener("click", () => {
  nextImage();
  resetAutoplay();
});

lessthan.addEventListener("click", () => {
  prevImage();
  resetAutoplay();
});

function startAutoplay() {
  interval = setInterval(nextImage, 3000);
}

function resetAutoplay() {
  clearInterval(interval);
  startAutoplay();
}

// Swipe support
let touchStartX = 0;
let touchEndX = 0;

image.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

image.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance > 50) {
    prevImage();
    resetAutoplay();
  } else if (swipeDistance < -50) {
    nextImage();
    resetAutoplay();
  }
}

updateImage();
startAutoplay();
