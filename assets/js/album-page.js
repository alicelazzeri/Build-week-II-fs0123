const id = new URLSearchParams(window.location.search).get('id')
const api = `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`



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

            let seconds = albumPage.duration

            if(seconds.toString().slice(1,3) > 59 || seconds.toString().slice(0,2) > 59){
                seconds += 40
            }

            if(seconds.toString().length > 3){

                name.innerHTML = `${albumPage.artist.name} &bull; <span class="fw-light"> ${albumPage.release_date.slice(0, 4)}</span> &bull;
                <span class="fw-light"> ${albumPage.nb_tracks} brani, </span><span class="fw-light opacity-75">${seconds.toString().slice(0,2)} min ${seconds.toString().slice(2,4)} sec.</span>`

            } else{

                name.innerHTML = `${albumPage.artist.name} &bull; <span class="fw-light"> ${albumPage.release_date.slice(0, 4)}</span> &bull;
                <span class="fw-light"> ${albumPage.nb_tracks} brani, </span><span class="fw-light opacity-75">${seconds.toString().slice(0,1)} min ${seconds.toString().slice(1,3)} sec.</span>`
            }


            imgCover.src = albumPage.cover
            icon.src = albumPage.artist.picture_small

            const songContainer = document.getElementById('song-container')

            for(let i=0; i<albumPage.tracks.data.length && 5 > i; i++){

                const divMain = document.createElement('div')
                const div = document.createElement('div')
                const divNumber = document.createElement('div')
                const divNames = document.createElement('div')
                const nameTrack = document.createElement('p')
                const artist = document.createElement('p')
                const divButton = document.createElement('div') 
                const button = document.createElement('button')
                const duration = document.createElement('p')
                const dots = document.createElement('button')

                divMain.classList.add('d-flex','justify-content-between','align-items-center','songContainerStyle','hoverStyle')
                div.classList.add('d-flex','align-items-center')
                nameTrack.classList.add('mb-0','fw-normal','size')
                divButton.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'gap-3','margin')
                duration.classList.add('mb-0', 'fw-light')

                divNumber.className = 'me-3'
                artist.className = 'fw-light'
                button.className = 'bg-transparent'

                button.id = 'small-heart'
                dots.id = 'small-more'

                let dur = albumPage.tracks.data[i].duration

                if(dur.toString().slice(1,3) > 59 || dur.toString().slice(0,2) > 59){
                    dur += 40
                }
                if(dur.toString().length <= 2 && dur.toString().slice(0,2) <= 59){
                    dur = '0' + albumPage.tracks.data[i].duration
                }

                const ps = [nameTrack,artist,divNumber,duration]
                for(p of ps){
                    p.classList.add('text-white')
                }

                console.log(dur.toString().slice(0,1) + ':' + dur.toString().slice(1,3));
                divNumber.textContent = i +1
                nameTrack.textContent = albumPage.tracks.data[i].title
                artist.textContent = albumPage.tracks.data[i].artist.name
                duration.innerText = dur.toString().slice(0,1) + ':' + dur.toString().slice(1,3)
                button.innerHTML = '<svg fill="white" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>'
                dots.innerHTML = '<svg fill="white" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>'

                divButton.append(button,duration,dots)
                divNames.append(nameTrack,artist)
                div.append(divNumber,divNames,divButton)
                divMain.append(div)

                songContainer.append(divMain)
            }

            const otherSongsContainer = document.getElementById('other-songs-container')
            console.log(albumPage);
            if(albumPage.tracks.data.length > 5){
                for(let i=5; i<albumPage.tracks.data.length && 10 > i; i++){
                const divMain = document.createElement('div')
                const div = document.createElement('div')
                const divNumber = document.createElement('div')
                const img = document.createElement('img')
                const divNames = document.createElement('div')
                const nameTrack = document.createElement('p')
                const artist = document.createElement('p')
                const divButton = document.createElement('div') 
                const button = document.createElement('button')
                const duration = document.createElement('p')
                const dots = document.createElement('button')

                divMain.classList.add('d-flex','justify-content-between','align-items-center','songContainerStyle','hoverStyle','ms-0')
                div.classList.add('d-flex','align-items-center')
                nameTrack.classList.add('mb-0','fw-normal','size')
                divButton.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'gap-3','margin')
                duration.classList.add('mb-0', 'fw-light')

                divNumber.className = 'me-3'
                artist.className = 'fw-light'
                button.className = 'bg-transparent'
                img.className = 'mx-3'

                img.style.width = '40px'
                img.style.height = '40px'
                divNumber.style.width = '10px'

                button.id = 'small-heart'
                dots.id = 'small-more'

                let dur = albumPage.tracks.data[i].duration

                if(dur.toString().slice(1,3) > 59 || dur.toString().slice(0,2) > 59){
                    dur += 40
                }
                if(dur.toString().length <= 2 && dur.toString().slice(0,2) <= 59){
                    dur = '0' + albumPage.tracks.data[i].duration
                }

                const ps = [nameTrack,artist,divNumber,duration]
                for(p of ps){
                    p.classList.add('text-white')
                }

                console.log(dur.toString().slice(0,1) + ':' + dur.toString().slice(1,3));
                divNumber.textContent = i +1
                img.src = albumPage.cover_small
                nameTrack.textContent = albumPage.tracks.data[i].title
                artist.textContent = albumPage.tracks.data[i].artist.name
                duration.innerText = dur.toString().slice(0,1) + ':' + dur.toString().slice(1,3)
                button.innerHTML = '<svg fill="white" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>'
                dots.innerHTML = '<svg fill="white" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>'

                divButton.append(button,duration,dots)
                divNames.append(nameTrack,artist)
                div.append(divNumber,img,divNames,divButton)
                divMain.append(div)

                otherSongsContainer.append(divMain)

                }
            }else{
                otherSongsContainer.innerText = "Non ci sono brani popolari"
            }

            const popularArtist = document.getElementById('popular-artist')
            const picPlaying = document.querySelector('.pic img')
            const track = document.querySelector('.track')
            const nameArtist = document.querySelector('.nome-artista')
            console.log(track);

            popularArtist.innerText = albumPage.artist.name
            picPlaying.src = albumPage.cover_medium
            track.innerText = albumPage.title
            nameArtist.innerText = albumPage.artist.name
        })