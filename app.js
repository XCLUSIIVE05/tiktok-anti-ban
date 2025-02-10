function submitForm() {
    const name = document.getElementById('name').value || 'Guest';
    const email = document.getElementById('email').value || 'guest@example.com';
    const phone = document.getElementById('phone').value || '000-000-0000';

    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    // You can send this data to your server using an AJAX request or similar method
}
