

// const nameofcars = [...new Set(cars)]
// console.log(nameofcars);


// const calcInterest =(p, r, t)=> (p*r*t) / 180;
// console.log(calcInterest(500, 2, 5));

// const randomNum =(start, end) => {
//     return Math.floor(Math.random() * end) + start;
// }
// console.log (randomNum(50, 200))

// const evenNum = (number) => {
//     return number % 2 === 0 ? true : false;
//   };
//   console.log(evenNum(11));

// const conversion = (celsius)  => {
//    return (celsius * 9/5) + 32;
// }
// console.log (conversion(6))

// const fruits =['banana', 'orange', 'turkish']
// console.log (fruits)


// const fruits = 'apple, mango, ram';
// console.log (fruits)



// for (let p = 0; p < 5; p++) {
//     console.log (p)
// }

// for (let i = 0; i < 10; i++){ 
//     console.log(i)
// }

// for (let z=1; z < 8; z++){
//     console.log (z)

//     console.log (typeof "z")
// }

// document.getElementById('pic').src=alt

// document.getElementById('button').addEventListener(mouseover, function(){

// })

// const para = document.getElementById("name").innerHTML

// document.getElementById('#capture').addEventListener('click', function(){
//     console.log('hello')
//     alert('captured')
//   }, false)
  
//   document.getElementById('#captureBody').addEventListener('click', function(){
//     alert('captured Body')
//   }, true)
  
//   document.getElementById('#bubbling').addEventListener('click', function(){
//     alert('bubbling')
//   }, true)
  
//   document.getElementById('#bubbleBody').addEventListener('click', function(){
//     alert('bubbling Body')
//   }, false)


  //   const sections = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '399573b6f4934a5db9061341231102',
  //     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://weatherapi-com.p.rapidapi.com/future.xml?q=Canada&dt=2023-02-11', sections)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  //   console.log (sections)

//   const API_KEY ="X8BOPDwAi7OHkqiUjoE2G2fPvlUZzsA1zYxO9TWeA21JOxZ3m9h31Wa7"
 
//   function getPhotos(images) {
//     images.map(image => {
//       console.log(image)
//     })
//  }
//  fetch("https://api.pexels.com/v1/search?query=people",{
//    headers: {
//      Authorization: API_KEY
//    }
//  })
//     .then(resp => {
//       return resp.json()
//     })
//     .then(data => {
//       getPhotos(data.photos);
//     })


//     document.getElementById('cards').innerHTML



let getPhotos;
fetch("https://api.pexels.com/v1/curated?per_page=15")
  .then((response) => response.json())
  .then((data) => {
    getPhotos = data.photos;
    let picture_data = "";
    getPhotos.map((photo) => {
      console.log(photo.photographer);
      picture_data += `<div>
     <img src= ${photo.src.portrait} alt="">
      <p class="">${photo.photographer}</p>
      </div>`;
    });


    document.getElementById("photos").innerHTML = picture_data;
  })
  
// document.getElementById('javascript').innerHTML