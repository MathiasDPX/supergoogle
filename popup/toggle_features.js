const checkboxes = document.querySelectorAll('.option');

checkboxes.forEach(checkbox => {
    chrome.storage.local.get(checkbox.id, (result) => {
        if (checkbox.id in result) {
            checkbox.checked = result[checkbox.id];
        }
    });

    checkbox.addEventListener('change', () => {
        chrome.storage.local.set({ [checkbox.id]: checkbox.checked });
    });
});
