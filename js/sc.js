document.addEventListener("click", function(event) {
  if (event.target.classList.contains('section__title-href')) {
    const item = event.target.closest('.section__title-href');
    const siteUrl = window.location.href;
    // Копирование href в буфер обмена
    navigator.clipboard.writeText(siteUrl)
      .then(() => {
        showNotification({
          content: "Ссылка скопирована!",
          type: "success"
        });
      })
  }
});