// ==========================================
// PROJECTS DATA
// ==========================================
const projects = [
  {
    id: 1,
    title: "Pastel Balloons",
    year: "February 2026",
    description: "A fun web project with poppable, pastel-colored balloons floating across the screen.",
    fullDescription:
      "A playful web project that features pastel-colored p5 shapes that float across the screen using a noise function for smooth movement. Users can interact by clicking on the balloons to 'pop' them, triggering a popping sound effect.",
    tags: ["P5.js", "Interaction", "Web"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/BalloonProject_mpps69.png",
    github: "https://github.com/ellisben/PastelBalloon/tree/main/PastelBalloons",
    demo: "https://openprocessing.org/sketch/2861797",
  },
  {
    id: 2,
    title: "AP Autos Website",
    year: "January 2026",
    description: "Web Development project for a local car dealership.",
    fullDescription:
      "A fully custom website built for AP Autos, a local car dealership. The site features a clean, modern design with responsive layouts for mobile and desktop. Key functionalities include a inventory display, contact forms, and integration with headless CMS. Built using HTML, CSS, and JavaScript.",
    tags: ["Web", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/APAutos_fnny2h.png",
    github: "https://github.com/benellis/data-sonification",
    demo: "https://apautos.org",
  },
  {
    id: 3,
    title: "Coffee Importers Visualization",
    year: "December 2025",
    description: "Coffee Imports by Countries vs Top 3 Producers Data Visualization. ",
    fullDescription:
      "A data visualization project created throughout my Mathematical Practice module. Using python's matplotlib and pandas libraries, I visualized coffee import data from various countries against the top three coffee producers: Brazil, Vietnam, and Colombia.",
    tags: ["Python", "DataViz"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/CoffeeGraph_eyfk2u.png",
    github: "https://github.com/ellisben/CoffeeImportersVisualization",
    demo: "https://benellis.dev/shaders",
  },
  {
    id: 4,
    title: "Horse Racing API Experimentation",
    year: "May 2025",
    description: "Data Visualization of Horse Racing Data using CSS & JS.",
    fullDescription:
      "An experimental project created during my Backend Development module. It involved fetching horse racing data from a public API and visualizing it using JavaScript and CSS. The project explores different ways to represent data visually, focusing on clarity.",
    tags: ["Web", "DataViz", "Backend"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/HorseRacing_f0imh0.png",
    github: "https://github.com/ellisben/HorseRacingAPIExperimentation",
    demo: "https://openprocessing.org/sketch/2590885",
  },
  {
    id: 5,
    title: "Koi Pond",
    year: "March 2025",
    description: "Perlin Noise Koi Fish & Lilypad's with interactive food.",
    fullDescription:
      "An experimental project created during my Generative Art module. It makes use of Perlin Noise to simulate the natural movement of Koi fish in a pond. Users can interact by adding food to the pond, influencing the fish behavior. Furthermore, timers, physics engines and attractors are employed to create a dynamic and engaging visual experience.",
    tags: ["Generative", "P5.js", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/KoiPond_ufexhd.png",
    github: "https://github.com/benellis/data-sonification",
    demo: "https://openprocessing.org/sketch/2590885",
  },
  {
    id: 6,
    title: "Mathematical Mountain Range",
    year: "March 2025",
    description: "Noise Mountains & Mist Waves",
    fullDescription:
      "An exploration of procedural landscape generation using Perlin noise and mathematical functions. This project generates a series of mountain ranges with varying heights and colours, simulating natural terrain features. The addition of oscillating mist waves enhances the atmospheric depth, creating a fun visual experience.",
    tags: ["Generative", "P5.js", "Data Viz"],
    type: "image",
   image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/NoiseMountains_dohp7s.png",
    github: "https://github.com/benellis/data-sonification",
    demo: "https://openprocessing.org/sketch/2593617",
  },
  {
    id: 7,
    title: "Back Alley Scene",
    year: "February 2025",
    description: "A simple, moving scene of a back alley with a rat and flies.",
    fullDescription:
      "Making use of perlin noise for random movement in the flies, and simple movement functions. This project was created at the start of my Generative Art module, exploring simple animations and scene composition using P5.js.",
    tags: ["Generative", "P5.js"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/BackAlley_nuurpw.png",
    github: "https://github.com/benellis/recursive-trees",
    demo: "https://openprocessing.org/sketch/2590944",
  },
  {
    id: 8,
    title: "Perlin Coral Reef",
    year: "February 2025",
    description: "Multiple random walkers with lerp colour to generate coral-like structures.",
    fullDescription:
      "A simple generative art piece that simulates coral growth using a random walker algorithm combined with Perlin noise for organic movement. Lerp color allows for smooth transitions between colors, adding to the coral reef look.",
    tags: ["Generative", "P5.js", "Data Viz"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393450/PerlinCoral_nnkqh7.png",
    github: "https://github.com/benellis/data-sonification",
    demo: "https://openprocessing.org/sketch/2550896",
  },
];

// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentFilter = "all";
let currentSort = "newest";
let currentCarouselIndex = 0;

// ==========================================
// NAVIGATION ACTIVE STATE
// ==========================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "home.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Add to your existing scripts.js file

// ==========================================
// EXPANDABLE CAROUSEL - UPDATED
// ==========================================
function toggleContent(element) {
  const contentDiv = element.nextElementSibling;
  const isExpanded = contentDiv && contentDiv.classList.contains('expanded');
  
  // If clicking on carousel items, only close others in same carousel
  const currentItem = element.closest('.carousel-item');
  if (currentItem) {
    const allContent = currentItem.querySelectorAll('.carousel-content-text');
    const allMeta = currentItem.querySelectorAll('.carousel-meta');
    
    allContent.forEach(content => content.classList.remove('expanded'));
    allMeta.forEach(meta => meta.classList.remove('expanded'));
    
    // Toggle current item if not already expanded
    if (!isExpanded && contentDiv) {
      contentDiv.classList.add('expanded');
      element.classList.add('expanded');
    }
  } else {
    // For standalone items like Current Focus, simple toggle
    if (isExpanded) {
      contentDiv.classList.remove('expanded');
      element.classList.remove('expanded');
    } else {
      contentDiv.classList.add('expanded');
      element.classList.add('expanded');
    }
  }
}

function initCarousel() {
  const prevBtn = document.querySelector('[data-direction="prev"]');
  const nextBtn = document.querySelector('[data-direction="next"]');
  const items = document.querySelectorAll(".carousel-item");

  if (!prevBtn || !nextBtn || items.length === 0) return;

  function updateCarousel() {
    const track = document.querySelector(".carousel-track");
    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentCarouselIndex);
    });

    // Adjust the transform property to shift the carousel
    if (window.innerWidth <= 768) {
      // On mobile, ensure proper width calculation
      const trackWidth = track.parentElement.offsetWidth;
      track.style.transform = `translateX(-${currentCarouselIndex * trackWidth}px)`;
    } else {
      const itemWidth = items[0].offsetWidth;
      track.style.transform = `translateX(-${currentCarouselIndex * itemWidth}px)`;
    }

    prevBtn.disabled = currentCarouselIndex === 0;
    nextBtn.disabled = currentCarouselIndex === items.length - 1;

    // Close all expanded content when changing slides
    const allContent = document.querySelectorAll('.carousel-content-text');
    const allMeta = document.querySelectorAll('.carousel-meta');
    allContent.forEach(content => content.classList.remove('expanded'));
    allMeta.forEach(meta => meta.classList.remove('expanded'));
  }

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentCarouselIndex > 0) {
      currentCarouselIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentCarouselIndex < items.length - 1) {
      currentCarouselIndex++;
      updateCarousel();
    }
  });

  // Re-calculate on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateCarousel();
    }, 250);
  });

  updateCarousel();
}
// ==========================================
// FEATURED PROJECTS (HOME)
// ==========================================
function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects-container");
  if (!container) return;

  const featured = projects.slice(0, 2);

  container.innerHTML = featured
    .map(
      (project) => `
    <article class="featured-project-card" data-project-id="${project.id}">
      <div class="featured-project-image">
        ${
          project.type === "image"
            ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
            : '<div style="background: rgba(0,0,0,0.2); width: 100%; height: 100%;"></div>'
        }
      </div>
      <h3 class="featured-project-title">${project.title}</h3>
      <p class="featured-project-meta">${project.year} — ${project.tags.join(
        ", "
      )}</p>
    </article>
  `
    )
    .join("");

  container.querySelectorAll(".featured-project-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const projectId = parseInt(card.dataset.projectId);
      window.location.href = `work.html?project=${projectId}`;
    });
  });
}

// ==========================================
// PROJECTS GRID (WORK PAGE)
// ==========================================
function getFilteredAndSortedProjects() {
  let filtered =
    currentFilter === "all"
      ? [...projects]
      : projects.filter((p) => p.tags.includes(currentFilter));

  if (currentSort === "oldest") {
    filtered.reverse();
  }

  return filtered;
}

function renderProjectsGrid() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const projectsToRender = getFilteredAndSortedProjects();

  if (projectsToRender.length === 0) {
    grid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: var(--space-2xl);">No projects match the current filter.</p>';
    return;
  }

  grid.innerHTML = projectsToRender
    .map(
      (project) => `
    <article class="project-card" data-project-id="${project.id}">
      <div class="project-header">
        <p class="project-year">${project.year}</p>
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
      </div>
      
      ${
        project.type === "image"
          ? `<div class="project-preview">
             <img src="${project.image}" alt="${project.title}" loading="eager">
           </div>`
          : `<pre class="project-code">${project.code}</pre>`
      }
      
      <div class="project-tags">
        ${project.tags
          .map((tag) => `<span class="project-tag">${tag}</span>`)
          .join("")}
      </div>
    </article>
  `
    )
    .join("");

  grid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = parseInt(card.dataset.projectId);
      const project = projects.find((p) => p.id === projectId);
      if (project) openModal(project);
    });
  });
}

// ==========================================
// FILTERS & SORTING
// ==========================================
function initFilters() {
  const filterTags = document.querySelectorAll(".filter-tag");
  const sortBtns = document.querySelectorAll(".sort-btn");
  filterTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      filterTags.forEach((t) => t.classList.remove("active"));
      tag.classList.add("active");
      currentFilter = tag.dataset.tag;
      renderProjectsGrid();
    });
  });
  sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sortBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentSort = btn.dataset.sort;
      renderProjectsGrid();
    });
  });
}
// ==========================================
// MODAL
// ==========================================
function openModal(project) {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  if (!modal || !modalBody) return;
  modalBody.innerHTML = `
<div class="modal-header">
<p class="modal-year">${project.year}</p>
<h2 class="modal-title" id="modal-title">${project.title}</h2>
<p class="modal-description">${project.fullDescription}</p>
</div>
${
  project.type === "image"
    ? `<div class="modal-preview">
       <img src="${project.image}" alt="${project.title}" loading="lazy">
     </div>`
    : `<pre class="modal-code">${project.code}</pre>`
}

<div class="modal-links">
  <a href="${
    project.github
  }" class="modal-link" target="_blank" rel="noopener">GitHub →</a>
  <a href="${
    project.demo
  }" class="modal-link" target="_blank" rel="noopener">Live Demo →</a>
</div>

<div class="modal-meta">
  <div class="modal-tags">
    ${project.tags
      .map((tag) => `<span class="modal-tag">${tag}</span>`)
      .join("")}
  </div>
</div>
`;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  // Focus management
  modal.querySelector(".modal-close").focus();
}
function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
function initModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  const closeBtn = modal.querySelector(".modal-close");
  const backdrop = modal.querySelector(".modal-backdrop");
  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  // ESC key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

// ==========================================
// HIGHLIGHT SLIDESHOW
// ==========================================
function initHighlightSlideshow() {
  const highlightImage = document.querySelector('.highlight-image');
  if (!highlightImage) return;
  
  const images = highlightImage.querySelectorAll('img');
  if (images.length <= 1) return;
  
  let currentImageIndex = 0;
  
  // Show only the current image
  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }
  
  // Create and insert navigation buttons
  const nav = document.createElement('div');
  nav.className = 'slideshow-nav';
  nav.innerHTML = `
    <button class="slideshow-btn prev" aria-label="Previous image">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    </button>
    <button class="slideshow-btn next" aria-label="Next image">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    </button>
  `;
  highlightImage.appendChild(nav);
  
  // Initialize
  showImage(0);
  
  // Navigation handlers
  const prevBtn = nav.querySelector('.prev');
  const nextBtn = nav.querySelector('.next');
  
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  });
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  if (!hamburger || !navLinks) return;
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking on a link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

// Update the DOMContentLoaded to include initMobileMenu
document.addEventListener("DOMContentLoaded", () => {
  setActiveNavLink();
  initCarousel();
  renderFeaturedProjects();
  renderProjectsGrid();
  initFilters();
  initModal();
  initMobileMenu();
  initHighlightSlideshow();

  // Check for project query parameter and open modal if present
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  if (projectId) {
    const project = projects.find(p => p.id === parseInt(projectId));
    if (project) {
      openModal(project);
    }
  }
});
