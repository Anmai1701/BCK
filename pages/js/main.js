document.querySelectorAll(".my-card img").forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("zoomed");
    });
  });
  