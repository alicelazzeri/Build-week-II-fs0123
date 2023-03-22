const id = new URLSearchParams(window.location.search).get('id')
const api = `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`


try {
    fetch(api)
        .then(r => r.json())
        .then(albumPage => {
            console.log(albumPage);
            const imgCover = document.querySelector('.music-pic')
            const album = document.getElementById('nome-album')
            const albumNav = document.getElementById('nome-album-nav')
            const name = document.getElementById('nome-artista')
            const icon = document.getElementById('icon')

            const a = [album, albumNav]
            for (albums of a) {
                albums.innerText = albumPage.title
            }
            name.innerHTML = `${albumPage.artist.name} &bull; <span class="fw-light"> ${albumPage.release_date.slice(0, 4)}</span> &bull;
            <span class="fw-light"> ${albumPage.nb_tracks} brani, </span><span class="fw-light opacity-75">${albumPage.duration.toString().slice(0,2)} min ${albumPage.duration.toString().slice(2,4)} sec.</span>`

            imgCover.src = albumPage.cover
            icon.src = albumPage.artist.picture_small
        })
}
catch (err) {
    document.querySelector("body").innerHTML = err.message;
}