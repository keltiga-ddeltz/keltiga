document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari reload halaman
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
    
    // Reset form
    document.getElementById('contactForm').reset();
});
