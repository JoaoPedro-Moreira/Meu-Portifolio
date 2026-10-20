function mover(direcao) {
    const carrossel = document.querySelector(".projetos");
    const card = carrossel.querySelector(".projeto");

    if (!card) return;

    const distancia = card.offsetWidth + 25;

    carrossel.scrollBy({
        left: distancia * direcao,
        behavior: "smooth"
    });
}