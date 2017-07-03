const accessKey = "rM0NQaI6"


function getCollection(searchTerms, page){
  $.ajax({
    url: `https://www.rijksmuseum.nl/api/en/collection?q=${searchTerms}&&p=${page}&&key=${accessKey}`,
    method: "GET",
    success: dataReceived,
    error: displayError
  })

}
