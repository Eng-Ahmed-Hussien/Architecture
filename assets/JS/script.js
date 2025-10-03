/* ================= Data ================= */
const stepsData = [
  {
    icon: 'fa-comments',
    title: 'Answer questions',
    desc: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    icon: 'fa-mountain-sun',
    title: 'Select a quote',
    desc: 'This card has supporting text below as a natural lead-in to additional content.',
  },
  {
    icon: 'fa-trophy',
    title: 'Get registered',
    desc: 'This is a wider card with supporting text below.',
  },
];

const propertiesData = [
  {
    img: './assets/imgs/post (1).jpeg',
    title: 'Sobha hearthand - Villa',
    price: '$45,546',
    oldPrice: '$55,846',
  },
  {
    img: './assets/imgs/post (2).jpeg',
    title: 'Modern Family Home',
    price: '$40,000',
    oldPrice: '$50,000',
  },
  {
    img: './assets/imgs/post (3).jpeg',
    title: 'Luxury Villa in Rego Park',
    price: '$60,000',
    oldPrice: '$75,000',
  },
  {
    img: './assets/imgs/post (4).jpeg',
    title: 'Highland Villa',
    price: '$45,546',
    oldPrice: '$55,846',
  },
  {
    img: './assets/imgs/post (5).jpeg',
    title: 'Kingfisher Villa',
    price: '$45,546',
    oldPrice: '$55,846',
  },
  {
    img: './assets/imgs/post (6).jpeg',
    title: 'Kingdom Villa',
    price: '$45,546',
    oldPrice: '$55,846',
  },
  {
    img: './assets/imgs/post (7).jpeg',
    title: 'Valla Villa',
    price: '$45,546',
    oldPrice: '$55,846',
  },
  {
    img: './assets/imgs/post (8).jpeg',
    title: 'Vilas De La Costa',
    price: '$45,546',
    oldPrice: '$55,846',
  },
  // {
  //   img: './assets/imgs/post (9).jpeg',
  //   title: 'Casa De La Costa',
  //   price: '$45,546',
  //   oldPrice: '$55,846',
  // },
  // {
  //   img: './assets/imgs/post (10).jpeg',
  //   title: 'Pinewood Villa',
  //   price: '$45,546',
  //   oldPrice: '$55,846',
  // },
];

const clientsData = [
  {
    img: './assets/imgs/myImage.png',
    name: 'Client One',
    comment:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi maiores at illum quae error possimus.',
  },
  {
    img: './assets/imgs/myImage.png',
    name: 'Client Two',
    comment:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi maiores at illum quae error possimus.',
  },
];

const blogData = [
  {
    img: './assets/imgs/post (1).jpeg',
    title: 'A Stunning Classic Shaker Kitchen in Halesowen',
    date: '28 June 2025',
    author: 'Admin',
  },
  {
    img: './assets/imgs/post (7).jpeg',
    title: 'Gallery Style Shaker Kitchen In Redditch',
    date: '28 June 2025',
    author: 'Admin',
  },
  {
    img: './assets/imgs/post (6).jpeg',
    title: 'A Stunning Classic Shaker Kitchen in Halesowen',
    date: '28 June 2025',
    author: 'Admin',
  },
];

/* ================= Helpers & render ================= */
function renderSteps() {
  const container = document.getElementById('steps-container');
  if (!container) return;
  container.innerHTML = stepsData
    .map(
      (step) => `
    <div class="card text-md-start text-center py-1">
      <div class="card-body">
        <i class="fs-2 py-3 fa-solid ${step.icon}"></i>
        <h5 class="card-title text-capitalize fw-bold">${step.title}</h5>
        <p class="card-text text-black-50">${step.desc}</p>
      </div>
    </div>
  `
    )
    .join('');
}

function renderProperties() {
  const container = document.getElementById('properties-container');
  if (!container) return;
  container.innerHTML = propertiesData
    .map(
      (v) => `
    <div class="card ">
      <img loading="lazy" src="${v.img}" class="card-img-top" alt="${v.title}">
      <div class="card-body border-1">
        <h6 class="card-title fw-bold">${v.title}</h6>
        <p class="m-0 text-black-50" style="font-size: 12px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div class="d-flex justify-content-between align-items-center my-2">
          <p class="text-black-50 m-0" >
            <span class="fw-bold">${v.price}</span>
            <del class="ms-2" style="font-size: 12px;">${v.oldPrice}</del>
          </p>
          <a href="#" class="text-uppercase read">Read More</a>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

function renderClients() {
  const container = document.getElementById('clients-container');
  if (!container) return;

  container.innerHTML = clientsData
    .map(
      (c) => `
        <div class="col">
          <div class="card shadow-sm h-100 text-center p-3">
            <div class="d-flex justify-content-center mb-3">
              <img 
                src="${c.img}" 
                alt="${c.name}" 
                class="rounded-circle border border-3 border-white shadow-sm"
                style="width:90px;height:90px;object-fit:cover;">
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <p class="card-text text-black-50 mb-3">${c.comment}</p>
              <div class="star mb-2" aria-hidden="true">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <p class="fw-semibold text-black-50 mb-0">${c.name}</p>
            </div>
          </div>
        </div>
      `
    )
    .join('');
}

function renderBlog() {
  const container = document.getElementById('blog-container');
  if (!container) return;
  container.innerHTML = blogData
    .map(
      (b) => `
    <div class="col">
      <div class="card border-0 text-black">
        <img loading="lazy" src="${b.img}" class="card-img-top" alt="${b.title}">
        <div class="card-body">
          <h3 class="card-title">${b.title}</h3>
          <div class="span py-3">
            <i class="fa-solid fa-calendar"></i>
            <span class="ms-1 me-5 text-black-50">${b.date}</span>
            <span class="text-black-50">by <span class="text-dark ps-1">${b.author}</span></span>
          </div>
          <p class="card-text text-black-50 py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempor fugiat quam, eaque architecto?</p>
          <a href="#" class="text-uppercase read">read MORE</a>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

/* ================= Counter ================= */
function runCounters() {
  const nums = document.querySelectorAll('.num');
  nums.forEach((el) => {
    const end = parseInt(el.dataset.num, 10) || 0;
    let start = 0;
    if (end <= 0) return;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 10);
    const counter = setInterval(() => {
      start += 1;
      el.textContent = start;
      if (start >= end) clearInterval(counter);
    }, stepTime);
  });
}

/* ================= Accordion (About boxes) ================= */
function initAccordion() {
  document.addEventListener('click', function (e) {
    const boxName = e.target.closest('.box-Name');
    if (!boxName) return;
    const box = boxName.parentElement;
    box.classList.toggle('active');
  });
  document.querySelectorAll('.box-Name').forEach((el) => {
    el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        el.parentElement.classList.toggle('active');
      }
    });
  });
}

/* ================= Properties carousel & indicators ================= */
(function () {
  const propertiesContainer = document.getElementById('properties-container');
  const indicatorsContainer = document.getElementById('properties-indicators');

  if (!propertiesContainer || !indicatorsContainer) {
    return;
  }

  let currentSlide = 0;
  let autoPlayInterval = null;
  let isCarouselEnabled = false;
  const SMALL_BREAKPOINT = 991;

  function throttle(fn, wait = 120) {
    let last = 0;
    return (...args) => {
      const now = Date.now();
      if (now - last > wait) {
        last = now;
        fn(...args);
      }
    };
  }

  function buildIndicators() {
    indicatorsContainer.innerHTML = propertiesData
      .map(
        (_, i) =>
          `<button class="dot" data-index="${i}" aria-label="Go to property ${
            i + 1
          }"></button>`
      )
      .join('');
    indicatorsContainer.querySelectorAll('.dot').forEach((d) => {
      d.addEventListener('click', () => {
        goToSlide(parseInt(d.dataset.index, 10));
      });
    });
    updateIndicators();
  }

  function updateIndicators() {
    const dots = indicatorsContainer.querySelectorAll('.dot');
    dots.forEach((dot, idx) =>
      dot.classList.toggle('active', idx === currentSlide)
    );
  }

  /* ===== replace goToSlide ===== */
  function goToSlide(idx) {
    const children = propertiesContainer.children;
    if (!children.length) return;
    if (idx < 0) idx = children.length - 1;
    if (idx >= children.length) idx = 0;
    currentSlide = idx;

    const child = children[idx];
    const containerRect = propertiesContainer.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    const desiredScrollLeft =
      propertiesContainer.scrollLeft + (childRect.left - containerRect.left);
    propertiesContainer.scrollTo({
      left: Math.round(desiredScrollLeft),
      behavior: 'smooth',
    });

    updateIndicators();
  }

  /* ===== replace syncCurrentSlideByScroll ===== */
  function syncCurrentSlideByScroll() {
    const children = Array.from(propertiesContainer.children);
    if (!children.length) return;
    const containerRect = propertiesContainer.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 4;
    let nearestIndex = 0;
    let minDist = Infinity;
    children.forEach((ch, i) => {
      const r = ch.getBoundingClientRect();
      const dist = Math.abs(r.left - containerRect.left);
      if (dist < minDist) {
        minDist = dist;
        nearestIndex = i;
      }
    });
    if (nearestIndex !== currentSlide) {
      currentSlide = nearestIndex;
      updateIndicators();
    }
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 3000);
  }
  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  const onScrollThrottled = throttle(syncCurrentSlideByScroll, 150);

  function enableCarousel() {
    if (isCarouselEnabled) return;
    isCarouselEnabled = true;
    buildIndicators();
    startAutoPlay();
    propertiesContainer.addEventListener('mouseenter', stopAutoPlay);
    propertiesContainer.addEventListener('mouseleave', startAutoPlay);
    propertiesContainer.addEventListener('touchstart', stopAutoPlay, {
      passive: true,
    });
    propertiesContainer.addEventListener('scroll', onScrollThrottled);
  }

  function disableCarousel() {
    if (!isCarouselEnabled) return;
    isCarouselEnabled = false;
    stopAutoPlay();
    propertiesContainer.removeEventListener('mouseenter', stopAutoPlay);
    propertiesContainer.removeEventListener('mouseleave', startAutoPlay);
    propertiesContainer.removeEventListener('touchstart', stopAutoPlay);
    propertiesContainer.removeEventListener('scroll', onScrollThrottled);
    indicatorsContainer.innerHTML = '';
    propertiesContainer.scrollTo({ left: 0, behavior: 'smooth' });
    currentSlide = 0;
  }

  function handlePropertiesResponsive() {
    const isSmall = window.matchMedia(
      `(max-width: ${SMALL_BREAKPOINT}px)`
    ).matches;
    if (isSmall) enableCarousel();
    else disableCarousel();
  }

  window.addEventListener('load', handlePropertiesResponsive);
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handlePropertiesResponsive, 200);
  });
})();

/* ================= Init on load ================= */
window.addEventListener('load', () => {
  renderSteps();
  renderProperties();
  renderClients();
  renderBlog();
  runCounters();
  initAccordion();
});
