function togglePhotos(year) {
  const gallery = document.getElementById(`gallery-${year}`);
  const cards = gallery.querySelectorAll(".card");
  const btn = gallery.parentElement.querySelector(".see-more-btn");

  const showingAll = Array.from(cards).every(c => !c.classList.contains("hidden"));

  cards.forEach((card, index) => {
    if (index >= 6) {
      card.classList.toggle("hidden", showingAll);
    }
  });

  btn.textContent = showingAll ? "Voir plus" : "Voir moins";
}

function openLightbox(imgSrc, caption) {
  document.getElementById("lightbox-img").src = imgSrc;
  document.getElementById("lightbox-caption").textContent = caption;
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
