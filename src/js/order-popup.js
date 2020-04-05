const closePopups = () => {
  const popups = Array.from(
    document.querySelectorAll('.order-cell-popup, .orders-item-popup')
  );

  popups.forEach(popup => {
    popup.classList.remove('active');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.js-order-popup');
  const popup = document.querySelector('.order-cell-popup');
  const contentHeight = popup.offsetHeight;
  const contentWidth = popup.offsetWidth;
  const closeBtn = popup.querySelector('.popup__close');
  closeBtn.addEventListener('click', closePopups);

  buttons.forEach(btn => {
    let cell = btn.closest('.cell');
    if (!cell) cell = btn.closest('td');

    btn.addEventListener('click', () => {
      closePopups();

      const top = cell.offsetTop;
      const left = cell.offsetLeft;

      // Top / Bottom
      if (top > contentHeight) {
        popup.style.top = `${top - contentHeight}px`;
      } else if (top > contentHeight / 2) {
        popup.style.top = `${top - contentHeight / 2}px`;
      } else {
        popup.style.top = `${top + cell.offsetHeight}px`;
      }

      // Left / Right
      if (left > contentWidth) {
        popup.style.left = `${left - contentWidth + cell.offsetWidth}px`;
      } else {
        popup.style.left = `${left}px`;
      }

      popup.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.js-show-order-popup');
  const popup = document.querySelector('.orders-item-popup');
  const contentHeight = popup.offsetHeight;
  const contentWidth = popup.offsetWidth;
  const closeBtn = popup.querySelector('.popup__close');
  closeBtn.addEventListener('click', closePopups);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      closePopups();

      const top = btn.offsetTop;
      const left = btn.offsetLeft;

      // Top / Bottom
      if (top > contentHeight) {
        popup.style.top = `${top - contentHeight - 8}px`;
      } else {
        popup.style.top = `${top + btn.offsetHeight + 8}px`;
      }

      // Left / Right
      if (left > contentWidth) {
        popup.style.left = `${left - btn.offsetWidth}px`;
      } else {
        popup.style.left = `${left}px`;
      }

      popup.classList.add('active');
    });
  });
});
