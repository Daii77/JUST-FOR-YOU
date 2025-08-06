function showMessage() {
    const message = document.getElementById('hiddenMessage');
    const heart = document.getElementById('heart');

    if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block"; // إظهار النص
        heart.classList.add('beat');    // تشغيل حركة القلب
    } else {
        heart.classList.remove('beat'); // إيقاف الحركة
        setTimeout(() => message.style.display = "none", 300);
    }
}

