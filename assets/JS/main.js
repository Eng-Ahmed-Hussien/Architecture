document.addEventListener('DOMContentLoaded', () => {
  const collapseEl = document.querySelector('.navbar-collapse');
  const toggler = document.querySelector('.navbar-toggler');
  if (!collapseEl || !toggler) return;

  const isSmallScreen = () => window.matchMedia('(max-width: 991px)').matches;

  function getCollapseInstance() {
    return bootstrap.Collapse.getOrCreateInstance(collapseEl, {
      toggle: false,
    });
  }

  function hideIfOpen() {
    if (!isSmallScreen()) return;
    if (collapseEl.classList.contains('show')) {
      getCollapseInstance().hide();
    }
  }

  document.addEventListener(
    'click',
    (e) => {
      if (!isSmallScreen()) return;
      if (!collapseEl.classList.contains('show')) return;

      if (
        e.target.closest('.navbar-collapse') ||
        e.target.closest('.navbar-toggler')
      )
        return;

      getCollapseInstance().hide();
    },
    { passive: true }
  );

  document.addEventListener(
    'touchstart',
    (e) => {
      if (!isSmallScreen()) return;
      if (!collapseEl.classList.contains('show')) return;
      if (
        e.target.closest('.navbar-collapse') ||
        e.target.closest('.navbar-toggler')
      )
        return;
      getCollapseInstance().hide();
    },
    { passive: true }
  );

  window.addEventListener(
    'scroll',
    () => {
      hideIfOpen();
    },
    { passive: true }
  );

  document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      hideIfOpen();
    });
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!isSmallScreen() && collapseEl.classList.contains('show')) {
        const inst = bootstrap.Collapse.getInstance(collapseEl);
        if (inst) inst.hide();
      }
    }, 150);
  });
});
