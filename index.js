$(document).ready(function (){
  search()
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
        $("#results").append(`<div>
          <img src="${ artwork.webImage.url}" style="width:200px;height:200px"/>
          <h3>${artwork.title}</h3>
          <p>${artwork.principalOrFirstMaker}</p>
          </div>`)
        }
    })
    $("#loadMoreButtonDiv").append(`<button id="loadMore">Load More</button>`)
    nextPage()
  } else {
    $("#results").append("No Results")
  }
}

function nextPage() {
  console.log("next")
  $('#loadMore').on('click', function(event){
    page += 1
    $("#loadMore").remove()
    getCollection(searchTerms, page)
    event.preventDefault()
  })

}


function displayError(){
  console.log("Error")
}
