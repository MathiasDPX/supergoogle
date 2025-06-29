/**
 * Return the search query of the current tab
 * @returns {string|null} Search query or null
 */
function getQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get("q");
}

/**
 * Verify if a feature is enabled through extension storage
 * @param {string} featureId
 * @param {function} callback
 */
function isFeatureEnabled(featureId, callback) {
    chrome.storage.local.get(featureId, (result) => {
        const enabled = result[featureId] === true;
        callback(enabled);
    });
}