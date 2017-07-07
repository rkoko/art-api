$(document).ready(function (){
  search()
  nextPage()
})


let searchTerms;
let page;

function search(){
  $('form').on('submit', function(event){
    $('#results').empty()
    $("#loadMoreButtonDiv").empty()
    searchTerms = $('#searchTerms').val()
    page = 1
    getCollection(searchTerms, page)
    event.preventDefault()
  })
}


function dataReceived(data){
  console.log("hello")
  if (data.artObjects.length > 0) {
    data.artObjects.forEach((artwork) => {

      if (artwork.hasImage === true) {
        $("#results").append(`
          <div class="four wide column">
          <img src="${artwork.webImage.url}" style="max-width:200px;height:200px"/>
          <h3>${artwork.title}</h3>
          <p>${artwork.principalOrFirstMaker}</p>
          <button onclick="viewArtworkDetails('${artwork.webImage.url}','${artwork.title}','${artwork.principalOrFirstMaker}')">View Details</button>
          </div>`)
        }
    })
    // $("#loadMoreButtonDiv").append(`<button id="loadMore" class="ui button">Load More</button>`)
    // // nextPage()
  } else {
    $("#results").append("No Results")
  }
}

function nextPage() {
  $(document).on('scroll', function(event){
    console.log("scrolling!")
    if ( window.innerHeight + window.scrollY > $(document).height() - 200 ) {
        console.log("I need to load some more content here…");
        page += 1
            $("#loadMore").remove()
            getCollection(searchTerms, page)
            event.preventDefault()
    }
  })
}


function viewArtworkDetails(image, title, artist) {
  console.log("got here")
  $('.ui.basic.modal').modal({
        onHide: function(){
            console.log('hidden');
            $('.ui.basic.modal').empty()
        },
        onShow: function(){
            console.log('shown');
            $('.ui.basic.modal').append(`

        <div class="image content" style="position:relative;">
         <img src="${image}" class="image" style="height: 600px;margin: 0 auto; vertical-align: middle;">
         <div class="description">
           <p><em>${title}</em></p>
           <p><em>${artist}</em></p>
         </div>
       </div>

        `)
        }
      }).modal('show');
}



function displayError(){
  console.log("Error")
}
