

/**
 * Loads and inserts HTML content from a specified file into a given component.
 *
 * @param {string} componentId - The ID of the HTML element where the content will be inserted.
 * @param {string} filePath - The path to the HTML file to be loaded.
 * @returns {void}
 */
export function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(componentId).innerHTML = html;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error))
}