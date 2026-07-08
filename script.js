document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.textContent;
      btn.textContent = 'copied';
      setTimeout(() => { btn.textContent = original; }, 1500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  });
});
