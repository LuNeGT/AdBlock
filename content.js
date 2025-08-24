// Показ рекламы 1 раз в день на сайтах
function showEthicalAd() {
  const today = new Date().toDateString();
  const lastShown = localStorage.getItem('lastAdShown');
  
  if (lastShown !== today) {
    // Ваша партнерская реклама
    const ad = `
      <div id="ethical-ad" style="position: fixed; bottom: 20px; right: 20px; background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); z-index: 9999;">
        <button onclick="closeAd()" style="float: right; background: none; border: none; font-size: 16px;">×</button>
        <h4>Специальное предложение</h4>
        <p>Получите скидку 10% по промокоду <b>ADBLOCK10</b></p>
        <a href="https://partner-site.com/ref=your_id" target="_blank" style="color: #007bff;">Перейти к предложению</a>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', ad);
    localStorage.setItem('lastAdShown', today);
  }
}

// Запуск при загрузке страницы
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', showEthicalAd);
} else {
  showEthicalAd();
}