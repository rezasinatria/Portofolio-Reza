// fungsi utama filter
  function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(project => {
      project.style.display = "none"; // hide semua dulu
    });

    if (category === "all") {
      let networkCount = 0;
      let devopsCount = 0;

      projects.forEach(project => {
        const categoryAttr = project.getAttribute("data-category");

        if (categoryAttr === "networking" && networkCount < 3) {
          project.style.display = "";
          networkCount++;
        }

        if (categoryAttr === "devops" && devopsCount < 3) {
          project.style.display = "";
          devopsCount++;
        }
      });
    } else {
      projects.forEach(project => {
        if (project.getAttribute("data-category") === category) {
          project.style.display = "";
        }
      });
    }
  }

  // pas pertama kali load -> langsung filter "all"
  document.addEventListener("DOMContentLoaded", () => {
    filterProjects("all");

    // event click buat tombol filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        filterProjects(filter);

        // aktifin efek tombol
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  });