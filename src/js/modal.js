document.addEventListener('click', e => {
  const open = e.target.closest('[data-modal-open]');
  const close = e.target.closest('[data-modal-close]');

  if (open) {
    const modalName = open.dataset.modalOpen;
    const modal = document.querySelector(`[data-modal="${modalName}"]`);
    if (modal) modal.classList.add('active');
  }

  if (close) {
    const modalName = close.dataset.modalClose;
    const modal = document.querySelector(`[data-modal="${modalName}"]`);
    if (modal) modal.classList.remove('active');
  }
});
