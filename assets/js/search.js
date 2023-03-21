const s = document.getElementById('search-input')
const container = document.getElementById('results-container')
container.classList.add('d-none')

s.addEventListener('keyup', () => {
    console.log(s.value);
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
        }
        )
        .then(()=>{
            if(s.value === ''){
                container.classList.add('d-none')

            }
        })
}
)