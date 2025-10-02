const BUILD_TIME = '2025.10.2 17:31:38';

function updateBuildTime() {
    const elements = document.querySelectorAll('.build-time');
    elements.forEach(element => {
        element.textContent = BUILD_TIME;
    });
}

document.addEventListener('DOMContentLoaded', updateBuildTime);
document.addEventListener('pjax:reinitialize', updateBuildTime);