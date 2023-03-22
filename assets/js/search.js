const s = document.getElementById('search-input')
const btnTutto = document.getElementById('tutto')
const container = document.getElementById('container')


    s.addEventListener('keyup',() => {
        const search = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${s.value}`
        fetch(search)
            .then(r => r.json())
            .then(artist => {
                container.classList.remove('d-none')
                btnTutto.focus()
                const img = document.getElementById('artist')
                const nomeArtista = document.getElementById('nome-artista')
    
                for (let i = 0; i < artist.data.length; i++) {

                    img.src = artist.data[i].artist.picture
                    nomeArtista.textContent = artist.data[i].artist.name
                }

                const album = document.querySelectorAll('.imgAlbum')
                const nomeBrano = document.querySelectorAll('.nomeBrano')
                const nomeArt = document.querySelectorAll('.nomeArtista')
                const durata = document.querySelectorAll('.durata')

                for(let j=0; j < album.length; j++){
                    const imgAlbum = album[j]
                    const brano = nomeBrano[j]
                    const artista = nomeArt[j]
                    const dur = durata[j]

                    const set = artist.data[j]

                    imgAlbum.setAttribute('height','50px')
                    imgAlbum.setAttribute('width','50px')

                    let colons = set.duration.toString()
                    let a = colons.slice(0,1) + ':' + colons.slice(1)
                    
                    imgAlbum.src = set.album.cover
                    brano.innerText = set.album.title
                    artista.innerText = set.artist.name
                    dur.innerText = a
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
