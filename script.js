const images = ["img1.jpg", "img2.jpg"]; // Verifique se esses arquivos existem no mesmo diretório

let currentIndex = 0;
const imgElements = document.querySelectorAll(".imagem");

// Inicializa as imagens
function initializeImages() {
  imgElements.forEach((img, index) => {
    img.style.backgroundImage = `url(${images[index]})`;
    img.classList.remove("active"); // Remove a classe 'active'
    if (index === 0) {
      img.classList.add("active"); // Ativa a primeira imagem
    }
  });
}

// Muda a imagem de fundo
function changeBackground() {
  imgElements[currentIndex].classList.remove("active"); // Remove a classe 'active' da imagem atual
  currentIndex = (currentIndex + 1) % imgElements.length; // Atualiza o índice
  imgElements[currentIndex].classList.add("active"); // Adiciona a classe 'active' à próxima imagem
}

// Inicializa as imagens e muda a imagem a cada 3 segundos
initializeImages();
setInterval(changeBackground, 4000);
