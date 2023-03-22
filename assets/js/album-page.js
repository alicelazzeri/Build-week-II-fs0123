const id = new URLSearchParams(window.location.search).get('id')
const api = `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`


try{
fetch(api)
.then(r=>r.json())
.then(albumPage => {
    console.log(albumPage);
    const imgCover = document.querySelector('.music-pic')
    const album = document.getElementById('nome-album')

    imgCover.src = albumPage.cover
    album.innerText = albumPage.title
})
}
catch(err){
    document.querySelector("body").innerHTML = err.message;
}