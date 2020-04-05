document.addEventListener('DOMContentLoaded', () => {
  const placesInputs = document.querySelectorAll('.js-place-select');

  placesInputs.forEach(input => {
    const parent = input.closest('.bus-place');
    const isTaken = parent.classList.contains('bus-place--taken');

    parent.classList[input.checked && !isTaken ? 'add' : 'remove'](
      'bus-place--selected'
    );

    input.addEventListener('change', () => {
      if (!parent.classList.contains('bus-place--taken'))
        parent.classList.toggle('bus-place--selected');
    });
  });
});
