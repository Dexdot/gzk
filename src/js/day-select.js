window.addEventListener('DOMContentLoaded', () => {
  const daysInputs = document.querySelectorAll('.js-day-select');

  daysInputs.forEach(input => {
    const parent = input.closest('.calendar-day');
    const isTaken = parent.classList.contains('calendar-day--taken');

    parent.classList[input.checked && !isTaken ? 'add' : 'remove'](
      'calendar-day--selected'
    );

    input.addEventListener('change', () => {
      if (!parent.classList.contains('calendar-day--taken'))
        parent.classList.toggle('calendar-day--selected');
    });
  });
});
