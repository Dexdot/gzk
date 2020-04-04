window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.js-order-popup');

  buttons.forEach(btn => {
    const parent = btn.closest('.cell');
    const popup = parent.querySelector('.order-cell-popup');
    const closeBtn = popup.querySelector('.popup__close');

    const contentHeight = popup.offsetHeight;
    const contentWidth = popup.offsetWidth;

    btn.addEventListener('click', () => {
      // Top / Bottom
      if (parent.offsetTop > contentHeight) {
        popup.style.top = 'unset';
        popup.style.bottom = 0;
      } else if (parent.offsetTop > contentHeight / 2) {
        popup.style.bottom = 'unset';
        popup.style.top = `-${contentHeight / 2}px`;
      } else {
        popup.style.bottom = 'unset';
        popup.style.top = 0;
      }

      // Left / Right
      if (parent.offsetLeft > contentWidth) {
        popup.style.left = 'unset';
        popup.style.right = 0;
      } else {
        popup.style.right = 'unset';
        popup.style.left = 0;
      }

      popup.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.js-show-order-popup');

  buttons.forEach(btn => {
    const parent = btn.closest('li');
    const popup = parent.querySelector('.orders-item-popup');
    const closeBtn = popup.querySelector('.popup__close');

    const contentHeight = popup.offsetHeight;
    const contentWidth = popup.offsetWidth;

    btn.addEventListener('click', () => {
      popup.style.bottom = 'unset';
      popup.style.right = 'unset';
      const top = btn.offsetTop + 16;
      const left = btn.offsetLeft;

      // Top / Bottom
      if (top > contentHeight) {
        popup.style.top = `${top - contentHeight - 16}px`;
      } else {
        popup.style.top = `${top + btn.offsetHeight}px`;
      }

      popup.style.left = `${left}px`;
      popup.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  });
});
