

export function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(componentId).innerHTML = html;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error))
}