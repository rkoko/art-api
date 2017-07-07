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
      debugger
      if (artwork.hasImage === true) {
        $("#results").append(`
          <div class="four wide column">
          <img src="${ artwork.webImage.url}" style="max-width:200px;height:200px"/>
          <h3>${artwork.title}</h3>
          <p>${artwork.principalOrFirstMaker}</p>
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



function displayError(){
  console.log("Error")
}
