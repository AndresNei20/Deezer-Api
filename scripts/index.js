const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const results = document.getElementById('results');
const BASEURL = "https://i2thub.icesi.edu.co:5443/deezer/search?q="

const downloadData = async (url)=>{
    results.innerHTML = "";
    let response = await fetch(url)
    let data = await response.json();

    data.data.forEach( track =>{
        let title = track.title
        let artistName = track.artist.artistName
        let artistImage = track.artist.picture
        let albumName = track.album.title
        let albumImage = track.album.cover_medium

        let card = new Track(title, artistName, artistImage, albumName, albumImage);
        card.render(results);

    })
    }



const search = () => {
    let input = searchInput.value
    let url = `${BASEURL} ${input}`;
    console.log(url);
    downloadData(url);}


searchBtn.addEventListener('click', search)