const BUILD_TIME = '2025.11.15 22:23:25';

function updateBuildTime() {
    const elements = document.querySelectorAll('.build-time');
    elements.forEach(element => {
        element.textContent = BUILD_TIME;
    });
}

document.addEventListener('DOMContentLoaded', updateBuildTime);
document.addEventListener('pjax:reinitialize', updateBuildTime);