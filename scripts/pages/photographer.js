//PAGE PHOTOGRAPHER
//Dropdown Filter
function sortBy(photographerMedias) {
    const option = document.querySelector(#sort-by).value;

    if (option == "popularity") {
        photographerMedias.sort(function (a, b) {
            return b.likes - a.likes;
            });
    } else if (option == date) {
        photographerMedias.sort (function (a, b) {
            let dateA = new Date (a.date),
            dateB = new Date (b.date);
            return dateA - dateB;
        });
    }
}