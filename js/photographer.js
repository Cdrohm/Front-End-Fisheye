//PAGE PHOTOGRAPHER
//IMPORT
import {getPhotographers} from "./api.js";
import {getMedias} from "./api.js";

async function init() {
    let photographers = await getPhotographers();
    const photographerId = parseInt(document.getElementById("photographer-id").value);
    const photographerItem = photographers.filter((item) => item.id === photographerId);
    const content = document.getElementById("artist");
    photographerItem.forEach((photographer) => content.appendChild(photographerHeader(photographer)));
  
    let medias = await getMedias();
    const photographer = photographers.find((photographer) => photographer.id === photographerId);
    let photographerMedias = medias.filter((item) => item.photographerId === photographerId);
    photographerMedias.forEach((media) => appendMediaToGallery(photographer, media));
 
//Dropdown Filter
function sortBy(photographerMedias) {
    const option = document.querySelector(#sort-by).value;

    if (option == "popularity") {
        photographerMedias.sort(function (a, b) {
            return b.likes - a.likes;
            });

    } else if (option == "date") {
        photographerMedias.sort (function (a, b) {
            let dateA = new Date (a.date),
            dateB = new Date (b.date);
            return dateA - dateB;
        });

    } else if (option == "title") {
        photographerMedias.sort (function(a, b) {
            let titleA = a.title.toLowerCase(),
            titleB = b.title.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;

            return 0;
        });
    }

    return photographerMedias;
}