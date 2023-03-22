const id = new URLSearchParams(window.location.search).get('id')
const api = `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`


try {
    fetch(api)
        .then(r => r.json())
        .then(albumPage => {
            console.log(albumPage);
            const bg = document.getElementById('bg')
            const bgAlbum = albumPage.cover_xl
            bg.style.backgroundImage = `url('${bgAlbum}')`
            // const bg = albumPage.cover_xl
            // const bgResp = document.body.style.backgroundImage = `url('${bg}')`

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

            const track = document.querySelectorAll('.track')
            const nomeArtista = document.querySelectorAll('.nome-artista')
            const duration = document.querySelectorAll('.duration')

            for(let i=0; i<track.length; i++){
                const titles = track[i]
                const names = nomeArtista[i]
                const time = duration[i]

                titles.innerText = albumPage.tracks.data[i].title
                names.innerText = albumPage.tracks.data[i].artist.name
                time.innerText = albumPage.tracks.data[i].duration.toString().slice(0,1) + ':' + albumPage.tracks.data[i].duration.toString().slice(1,3)
            }
            body.append(bgResp)
        })
}
catch (err) {
    document.querySelector("body").innerHTML = err.message;
}