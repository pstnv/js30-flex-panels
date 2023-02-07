const panels = document.querySelectorAll('.panel');

function openPanel() {
    panels.forEach(panel => panel.classList.remove('open'));
    this.classList.add('open');
}

function showText(e) {
    if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', openPanel));
panels.forEach(panel => panel.addEventListener('transitionend', showText));

