document.addEventListener("DOMContentLoaded", () => {
    const merchandiseBtn = document.getElementById('merchandise-btn');
    const scheduleBtn = document.getElementById('schedule-btn');

    merchandiseBtn.addEventListener('click', () => {
        window.location.href = 'https://m.kbomarket.com/us/goods/goods_list.php?cateCd=006001';
    });

    scheduleBtn.addEventListener('click', () => {
        window.location.href = 'https://mykbostats.com/schedule';
        const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const scheduleBtn = document.querySelector('#schedule-btn');
const scheduleSection = document.querySelector('#game-schedule');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Scroll to Game Schedule
scheduleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scheduleSection.scrollIntoView({ behavior: 'smooth' });
});
    });
});
