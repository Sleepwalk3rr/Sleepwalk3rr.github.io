const quotes = [
  "«Книги — это уникальное переносное волшебство». — Стивен Кинг",
  "Чтение на 68% снижает уровень стресса.",
  "«Читатель проживает тысячу жизней, прежде чем умрет». — Джордж Мартин",
  "30 минут чтения в день увеличивают продолжительность жизни.",
  "«Книга — это зеркало. Если в него смотрит осёл, он не может увидеть ангела».",
  "Чтение художественной литературы развивает эмпатию и эмоциональный интеллект.",
  "«Человек, который не читает хороших книг, не имеет преимуществ перед тем, кто не умеет читать»."
];

function showRandomQuote() {
  const quoteElement = document.querySelector('#quote-display');
  if (quoteElement) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  showRandomQuote();
  // ... остальной код (startBtn и т.д.)
});

// Запуск бэкграунд-видео для андроида
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    
    // Пытаемся запустить видео программно
    const playVideo = () => {
        video.play().catch(error => {
            console.log("Автоплей заблокирован браузером, ждем взаимодействия");
        });
    };

    playVideo();

    // Запасной вариант: видео запустится, как только пользователь коснется экрана
    document.body.addEventListener('touchstart', function() {
        if (video.paused) {
            video.play();
        }
    }, { once: true });
});