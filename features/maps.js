const ID = "google_maps"

chrome.storage.local.get(ID, (result) => {
    const enabled = result[ID];
    if (enabled == true) {

        const searchCategories = document.getElementsByClassName("YmvwI")
        const query = getQuery();

        Array.from(searchCategories).forEach((el) => {
            const parent = el.parentElement;

            const url = parent.getAttribute("href");
            const fullUrl = new URL(url, "https://google.com");
            const udmValue = fullUrl.searchParams.get("udm");

            if (udmValue == 39) { // udm=39 are shorts videos
                el.innerHTML = "Maps";
                parent.setAttribute("href", "http://maps.google.com/?q="+query);
            }
        })

    }
})