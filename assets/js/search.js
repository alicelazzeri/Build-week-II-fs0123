const s = document.getElementById('search-input')

s.addEventListener('keyup',()=>{
    const search = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${s.value}`
    fetch(search)
    .then(r=>r.json())
    .then(artist=>{
        const container = document.getElementById('results-container')
        container.classList.remove('d-none')
        const img = document.getElementById('artist')
        const nomeArtista = document.getElementById('nome-artista')

        console.log(artist.data);

        for(let i=0; i<artist.data.length;i++){
            
            img.src = artist.data[i].artist.picture_medium
            nomeArtista.textContent = artist.data[i].artist.name

            console.log(img.src);
        }
        if(s.value === ''){
            container.classList.add('d-none')}
    }
    )
})