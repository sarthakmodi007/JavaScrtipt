let store = []
async function f() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => store.push(data));
  } catch (err) {
    alert(err.stack);
  }

  console.log("store", store[0])
  for (let i = 0; i <= store[0].length; i++) {
    let cell = '<div class="cell-container" id="lbc">';
    store.forEach(function (g) {
      cell += '<div class="cell" id="pop">' + g.name + "</div>";
    });
    cell += "</div>";
    console.log("cell", cell)
    var test = (document.getElementById("lbc").innerHTML = cell);
    console.log("twst")
  }
}
f();


// async function x() {

//   try {
//     await fetch("https://api.github.com/users/manishmshiva", {
//       method: "GET",
//       headers: { "Content-type": "application/json;charset=UTF-8" },
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   } catch (error) {
//     alert(error);
//   }
// }
// x();

// let _data = {
//   title: "foofkjdgssfsdefa",
//   body: "fhhh",
//   userId: 136445555,
// };
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(_data),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   fetch('https://no-such-server.blabla') // rejects
//   .then(response => response.json())
//   .catch(err => alert(err))
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];

// }

// const imageUrl = "https://via.placeholder.com/600/92c952";

// const reader = new FileReader();
// reader.onloadend = () => {
//   const base64data = reader.result;
//   console.log(base64data);
// }

// (async () => {
//   const response = await fetch(imageUrl)
//   const imageBlob = await response.blob()
//   reader.readAsDataURL(imageBlob);
// })()

// let btn = document.getElementById('btnclick')
// let image = document.getElementById('image')

// btn.addEventListener('click',function(){
//   fetch("https://via.placeholder.com/600/92c952")
//   .then(res => res.json())
//   .then(result =>{
//     console.log(result)
//     image.src=result.message
//   })
//   .catch(err=>console.log(err))
// })

// let fetchURL = "https://via.placeholder.com/600/92c952";
//   let image = abcd.map((picName) => {
//     return picName
//   })

//   fetch(fetchURL + image)
//   .then(response => response.json())
//   .then(images => console.log(fetchURL + images));
