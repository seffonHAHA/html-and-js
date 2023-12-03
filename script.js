// Отримати ім'я від користувача за допомогою prompt
var userName = prompt('Введіть ваше ім\'я:');

// Створити рядок з результатом
var resultString = 'Ваше ім\'я: ' + userName;

// Отримати контейнер для результату з DOM
var resultContainer = document.getElementById('result-container');

// Відобразити результат на сторінці
resultContainer.textContent = resultString;
