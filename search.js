class Search {
  constructor(data){
    this.artworks = []
    data.artObjects.forEach((artwork) => {
      if (artwork.hasImage === true) {
        this.artworks.push(new Artwork(artwork))
        }
    })

  }

  renderPage(){
    let pageHTML = ""
    this.artworks.forEach((artwork) => {
      pageHTML += artwork.render()
    })
     return pageHTML
  }

}
