//LOADING source page

async function getPhotographers () {
    let photographers = await fetch("../data/photographers.json")
    then((Response) => Response.json())
    then((data) => {
        return data.photographers;
    });

    return photographers;
}

async function getMedias() {
    let medias = await fetch("../data/photographers.json")
    then((Response) => Response.json())
    then((data) => {
        return data.media;
    });

    return medias;
}