// مثال: تغيير لون الخلفية عند النقر على العنوان
document.querySelector('header h1').addEventListener('click', function() {
    this.style.backgroundColor = '#555';
});

// مثال: إظهار رسالة عند النقر على رابط "اتصل بنا"
document.querySelector('nav ul li a[href="contact.html"]').addEventListener('click', function() {
    alert('مرحبًا! يمكنك الاتصال بنا عبر البريد أو الهاتف.');
});