window.addEventListener('DOMContentLoaded', () => {
  const placesButtons = document.querySelectorAll('.js-place-select');
  placesButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('bus-place--taken'))
        btn.classList.toggle('bus-place--selected');
    });
  });
});
