const s = document.getElementById('search-input')
const btnTutto = document.getElementById('tutto')
const container = document.getElementById('container')
const btnAlbum = document.getElementById('album')
const buttons = document.getElementById('buttons')

s.addEventListener('keyup',()=>{
    buttons.classList.remove('d-none')
})

    btnTutto.addEventListener('click',() => {
        const search = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${s.value}`
        fetch(search)
            .then(r => r.json())
            .then(artist => {
                
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

album.onclick = ()=>{
    const search = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${s.value}`
    fetch(search)
    .then(r=>r.json())
    .then(albm=>{
        console.log(albm);
        for(let i = 0;i<albm.data.length ;i++){
            const card = document.createElement('div')
            const cardBody = document.createElement('div')
            const img = document.createElement('img')
            const pAlbum = document.createElement('p')
            const pName = document.createElement('p')
            const set = albm.data[i]

            const p = [pAlbum,pName]
            for(ps of p){
                ps.classList.add('px-2','overflow','mb-1','py-0')
            }
            
            card.style.width = '130px'
            img.style.height = '130px'

            card.classList.add('card','m-3','px-0','bg-dark')
            img.classList.add('card-img-top', 'p-2')
            pAlbum.style.fontSize = '0.8rem'
            pName.style.fontSize = '0.7rem'

            img.src = set.album.cover_medium
            pAlbum.innerText = set.album.title
            pName.innerText = set.artist.name

            card.append(cardBody,img,pAlbum,pName)
            container.append(card)

            card.onclick = ()=>{
                location.assign(`./album-page.html?id=${set.album.id}`)
            }
        }

    })
}
