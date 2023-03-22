const s = document.getElementById('search-input')
const container = document.getElementById('container')

    s.addEventListener('keyup',() => {
        const search = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${s.value}`
        fetch(search)
            .then(r => r.json())
            .then(artist => {
                container.classList.remove('d-none')
    
                const img = document.getElementById('artist')
                const nomeArtista = document.getElementById('nome-artista')
    
                for (let i = 0; i < artist.data.length; i++) {

                    img.src = artist.data[i].artist.picture
                    nomeArtista.textContent = artist.data[i].artist.name
                }

                const braniImg = document.querySelectorAll('.brani')

                for(let j=0; j < braniImg.length; j++){
                    const brani = braniImg[j]

                    const photo = artist.data[j]
                    console.log(photo);

                    const imgAlbum = document.createElement('img')

                    imgAlbum.setAttribute('height','50px')
                    imgAlbum.setAttribute('width','50px')

                    imgAlbum.src = photo.album.cover

                    brani.prepend(imgAlbum)
                }

                
    
            }
            )
            .then(()=>{
                if(s.value === ''){
                    container.classList.add('d-none')
                }
            })
    }
    )