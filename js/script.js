function toggle() {
    const sec = document.getElementById('sec');
    const nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}