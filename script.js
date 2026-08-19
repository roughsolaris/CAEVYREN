/* =========================================================
   CAEVYREN
   Creative Technology Portfolio
   Main JavaScript
   ========================================================= */


/* =========================================================
   01 — PROJECT DATA
   =========================================================

   THIS is where you will eventually add your real projects.

   You do NOT need to touch the HTML when adding projects.

   Example:

   {
       title: "Restaurant Concept",
       type: "Restaurant",
       style: "Minimal",
       description: "A refined restaurant experience.",
       image: "images/restaurant.jpg",
       previewImages: [
           "images/restaurant-home.jpg",
           "images/restaurant-menu.jpg",
           "images/restaurant-about.jpg"
       ],
       link: "https://yourwebsite.vercel.app"
   }

   For now this is EMPTY because you don't have
   portfolio projects to display yet.
   ========================================================= */

const projects = [

    /*
    =========================================================
    HOW TO ADD A PROJECT LATER
    =========================================================

    Copy this object and change the information.

    {
        title: "Your Restaurant",
        type: "Restaurant",
        style: "Minimal",

        description:
            "A refined restaurant website designed around
             clarity, atmosphere and elegant interaction.",

        image:
            "images/projects/restaurant-01/cover.jpg",

        previewImages: [
            "images/projects/restaurant-01/home.jpg",
            "images/projects/restaurant-01/menu.jpg",
            "images/projects/restaurant-01/about.jpg"
        ],

        link:
            "https://your-demo.vercel.app"
    }

    =========================================================
    */

];


/* =========================================================
   02 — WEBSITE CATEGORY DATA
   =========================================================

   These are the categories that appear even when you
   have no projects yet.

   You can add more categories here later.

   IMPORTANT:
   "type" must match the type used in your projects.
   ========================================================= */

 const websiteStyles = [

    {
        name: "Minimal",

        label: "01",

        description:
            "Quietly refined digital experiences focused on clarity, elegance and simplicity.",

        categories: [
            "Restaurant",
            "E-commerce",
            "Business",
            "Portfolio",
            "Landing Page"
        ],

        previews: {

            "Restaurant": [
                "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
            ],

            "E-commerce": [
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
            ],

            "Business": [
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
            ],

            "Portfolio": [
                "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85"
            ],

            "Landing Page": [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85"
            ]

        }
    },


    {
        name: "Premium",

        label: "02",

        description:
            "High-impact experiences built around atmosphere, storytelling, motion and visual identity.",

        categories: [
            "Restaurant",
            "E-commerce",
            "Business",
            "Portfolio",
            "Landing Page"
        ],

        previews: {

            "Restaurant": [
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85"
            ],

            "E-commerce": [
                "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85"
            ],

            "Business": [
                "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
            ],

            "Portfolio": [
                "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85"
            ],

            "Landing Page": [
                "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85"
            ]

        }
    }

];


/* =========================================================
   03 — FUTURE CATEGORIES
   ========================================================= */

const futureCategories = [

    {
        name: "Applications",
        status: "COMING SOON",
        description:
            "Digital applications designed around useful ideas and thoughtful experiences."
    },


    {
        name: "Software",
        status: "IN DEVELOPMENT",
        description:
            "Tools, systems and software experiments built to solve real problems."
    },


    {
        name: "Games",
        status: "FUTURE PROJECTS",
        description:
            "Interactive worlds and experimental games where technology meets imagination."
    },


    {
        name: "Digital Design",
        status: "COMING SOON",
        description:
            "Visual systems, interfaces and creative direction for digital products."
    }

];


/* =========================================================
   04 — DOM ELEMENTS
   ========================================================= */

const websiteShowcase =
    document.getElementById(
        "websiteShowcase"
    );


const futureCategoriesContainer =
    document.getElementById(
        "futureCategories"
    );


const particleField =
    document.getElementById(
        "particleField"
    );


const pageLoader =
    document.getElementById(
        "pageLoader"
    );


const currentYear =
    document.getElementById(
        "currentYear"
    );


/* =========================================================
   05 — CURRENT YEAR
   ========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   06 — CREATE WEBSITE SHOWCASE
   ========================================================= */

function renderWebsiteShowcase() {

    if (!websiteShowcase) {
        return;
    }


    websiteShowcase.innerHTML = "";


    websiteStyles.forEach(
        (style, styleIndex) => {

            const category =
                document.createElement(
                    "div"
                );


            category.className =
                "website-category";


            category.innerHTML = `

                <div class="website-category-header">

                    <div>

                        <span class="website-category-label">
                            ${style.label} / WEBSITE
                        </span>

                        <h3 class="website-category-title">
                            ${style.name}
                        </h3>

                    </div>


                    <p class="website-category-description">
                        ${style.description}
                    </p>

                </div>


                <div class="website-type-grid"></div>

            `;


            const grid =
                category.querySelector(
                    ".website-type-grid"
                );


            style.categories.forEach(
                (categoryName, categoryIndex) => {

                    const card =
                        createWebsiteCategoryCard(
                            categoryName,
                            style.name,
                            styleIndex,
                            categoryIndex
                        );


                    grid.appendChild(card);

                }
            );


            websiteShowcase.appendChild(
                category
            );

        }
    );

}


/* =========================================================
   07 — CREATE CATEGORY CARD
   ========================================================= */

   
  function createWebsiteCategoryCard(
    categoryName,
    styleName,
    styleIndex,
    categoryIndex
) {

    const card =
        document.createElement("article");


    card.className =
        "website-type-card";


    const number =
        String(categoryIndex + 1)
            .padStart(2, "0");


    const matchingProjects =
        projects.filter(
            project => {

                return (
                    project.type === categoryName &&
                    project.style === styleName
                );

            }
        );


    const projectCount =
        matchingProjects.length;


    let statusText =
        "EXPLORE";


    if (projectCount === 0) {

        statusText =
            "COMING SOON";

    }


    /*
    =========================================================
    PREVIEW IMAGES
    =========================================================
    */

    const styleData =
        websiteStyles.find(
            style =>
                style.name === styleName
        );


    const previewImages =
        styleData &&
        styleData.previews &&
        styleData.previews[categoryName]
            ? styleData.previews[categoryName]
            : [];


    /*
    =========================================================
    CREATE IMAGE PREVIEW
    =========================================================
    */

    let previewHTML = "";


    if (previewImages.length) {

        previewHTML = `

            <div class="website-card-preview">

                <div class="website-card-browser-bar">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>


                <div class="website-card-slides">

                    ${previewImages
                        .map(
                            (image, imageIndex) => `

                                <img
                                    src="${image}"
                                    alt="${styleName} ${categoryName} website preview ${imageIndex + 1}"
                                    class="website-card-slide ${
                                        imageIndex === 0
                                            ? "active"
                                            : ""
                                    }"
                                    loading="lazy"
                                >

                            `
                        )
                        .join("")}

                </div>


                <div class="website-card-preview-overlay">

                    <span>
                        VIEW CONCEPT
                    </span>

                    <span>
                        ↗
                    </span>

                </div>

            </div>

        `;

    }


    /*
    =========================================================
    CARD HTML
    =========================================================
    */

    card.innerHTML = `

        ${previewHTML}


        <div class="website-type-card-content">

            <div class="website-type-card-top">

                <span class="website-type-number">
                    ${number} / ${styleName.toUpperCase()}
                </span>


                <span class="website-type-status">
                    ${statusText}
                </span>

            </div>


            <div class="website-type-card-main">

                <h4>
                    ${categoryName}
                </h4>


                <p>
                    ${projectCount > 0
                        ? `${projectCount} project${projectCount > 1 ? "s" : ""}`
                        : "Concept preview"
                    }
                </p>

            </div>


            <div class="website-type-card-footer">

                <span>
                    ${styleName} ${categoryName}
                </span>


                <span class="website-type-arrow">
                    ↗
                </span>

            </div>

        </div>

    `;


    /*
    =========================================================
    IMAGE SLIDER
    =========================================================
    */

    const slides =
        card.querySelectorAll(
            ".website-card-slide"
        );


    let currentSlide = 0;


    let slideTimer = null;


    function showSlide(index) {

        slides.forEach(
            (slide, slideIndex) => {

                slide.classList.toggle(
                    "active",
                    slideIndex === index
                );

            }
        );

    }


    function startPreviewAnimation() {

        if (slides.length <= 1) {
            return;
        }


        if (slideTimer) {
            clearInterval(slideTimer);
        }


        currentSlide = 0;


        showSlide(currentSlide);


        slideTimer =
            setInterval(
                () => {

                    currentSlide++;

                    if (
                        currentSlide >=
                        slides.length
                    ) {

                        currentSlide = 0;

                    }


                    showSlide(
                        currentSlide
                    );

                },
                1300
            );

    }


    function stopPreviewAnimation() {

        if (slideTimer) {

            clearInterval(
                slideTimer
            );

            slideTimer = null;

        }


        currentSlide = 0;


        showSlide(0);

    }


    /*
    =========================================================
    HOVER
    =========================================================
    */

    card.addEventListener(
        "mouseenter",
        () => {

            startPreviewAnimation();

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            stopPreviewAnimation();

            card.style.transform = "";

        }
    );


    /*
    =========================================================
    3D MOUSE MOVEMENT
    =========================================================
    */

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                ((y / rect.height) - 0.5)
                * -4;


            const rotateY =
                ((x / rect.width) - 0.5)
                * 4;


            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;

        }
    );


    /*
    =========================================================
    CLICK → PROJECT BROWSER
    =========================================================
    */

    card.addEventListener(
        "click",
        () => {

            openCategory(
                categoryName,
                styleName
            );

        }
    );


    return card;

}


/* =========================================================
   08 — CREATE FUTURE CATEGORIES
   ========================================================= */

function renderFutureCategories() {

    if (!futureCategoriesContainer) {
        return;
    }


    futureCategoriesContainer.innerHTML = "";


    futureCategories.forEach(
        (category, index) => {

            const item =
                document.createElement(
                    "article"
                );


            item.className =
                "future-capability reveal";


            const number =
                String(
                    index + 1
                ).padStart(
                    2,
                    "0"
                );


            item.innerHTML = `

                <span class="capability-number">
                    ${number}
                </span>


                <div class="capability-main">

                    <div>

                        <h3>
                            ${category.name}
                        </h3>

                        <span class="future-status">
                            ${category.status}
                        </span>

                    </div>


                    <p>
                        ${category.description}
                    </p>

                </div>


                <span class="capability-arrow">
                    →
                </span>

            `;


            futureCategoriesContainer.appendChild(
                item
            );

        }
    );

}

/* =========================================================
   09 — PROJECT BROWSER
   ========================================================= */

const projectBrowser =
    document.getElementById(
        "projectBrowser"
    );


const projectBrowserBack =
    document.getElementById(
        "projectBrowserBack"
    );


const projectBrowserGrid =
    document.getElementById(
        "projectBrowserGrid"
    );


const projectBrowserStyle =
    document.getElementById(
        "projectBrowserStyle"
    );


const projectBrowserType =
    document.getElementById(
        "projectBrowserType"
    );


const projectBrowserEyebrow =
    document.getElementById(
        "projectBrowserEyebrow"
    );


const projectBrowserTitle =
    document.getElementById(
        "projectBrowserTitle"
    );


const projectBrowserDescription =
    document.getElementById(
        "projectBrowserDescription"
    );


/* =========================================================
   10 — OPEN CATEGORY
   ========================================================= */

function openCategory(
    categoryName,
    styleName
) {

    if (!projectBrowser) {
        return;
    }


    const matchingProjects =
        projects.filter(
            project => {

                return (
                    project.type === categoryName &&
                    project.style === styleName
                );

            }
        );


    projectBrowserStyle.textContent =
        styleName.toUpperCase();


    projectBrowserType.textContent =
        categoryName.toUpperCase();


    projectBrowserEyebrow.textContent =
        `${styleName.toUpperCase()} / ${categoryName.toUpperCase()}`;


    projectBrowserTitle.textContent =
        categoryName;


    projectBrowserDescription.textContent =
        `Explore ${styleName.toLowerCase()} ${categoryName.toLowerCase()} experiences created by CAEVYREN.`;


    renderBrowserProjects(
        matchingProjects,
        styleName,
        categoryName
    );


    projectBrowser.classList.add(
        "is-open"
    );


    projectBrowser.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    const panel =
        projectBrowser.querySelector(
            ".project-browser-panel"
        );


    if (panel) {

        panel.scrollTop = 0;

    }

}


/* =========================================================
   11 — RENDER PROJECTS
   ========================================================= */

function renderBrowserProjects(
    matchingProjects,
    styleName,
    categoryName
) {

    if (!projectBrowserGrid) {
        return;
    }


    projectBrowserGrid.innerHTML = "";


    if (
        matchingProjects.length === 0
    ) {

        projectBrowserGrid.innerHTML = `

            <div class="browser-empty">

                <div class="browser-empty-inner">

                    <div class="browser-empty-mark">
                        C
                    </div>


                    <h3>
                        ${categoryName}
                        experiences are coming.
                    </h3>


                    <p>
                        CAEVYREN is currently building
                        its ${styleName.toLowerCase()}
                        ${categoryName.toLowerCase()}
                        collection.
                        Check back soon for new work.
                    </p>

                </div>

            </div>

        `;

        return;
    }


    matchingProjects.forEach(
        (project, index) => {

            const card =
                createBrowserProjectCard(
                    project,
                    index
                );


            projectBrowserGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   12 — CREATE PROJECT CARD
   ========================================================= */
function createBrowserProjectCard(
    project,
    index
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "browser-project-card";


    const number =
        String(
            index + 1
        ).padStart(
            2,
            "0"
        );


    const imageHTML =
        project.image
            ? `
                <img
                    class="browser-project-preview-image"
                    src="${project.image}"
                    alt="${project.title} website preview"
                    loading="lazy"
                >
            `
            : `

                <div class="browser-project-placeholder">

                    <div class="browser-project-placeholder-content">

                        <div class="browser-project-placeholder-logo">
                            CAEVYREN
                        </div>

                        <div class="browser-project-placeholder-label">
                            WEBSITE PREVIEW
                        </div>

                    </div>

                </div>

            `;


    card.innerHTML = `

        <div class="browser-project-preview">

            ${imageHTML}


            <!-- GLASS VIEW CONCEPT BUTTON -->

            ${
                project.link
                    ? `
                        <a
                            href="${project.link}"
                            class="browser-project-demo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <span>
                                VIEW CONCEPT
                            </span>

                            <span class="browser-project-demo-arrow">
                                ↗
                            </span>

                        </a>
                    `
                    : ""
            }

        </div>


        <div class="browser-project-info">

            <div class="browser-project-topline">

                <span class="browser-project-type">
                    ${project.type}
                </span>


                <span class="browser-project-status">
                    PROJECT ${number}
                </span>

            </div>


            <h3 class="browser-project-title">
                ${project.title}
            </h3>


            <p class="browser-project-description">
                ${project.description}
            </p>


            <div class="browser-project-actions">

                <span class="browser-project-status">
                    ${project.style}
                </span>


                ${
                    project.link
                        ? `
                            <span class="browser-project-status">
                                LIVE WEBSITE
                            </span>
                        `
                        : `
                            <span class="browser-project-status">
                                LINK COMING SOON
                            </span>
                        `
                }

            </div>

        </div>

    `;


    /* =====================================================
       IMAGE / PREVIEW 3D HOVER
       ===================================================== */

    const preview =
        card.querySelector(
            ".browser-project-preview"
        );


    if (preview) {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5)
                    * -2;


                const rotateY =
                    ((x / rect.width) - 0.5)
                    * 2;


                preview.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                preview.style.transform =
                    "";

            }
        );

    }


    return card;

}


/* =========================================================
   13 — CLOSE PROJECT BROWSER
   ========================================================= */

function closeProjectBrowser() {

    if (!projectBrowser) {
        return;
    }


    projectBrowser.classList.remove(
        "is-open"
    );


    projectBrowser.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   14 — BACK BUTTON
   ========================================================= */

if (projectBrowserBack) {

    projectBrowserBack.addEventListener(
        "click",
        closeProjectBrowser
    );

}


/* =========================================================
   15 — BACKDROP CLICK
   ========================================================= */

if (projectBrowser) {

    const backdrop =
        projectBrowser.querySelector(
            ".project-browser-backdrop"
        );


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeProjectBrowser
        );

    }

}


/* =========================================================
   16 — ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectBrowser &&
            projectBrowser.classList.contains(
                "is-open"
            )
        ) {

            closeProjectBrowser();

        }

    }
);


/* =========================================================
   17 — FLOATING PARTICLES
   ========================================================= */

function createParticles() {

    if (!particleField) {
        return;
    }


    const particleCount =
        window.innerWidth < 700
            ? 22
            : 38;


    particleField.innerHTML = "";


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "particle";


        const size =
            Math.random() * 3 + 1;


        const left =
            Math.random() * 100;


        const duration =
            Math.random() * 18 + 14;


        const delay =
            Math.random() * -25;


        const drift =
            `${(Math.random() - 0.5) * 180}px`;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${left}%`;


        particle.style.bottom =
            `${Math.random() * -30}%`;


        particle.style.setProperty(
            "--duration",
            `${duration}s`
        );


        particle.style.setProperty(
            "--delay",
            `${delay}s`
        );


        particle.style.setProperty(
            "--drift",
            drift
        );


        particleField.appendChild(
            particle
        );

    }

}


/* =========================================================
   18 — SCROLL REVEAL
   ========================================================= */

function initializeRevealAnimations() {

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            (
                entries,
                observerInstance
            ) => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target.classList.add(
                            "visible"
                        );


                        observerInstance.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   19 — NAVBAR SCROLL EFFECT
   ========================================================= */

function initializeNavbar() {

    const navbar =
        document.querySelector(
            ".navbar"
        );


    if (!navbar) {
        return;
    }


    const updateNavbar =
        () => {

            if (
                window.scrollY > 40
            ) {

                navbar.style.background =
                    "rgba(4, 16, 23, 0.78)";


                navbar.style.borderColor =
                    "rgba(145, 218, 235, 0.18)";

            } else {

                navbar.style.background =
                    "rgba(4, 16, 23, 0.46)";


                navbar.style.borderColor =
                    "rgba(145, 218, 235, 0.13)";

            }

        };


    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );


    updateNavbar();

}


/* =========================================================
   20 — SMOOTH ANCHOR NAVIGATION
   ========================================================= */

function initializeSmoothLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView(
                        {
                            behavior:
                                "smooth",

                            block:
                                "start"
                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   21 — CURSOR GLOW
   ========================================================= */

function initializeCursorGlow() {

    if (
        window.matchMedia(
            "(hover: none)"
        ).matches
    ) {

        return;

    }


    const glow =
        document.createElement(
            "div"
        );


    glow.className =
        "cursor-glow";


    glow.style.position =
        "fixed";


    glow.style.width =
        "180px";


    glow.style.height =
        "180px";


    glow.style.borderRadius =
        "50%";


    glow.style.pointerEvents =
        "none";


    glow.style.zIndex =
        "9990";


    glow.style.left =
        "0";


    glow.style.top =
        "0";


    glow.style.opacity =
        "0";


    glow.style.background =
        "radial-gradient(circle, rgba(104, 208, 231, 0.08), transparent 68%)";


    glow.style.filter =
        "blur(8px)";


    glow.style.transform =
        "translate(-50%, -50%)";


    glow.style.transition =
        "opacity 0.3s ease";


    document.body.appendChild(
        glow
    );


    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;


    window.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            glow.style.opacity =
                "1";

        },
        {
            passive: true
        }
    );


    window.addEventListener(
        "mouseleave",
        () => {

            glow.style.opacity =
                "0";

        }
    );


    function animateGlow() {

        glowX +=
            (mouseX - glowX)
            * 0.08;


        glowY +=
            (mouseY - glowY)
            * 0.08;


        glow.style.left =
            `${glowX}px`;


        glow.style.top =
            `${glowY}px`;


        requestAnimationFrame(
            animateGlow
        );

    }


    animateGlow();

}


/* =========================================================
   22 — INITIALIZE EVERYTHING
   ========================================================= */

function initializeCAEVYREN() {

    renderWebsiteShowcase();

    renderFutureCategories();

    createParticles();

    initializeRevealAnimations();

    initializeNavbar();

    initializeSmoothLinks();

    initializeCursorGlow();

}


/* =========================================================
   23 — PAGE LOADER
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        initializeCAEVYREN();


        setTimeout(
            () => {

                if (pageLoader) {

                    pageLoader.classList.add(
                        "is-hidden"
                    );

                }

            },
            700
        );

    }
);


/* =========================================================
   24 — HANDLE RESIZE
   ========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {

                    createParticles();

                },
                250
            );

    }
);
/* =========================================================
   CAEVYREN PROJECT DETAIL VIEWER
   ========================================================= */

const projectDetail =
    document.getElementById("projectDetail");

const projectDetailBack =
    document.getElementById("projectDetailBack");

const projectDetailBrand =
    document.getElementById("projectDetailBrand");

const projectDetailNumber =
    document.getElementById("projectDetailNumber");

const projectDetailEyebrow =
    document.getElementById("projectDetailEyebrow");

const projectDetailTitle =
    document.getElementById("projectDetailTitle");

const projectDetailDescription =
    document.getElementById("projectDetailDescription");

const projectDetailHero =
    document.getElementById("projectDetailHero");

const projectDetailMeta =
    document.getElementById("projectDetailMeta");

const projectDetailPages =
    document.getElementById("projectDetailPages");

const projectDetailDemo =
    document.getElementById("projectDetailDemo");


/* =========================================================
   OPEN PROJECT DETAIL
   ========================================================= */

function openProjectDetail(project, index) {

    if (!projectDetail) {
        return;
    }

    if (projectBrowser) {
        projectBrowser.classList.remove("is-open");

        projectBrowser.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    projectDetailBrand.textContent =
        "CAEVYREN";


    projectDetailNumber.textContent =
        `PROJECT ${String(index + 1).padStart(2, "0")}`;


    projectDetailEyebrow.textContent =
        `${project.style.toUpperCase()} / ${project.type.toUpperCase()}`;


    projectDetailTitle.textContent =
        project.title;


    projectDetailDescription.textContent =
        project.description;


    /* HERO */

    if (project.image) {

        projectDetailHero.innerHTML = `
            <img
                src="${project.image}"
                alt="${project.title} website preview"
            >
        `;

    } else {

        projectDetailHero.innerHTML = `
            <div class="project-detail-empty">

                <div class="project-detail-empty-inner">

                    <div class="project-detail-empty-mark">
                        C
                    </div>

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        Project preview coming soon.
                    </p>

                </div>

            </div>
        `;

    }


    /* META */

    projectDetailMeta.innerHTML = `
        <div class="project-detail-meta-item">

            <span>
                TYPE
            </span>

            <strong>
                ${project.type}
            </strong>

        </div>


        <div class="project-detail-meta-item">

            <span>
                STYLE
            </span>

            <strong>
                ${project.style}
            </strong>

        </div>


        <div class="project-detail-meta-item">

            <span>
                STATUS
            </span>

            <strong>
                ${project.link ? "LIVE" : "IN DEVELOPMENT"}
            </strong>

        </div>
    `;


    /* PAGE PREVIEWS */

    renderProjectDetailPages(
        project.previewImages || []
    );


    /* LIVE DEMO */

    if (project.link) {

        projectDetailDemo.innerHTML = `

            <span class="project-detail-demo-label">
                LIVE EXPERIENCE
            </span>

            <h3>
                Visit the website.
            </h3>

            <a
                href="${project.link}"
                class="project-detail-demo-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    OPEN LIVE DEMO
                </span>

                <span>
                    ↗
                </span>
            </a>

        `;

    } else {

        projectDetailDemo.innerHTML = `

            <span class="project-detail-demo-label">
                PROJECT STATUS
            </span>

            <h3>
                More to come.
            </h3>

            <span class="project-detail-demo-button">
                IN DEVELOPMENT
            </span>

        `;

    }


    projectDetail.classList.add(
        "is-open"
    );


    projectDetail.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    const panel =
        projectDetail.querySelector(
            ".project-detail-panel"
        );


    if (panel) {
        panel.scrollTop = 0;
    }

}


/* =========================================================
   PROJECT DETAIL PAGE PREVIEWS
   ========================================================= */

function renderProjectDetailPages(
    previewImages
) {

    if (!projectDetailPages) {
        return;
    }


    if (!previewImages.length) {

        projectDetailPages.innerHTML = `
            <div class="project-detail-section-heading">

                <span>
                    PREVIEW
                </span>

                <h3>
                    Website pages.
                </h3>

            </div>

            <div class="project-detail-page-grid">

                <div class="project-detail-page">

                    <div class="project-detail-page-empty">
                        <span>
                            PREVIEW COMING SOON
                        </span>
                    </div>

                </div>

            </div>
        `;

        return;
    }


    const pageNames = [
        "Homepage",
        "Menu / Products",
        "About",
        "Contact",
        "Additional Page"
    ];


    const cards = previewImages
        .map(
            (image, index) => {

                return `

                    <article class="project-detail-page">

                        <div class="project-detail-page-image">

                            <img
                                src="${image}"
                                alt="${pageNames[index] || "Website page"}"
                                loading="lazy"
                            >

                        </div>


                        <div class="project-detail-page-info">

                            <span>
                                PAGE ${String(index + 1).padStart(2, "0")}
                            </span>

                            <h4>
                                ${pageNames[index] || "Website Page"}
                            </h4>

                        </div>

                    </article>

                `;

            }
        )
        .join("");


    projectDetailPages.innerHTML = `

        <div class="project-detail-section-heading">

            <span>
                PROJECT PREVIEW
            </span>

            <h3>
                Website pages.
            </h3>

        </div>


        <div class="project-detail-page-grid">

            ${cards}

        </div>

    `;

}


/* =========================================================
   CLOSE PROJECT DETAIL
   ========================================================= */

function closeProjectDetail() {

    if (!projectDetail) {
        return;
    }


    projectDetail.classList.remove(
        "is-open"
    );


    projectDetail.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   PROJECT CARD → DETAIL
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const demoButton =
            event.target.closest(
                ".browser-project-demo"
            );


        if (demoButton) {
            return;
        }


        const card =
            event.target.closest(
                ".browser-project-card"
            );


        if (!card) {
            return;
        }


        const cards =
            Array.from(
                document.querySelectorAll(
                    ".browser-project-card"
                )
            );


        const index =
            cards.indexOf(card);


        if (index === -1) {
            return;
        }


        const browserTitle =
            projectBrowserTitle
                ? projectBrowserTitle.textContent
                : "";


        const browserStyle =
            projectBrowserStyle
                ? projectBrowserStyle.textContent
                : "";


        const browserType =
            projectBrowserType
                ? projectBrowserType.textContent
                : "";


        const project =
            projects.find(
                item =>
                    item.title ===
                    card.querySelector(
                        ".browser-project-title"
                    )?.textContent
            );


        if (!project) {
            return;
        }


        openProjectDetail(
            project,
            index
        );

    }
);


/* =========================================================
   BACK BUTTON
   ========================================================= */

if (projectDetailBack) {

    projectDetailBack.addEventListener(
        "click",
        () => {

            closeProjectDetail();

            if (projectBrowser) {

                projectBrowser.classList.add(
                    "is-open"
                );

                projectBrowser.setAttribute(
                    "aria-hidden",
                    "false"
                );

                document.body.style.overflow =
                    "hidden";
            }

        }
    );

}


/* =========================================================
   BACKDROP
   ========================================================= */

if (projectDetail) {

    const backdrop =
        projectDetail.querySelector(
            ".project-detail-backdrop"
        );


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeProjectDetail
        );

    }

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        if (
            projectDetail &&
            projectDetail.classList.contains(
                "is-open"
            )
        ) {

            closeProjectDetail();

            return;

        }


        if (
            projectBrowser &&
            projectBrowser.classList.contains(
                "is-open"
            )
        ) {

            closeProjectBrowser();

        }

    }
);