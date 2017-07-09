class Artwork {
 constructor(artworkData){
   this.image = artworkData.webImage.url
   this.title = artworkData.title
   this.artist = artworkData.principalOrFirstMaker

 }

 render(){
   return `<div class="four wide column">
     <img src="${this.image}" style="max-width:200px;height:200px"/>
     <h3>${this.title}</h3>
     <p>${this.artist}</p>
     <button onclick="viewArtworkDetails('${this.image}','${this.title}','${this.artist}')">View Details</button>
     </div>`
 }
 // THIS FUNCTION BELOW DIDNT WORK HERE FROM WITHIN THE CLASS NOT SURE WHY
 // viewArtworkDetails(image, title, artist) {
 //   console.log("got here")
 //   $('.ui.basic.modal').modal({
 //         onHide: function(){
 //             console.log('hidden');
 //             $('.ui.basic.modal').empty()
 //         },
 //         onShow: function(){
 //             console.log('shown');
 //             $('.ui.basic.modal').append(`
 //
 //         <div class="image content" style="position:relative;">
 //          <img src="${image}" class="image" style="height: 600px;margin: 0 auto; vertical-align: middle;">
 //          <div class="description">
 //            <p><em>${title}</em></p>
 //            <p><em>${artist}</em></p>
 //          </div>
 //        </div>
 //
 //         `)
 //         }
 //       }).modal('show');
 // }



}
