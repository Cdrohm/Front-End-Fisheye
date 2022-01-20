//PAGE PHOTOGRAPHER
//Dropdown Filter
function sortBy(photograperMedias) {
    const option = document.querySelector(#sort-by).value;

    if (option == "popularity") {
        photographerMedias.sort(function (a, b) {
            return b.likes - a.likes;
            });
    }
}