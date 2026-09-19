document.addEventListener('DOMContentLoaded', () => {
    // 1. Управление мобильным гамбургер-меню
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Автоматическое закрытие меню при клике на якорную ссылку на телефоне
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // 2. Интерактивная обработка формы опроса без перезагрузки страницы
    const f1QuizForm = document.getElementById('f1QuizForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');

    if (f1QuizForm) {
        f1QuizForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Предотвращаем перезагрузку страницы

            // Показываем сообщение об успешной отправке
            formSuccessMessage.classList.remove('hidden');
            
            // Сбрасываем поля формы
            f1QuizForm.reset();

            // Скрываем сообщение через 5 секунд
            setTimeout(() => {
                formSuccessMessage.classList.add('hidden');
            }, 5000);
        });
    }
});