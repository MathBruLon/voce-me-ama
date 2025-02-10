noBtn.addEventListener("mouseover", () => {
    const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
    const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

    noBtn.style.left = `${newX}px`; // Corrigido: Usando crases
    noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
    setTimeout(() => {
        heartLoader.style.display = "none"; // Oculta o carregador
        resultContainer.style.display = "inherit"; // Mostra o resultado
        gifResult.play(); // Reproduz o GIF
    }, 3000); // Espera 3 segundos
});
