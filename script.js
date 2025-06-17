// Efeito de flip no cartão
document.querySelector('.profile-container').addEventListener('click', function() {
    this.querySelector('.profile-card').classList.toggle('flipped');
});

// Efeito 3D sutil no cartão
const profileContainer = document.querySelector('.profile-container');

profileContainer.addEventListener('mousemove', (e) => {
    const card = profileContainer.querySelector('.profile-card');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = (x - centerX) / 25;
    const rotateX = (centerY - y) / 25;
    
    card.style.transform = `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

profileContainer.addEventListener('mouseleave', () => {
    const card = profileContainer.querySelector('.profile-card');
    card.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)';
});
