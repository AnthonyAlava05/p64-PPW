document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.enlaces');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});

const image = document.getElementById('zoom-image');

image.addEventListener('mouseover', () => {
    image.classList.add('zoom');
});

image.addEventListener('mouseout', () => {
    image.classList.remove('zoom');
});