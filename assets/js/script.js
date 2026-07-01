const cards = document.querySelectorAll(".sim-card.disabled");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    alert("Este simulador ainda está em construção.");
  });
});