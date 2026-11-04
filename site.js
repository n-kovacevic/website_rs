const copyButton = document.querySelector('#copy-email');

if (navigator.clipboard?.writeText) {
  const address = document.querySelector('#email-address');
  const status = document.querySelector('#email-status');

  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(address.textContent.trim());
      status.textContent = copyButton.dataset.success;
    } catch {
      status.textContent = copyButton.dataset.error;
    }
  });
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    }
  });

  document.querySelectorAll('section > .wrap, .cards > li').forEach((element) => {
    observer.observe(element);
  });
}
