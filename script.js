const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const cardInner = document.getElementById("cardInner");
const music = document.getElementById("bgMusic");

let opened = false;

envelope.addEventListener("click", () => {
  if (!opened) {
    envelope.classList.add("open");
    card.classList.remove("hidden");
    card.classList.add("show");
    music.play();
    opened = true;
  }
});

cardInner.addEventListener("click", () => {
  cardInner.classList.toggle("flipped");
});
