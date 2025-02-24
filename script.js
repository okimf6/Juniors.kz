
/* Ватсап */
function redirectToWhatsApp() {
    let phoneNumber = "7123456789"; // Укажите ваш номер без + и пробелов
    window.location.href = `https://wa.me/${phoneNumber}`;



}
/* Email */
function redirectToEmail() {
    let email = "juniorskz03@gmail.com"; // Ваш email
    window.location.href = `mailto:${email}`;
}

/* карта */
var map;
DG.then(function () {
    map = DG.map('map', {
        center: [53.298799, 69.384565], // Координаты (Москва)
        zoom: 29 // Масштаб
    });
});









// Получаем элементы
const openFormBtn = document.getElementById('openFormBtn');
const formModal = document.getElementById('formModal');
const closeBtn = document.getElementById('closeBtn');

// Открыть модальное окно при нажатии на кнопку
openFormBtn.addEventListener('click', () => {
    formModal.style.display = 'block';
});

// Закрыть модальное окно при нажатии на кнопку закрытия
closeBtn.addEventListener('click', () => {
    formModal.style.display = 'none';
});

// Закрыть модальное окно при клике вне его области
window.addEventListener('click', (e) => {
    if (e.target === formModal) {
        formModal.style.display = 'none';
    }
});

// Обработка формы (если нужно)
const dataForm = document.getElementById('dataForm');
dataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    alert(`Имя: ${name}\nТелефон: ${phone}`);
    formModal.style.display = 'none';  // Закрыть окно после отправки данных
});



