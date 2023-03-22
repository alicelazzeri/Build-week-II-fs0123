const id = new URLSearchParams(window.location.search).get('id')
const api = `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`


try{
fetch(api)
.then(r=>r.json())
.then(albumPage => {
    console.log(albumPage);
    const imgCover = document.querySelector('.music-pic')
    const album = document.getElementById('nome-album')
    const albumNav = document.getElementById('nome-album-nav')

    const a= [album, albumNav]
    for(albums of a){
        albums.innerText = albumPage.title
    }

    imgCover.src = albumPage.cover
})
}
catch(err){
    document.querySelector("body").innerHTML = err.message;
}