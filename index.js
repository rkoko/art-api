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
    let newSearch = new Search(data)
    console.log(newSearch)
    $('#results').append(newSearch.renderPage())
  } else {
    $("#results").append("No Results")
  }
}

function nextPage() {
  $(document).on('scroll', function(){
    console.log("scrolling!")
    if ( window.innerHeight + window.scrollY > $(document).height() - 200 ) {
        console.log("I need to load some more content here…");
        page += 1
        getCollection(searchTerms, page)
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
