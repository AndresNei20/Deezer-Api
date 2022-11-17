class Track{
    constructor(title, artistName, artistImage, albumName, albumImage){
        this.title = title;
        this.artistName = artistName;
        this.artistImage = artistImage;
        this.albumImage = albumName;
        this.albumImage = albumImage
    }
    render(container){
        let div = document.createElement('div');
        div.classList.add('trackcard');
        let content = `<h3>${this.title}</h3> 
                        <h6>${this.artistName}</h6> 
                        <img src"${this.artistName}"> 
                        <img src="${this.albumImage}"> 
                        <h6>${this.albumName}</h6>`;
        div.innerHTML = content;
        container.appendChild(div);
    }
}