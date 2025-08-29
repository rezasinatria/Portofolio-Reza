document.addEventListener("DOMContentLoaded", () => {
  // === Achievements Pagination + Modal ===
  const perPage = 6;
  const section = document.querySelector("#achievements");
  if (!section) return;

  const cards = Array.from(section.querySelectorAll(".ach-card"));
  const numbersWrap = section.querySelector(".page-numbers");
  const prevBtn = section.querySelector(".page-btn.prev");
  const nextBtn = section.querySelector(".page-btn.next");

  let current = 1;
  const totalPages = Math.max(1, Math.ceil(cards.length / perPage));

  function buildNumbers() {
    numbersWrap.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = i;
      btn.dataset.page = i;
      if (i === current) btn.classList.add("active");
      btn.addEventListener("click", () => go(i));
      numbersWrap.appendChild(btn);
    }
  }

  function render() {
    cards.forEach(c => c.classList.add("fade-hide"));
    const start = (current - 1) * perPage;
    const end = start + perPage;
    cards.slice(start, end).forEach(c => {
      c.classList.remove("fade-hide");
      c.classList.add("fade-in");
      setTimeout(() => c.classList.remove("fade-in"), 260);
    });

    numbersWrap.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    const activeBtn = numbersWrap.querySelector(`button[data-page="${current}"]`);
    if (activeBtn) activeBtn.classList.add("active");

    prevBtn.disabled = current === 1;
    nextBtn.disabled = current === totalPages;
  }

  function go(page) {
    current = Math.min(Math.max(1, page), totalPages);
    render();
  }

  prevBtn.addEventListener("click", () => go(current - 1));
  nextBtn.addEventListener("click", () => go(current + 1));

  buildNumbers();
  render();

  // === Modal Zoom ===
  const modal = document.getElementById("achModal");
  const modalImg = document.getElementById("achModalImg");
  const modalCaption = document.getElementById("achModalCaption");
  const btnPrev = document.getElementById("achPrev");
  const btnNext = document.getElementById("achNext");

  function openModal(src, title) {
    modalImg.src = src;
    modalCaption.textContent = title || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    document.body.style.overflow = "";
    modal.dataset.images = "";
    modal.dataset.index = "";
    btnPrev.style.display = "none";
    btnNext.style.display = "none";
  }

  modal.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-close") || e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  // === Klik kartu achievement ===
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const front = card.dataset.front;
      const back = card.dataset.back; // opsional
      const title = card.getAttribute("data-title") || "Certificate";

      if (front && !back) {
        // 1 gambar → langsung zoom
        openModal(front, title);
      } else if (front && back) {
        // 2 gambar → aktifkan toggle
        modal.dataset.images = JSON.stringify([front, back]);
        modal.dataset.index = 0;
        openModal(front, title);
        btnNext.style.display = "block";
        btnPrev.style.display = "block";
      }
    });
  });

  // === Toggle depan ↔ belakang ===
  function toggleSide(dir) {
    if (!modal.dataset.images) return;
    const images = JSON.parse(modal.dataset.images);
    let idx = parseInt(modal.dataset.index, 10) || 0;

    if (dir === "next") {
      idx = (idx + 1) % images.length;
    } else if (dir === "prev") {
      idx = (idx - 1 + images.length) % images.length;
    }

    modal.dataset.index = idx;
    modalImg.src = images[idx];
  }

  btnNext.addEventListener("click", () => toggleSide("next"));
  btnPrev.addEventListener("click", () => toggleSide("prev"));
});
