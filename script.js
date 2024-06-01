// script.js

// Example: Smooth scrolling to a frame when clicked
document.querySelectorAll('.frame').forEach(frame => {
    frame.addEventListener('click', () => {
        frame.scrollIntoView({ behavior: 'smooth' });
    });
});

function showSidebar()
{
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display="flex";
}
function hideSidebar()
{
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display="none";
}