let id = document.location.search.slice(4)
console.log(id)



const information=document.querySelector(".information")
fetch("https://api.tvmaze.com/shows/"+id).then(data=>data.json()).then(alldata=>{
    console.log(alldata)
    information.innerHTML = `
    <div class="row g-0">
      <div class="col-md-2">
        <img class = "image" src="${alldata.image.medium}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class = "inform" class="card-body">
          <p class = "namesize" class="card-title"><strong>Name:</strong> ${alldata.name}</p>
          <p class="card-text"><strong>Language:</strong> ${alldata.language}</p></p>
          <p class="card-text"><strong>Genres:</strong> ${alldata.genres}</p>
          <p class="card-text"><strong>AverageRuntime:</strong> ${alldata.averageRuntime}</p>
          <p class="card-text"><strong>OfficialSite:</strong><a href = "#"> ${alldata.officialSite}</a></p>

        </div>
      </div>
  </div>
  <div class = "about" >
    <strong class = "strg">What is the movie "Wonderful Meadows" about?</strong><p class = "summary">${alldata.summary}</p>
    </div>


    `
}

)

