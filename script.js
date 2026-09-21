const navButtons = document.querySelectorAll('aside nav button');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('bg-emerald-700', 'shadow-lg', 'border-emerald-500'));
        btn.classList.add('bg-emerald-700', 'shadow-lg', 'border-emerald-500');
    });
});
