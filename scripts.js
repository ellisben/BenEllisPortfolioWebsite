// ==========================================
// PROJECTS DATA
// ==========================================
const projects = [
  {
    id: 1,
    title: "Three.js Car Simulator",
    year: "April 2026",
    description: "A 3D car simulator built using Three.js, featuring custom driving mechanics and Cannon.js physics.",
    fullDescription:
      "Built for my XR Design module, this project is a 3D city driving simulator that utlises Three.js for rendering car and enviroment models and Cannon.js for the physics and driving mechanics. Realistic car controls were implemented, including gradual acceleration and braking and steering sensitivity.",
    tags: ["Web", "Three.js", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1777897110/d4632243-70a7-4afe-9938-b1f641903048.png",
    demo: "https://ellisben.github.io/Three-Car-Sim/",
  },
  {
    id: 2,
    title: "Full-Stack Music Recognition App",
    year: "April 2026",
    description: "A full-stack music recognition app built using the AudD API, JavaScript and Node.js.",
    fullDescription:
      "This music recognition app was built for my Full-Stack module. It allows users to upload audio files/URLs and receive information about the songs in the audio. This included album art, song title, artist and streaming platforms. The frontend was built using vanilla JavaScript, HTML and CSS, while the backend was built using Node.js and Express.",
    tags: ["Full-Stack", "Web", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1777895976/31ee5d44-1636-4c26-a2d8-75bb7f9c5c2c.png",
    demo: "https://youtu.be/hq27lvXRnSU",
  },
  {
    id: 3,
    title: "AI Recipe Extractor",
    year: "April 2026",
    description: "A multi-stage AI project that extracts formatted recipes from short-form content.",
    fullDescription:
      "This project makes use of multiple AI models: A custom fine-tuned DistilBERT model, WhisperX and InstaFoodRoBERTa. A 7 stage pipeline carries out the process of downloading, transcribing, extracting and formatting recipes from short-form content. The final output is a formatted recipe with ingredients and instructions.",
    tags: ["Python", "Backend", "AI"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1777895266/651a4bd8-fa62-4e1c-b96d-dda2990e6247.png",
    demo: "https://youtu.be/gGqq2qLnyVg",
  },
  {
    id: 4,
    title: "Digital Camo Generator",
    year: "March 2026",
    description: "A digital camo generator with 5 colour options, created using P5.js. Built from Gen Grid structure.",
    fullDescription:
      "Using the same stucture as the Gen Grid project, I implemented more rects, and removed the rotating triangles, with co-ordinated colour pallettes and randomly spawning squares, this creates a convincing digital camo effect. With a simple click function to refresh and change the colour of the pattern, this is a nice conclusion to the generative grid experiments.",
    tags: ["P5.js", "Generative", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1774089082/d992bb50-d047-441a-bcb2-73765f943649.png",
    demo: "https://openprocessing.org/sketch/2899176",
  },
  {
    id: 5,
    title: "Gen Grid",
    year: "March 2026",
    description: "A generative P5 project that makes use of noise to rotate traingles randomly on a rect grid.",
    fullDescription:
      "This is a generative project that has been done millions of times by P5 coders, I just wanted to do my own version. It makes use of noise rotation to rotate triangles randomly on the grid. I then intergrated some mouse functions to allow for mouse refresh, then added zoom with the scroll wheel (something I hadn't done before).",
    tags: ["P5.js", "Generative", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1773830717/efc99f4a-939c-4c7a-a332-ffea6a1007dc.png",
    demo: "https://openprocessing.org/sketch/2897650",
  },
  {
    id: 6,
    title: "Confetti",
    year: "March 2026",
    description: "A practice run of experimenting with noise rotation throughout grids, later to be used in the Gen Grid project.",
    fullDescription:
      "As a follow up to a lot of the Generative Grid experiments I have been doing, this time I intergrated random rotation, using noise, to create a confetti-like look. Not much more to say about this one, just a good guideline for further use in other grids.",
    tags: ["P5.js", "Generative"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1773830691/422dbc48-ec4e-4e2a-bb3c-4c4c31723a1f.png",
    demo: "https://openprocessing.org/sketch/2897140",
  },
  {
    id: 7,
    title: "Tangled Worms",
    year: "March 2026",
    description: "A generative P5 project with random walkers built up from a trail of ellipses.",
    fullDescription:
      "This project was inspired by my previous Koi Pond project, where I used random walkers to create a natural, organic movement. I wanted to create a game similar to Snake.io. Throughout that process, when I added the randomness to the header point of the snake class, they randomly tangled up and provided an interesting visual effect, and when accompanied with a vibrant colour pallete, this looked great.",
    tags: ["P5.js", "Generative"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1773830663/0fa298d7-c2db-43f6-807b-3d7a8cc0a71a.png",
    demo: "https://openprocessing.org/sketch/2885632",
  },
  {
    id: 8,
    title: "Colourful Generative Slider",
    year: "February 2026",
    description: "A P5 experimental project, similar to Generative Green but making use of sliders and probability change.",
    fullDescription:
      "Expanding on one my recent generative experiments, I wanted to add some customisation by making use of P5's sliders. Altering the probability variable of the solid blocks with the slider, provides a bigger scope of looks. Like the majority of the P5 sketches I have created throughout february, this is simply a stepping stone to bigger and better projects.",
    tags: ["P5.js", "Generative", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1772021008/d2340d57-5c66-4c2e-bbf2-a3e792be6822.png",
    demo: "https://openprocessing.org/sketch/2880812",
  },
  {
    id: 9,
    title: "The Pavilion Coffee Website",
    year: "February 2026",
    description: "Web development project for a UK based coffee shop.",
    fullDescription:
      "A fully custom website built for The Pavilion Coffee, a Warrington based coffee shop. The site features a single page design with smooth scrolling and responsive layouts for all media. Key functionalities include a menu display, image gallery, contact buttons and a intergrated google map section. Built using HTML, CSS and Javascript.",
    tags: ["Web"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1771606965/fdd624c4-f5a3-4896-9fa6-33da0137b587.png",
    demo: "https://thepavilioncoffee.co.uk",
  },
  {
    id: 10,
    title: "Coloured Cubes",
    year: "February 2026",
    description: "A quick experimental project working with WEBGL",
    fullDescription:
      "Similarly to the generative green piece, this project makes use of for loops and colour palletes, but with the addition of WEBGL to create 3D cubes. I also wanted to start doing some animated pieces, so this is a introduction to that. The cubes rotate on the X and Y axis, with the rotation speed influenced by framecount, creating a interesting visual effect. ",
    tags: ["P5.js", "Web", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1771605987/b5f2709f-669e-4b17-9c21-0c687c8191ce.png",
    demo: "https://openprocessing.org/sketch/2875950",
  },
  {
    id: 11,
    title: "Generative Green",
    year: "February 2026",
    description: "A green generative grid using controlled randomness.",
    fullDescription:
      "The piece makes use of for loops, randomness and lots of rects. It iterates over a structured grid and layers multiple centered squares of varying sizes at each cell. Continuing the generative practice pieces.",
    tags: ["P5.js","Generative"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770940101/Screenshot_2026-02-12_234734_bk14yg.png",
    github: "https://github.com/ellisben/Generative-Green",
    demo: "https://openprocessing.org/sketch/2871218",
  },
  {
    id: 12,
    title: "70s Generative Wallpaper",
    year: "February 2026",
    description: "A simple generative wallpaper inspired by 70s aesthetics.",
    fullDescription:
      "A generative wallpaper created using p5.js, inspired by the 70s aesthetic. It really was just a simple experiment to help start a series of generative pieces I wanted to do.",
    tags: ["P5.js","Generative"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770569998/70s_fnsamf.png",
    github: "https://github.com/ellisben/70sGenerativeWallpaper/tree/main/70sGenerative",
    demo: "https://openprocessing.org/sketch/2867160",
  },
  {
    id: 13,
    title: "Pastel Balloons",
    year: "February 2026",
    description: "A fun web project with poppable, pastel-colored balloons floating across the screen.",
    fullDescription:
      "A playful web project that features pastel-colored p5 shapes that float across the screen using a noise function for smooth movement. Users can interact by clicking on the balloons to 'pop' them, triggering a popping sound effect.",
    tags: ["P5.js", "Interaction"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/BalloonProject_mpps69.png",
    github: "https://github.com/ellisben/PastelBalloon/tree/main/PastelBalloons",
    demo: "https://openprocessing.org/sketch/2861797",
  },
  {
    id: 14,
    title: "AP Autos Website",
    year: "January 2026",
    description: "Web Development project for a local car dealership.",
    fullDescription:
      "A fully custom website built for AP Autos, a local car dealership. The site features a clean, modern design with responsive layouts for mobile and desktop. Key functionalities include a inventory display, contact forms, and integration with headless CMS. Built using HTML, CSS, and JavaScript.",
    tags: ["Web"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/APAutos_fnny2h.png",
    github: "https://github.com/benellis/data-sonification",
    demo: "https://apautos.org",
  },
  {
    id: 15,
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
    id: 16,
    title: "Horse Racing API Experimentation",
    year: "May 2025",
    description: "Data Visualization of Horse Racing Data using CSS & JS.",
    fullDescription:
      "An experimental project created during my Backend Development module. It involved fetching horse racing data from a public API and visualizing it using JavaScript and CSS. The project explores different ways to represent data visually, focusing on clarity.",
    tags: ["Web", "DataViz", "Full-Stack"],
    type: "image",
    image: "https://res.cloudinary.com/dpmfwmz9e/image/upload/v1770393449/HorseRacing_f0imh0.png",
    github: "https://github.com/ellisben/HorseRacingAPIExperimentation",
    demo: "https://openprocessing.org/sketch/2590885",
  },
  {
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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

// ==========================================
// FEATURED PROJECTS (HOME)
// ==========================================
function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects-container");
  if (!container) return;

  const featured = projects.slice(0, 3);

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
      window.location.href = `/work/?project=${projectId}`;
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
  ${project.github ? `<a href="${project.github}" class="modal-link" target="_blank" rel="noopener">GitHub →</a>` : ''}
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
  renderFeaturedProjects();
  renderProjectsGrid();
  initFilters();
  initModal();
  initMobileMenu();

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