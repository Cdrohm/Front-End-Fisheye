//JAVASCRIPT PHOTOGRAPHER
/**
 * 
 * @param {*} data 
 * @returns 
 */
function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}


/*constructor(photographer, MediaList, city, country, tagline, price)
    this.photographer = photographer;
    this.mediaList = mediaList;
    this.city = city;
    this.coutnry = country;
    this.tagline = tagline;
    this.price = price; */

    