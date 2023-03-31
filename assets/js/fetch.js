const cardd = document.querySelector(".cardd")



fetch("https://api.tvmaze.com/shows").then(data => data.json()).then(arr=>{
    for(let i = 0;i<arr.length;i++){
        cardd.innerHTML+=
        `
        <div >
        <img src="${arr[i].image.medium}" class="cardd-img-top" alt="...">
        <ul  col = 3 class="list-group list-group-flush">
       
          <li class="list-group-item">Name:${arr[i].name}</li>
          <li class="list-group-item">Imdb:${arr[i].averageRuntime}</li>
          <li class="list-group-item">Genres:${arr[i].genres}</li>
        </ul>
        <a href="details.html?id=${arr[i].id}" target = "_blank" class="btn btn-primary">Next</a>
        <br>
        </div>
     `
    }})


//Müellim ajax ilə də yazdım amma Sabir müəllimin qabağına çıxan errorla məndə qarşılaşdım

// $.ajax({
//   Method: "GET",
//   URL:"https://api.tvmaze.com/shows"
// }).done(function(data){

//   for(let i = 0;i<data.length;i++){
//     cardd.innerHTML+=
//     `
//     <div>
//     <img src="${data[i].image.medium}" class="cardd-img-top" alt="...">
//     <ul col = 3 class="list-group list-group-flush">
   
//       <li class="list-group-item">${data[i].name}</li>
//       <li class="list-group-item">${data[i].averageRuntime}</li>
//       <li class="list-group-item">${data[i].genres}</li>
//     </ul>
//     <a href="#" class="btn btn-primary">Watch!</a>
//     </div>
//  `
// }})
