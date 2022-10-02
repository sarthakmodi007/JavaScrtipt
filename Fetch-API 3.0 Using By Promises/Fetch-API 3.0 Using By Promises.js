class Fetchcall {
  async Fetch() {
    try {
      let store = [];
      await fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => store.push(data));

      var data = store[0];

      return data;
    } catch (err) {
      alert(err.message);
    }
  }
  structer() {
    try {
      const fetchPromise = this.Fetch();

      fetchPromise.then((response) => {
        response.slice(0, 10).map(function (g) {
          // let lastsegment = [g.thumbnailUrl];

          // console.log("ncdkc", lastsegment);

          // let fil = lastsegment.filter(function (x) {
          //   return;
          // });

          // let lasts = [g.thumbnailUrl.split("/").pop()];
          // console.log("lasts--",lasts)

          const data = response.slice(0, 10);
          let filters = data.filter((item) => {
            // console.log(item.url.split("/").pop()); 
            if (item.thumbnailUrl.split("/").pop() === item.thumbnailUrl.split("/").pop().startsWith("5")) {

              return item;
            }
          });
          console.log("filters-----", filters);

          // let image = document.createElement("img");
          // image.src = g.thumbnailUrl;

          // let oop = document
          //   .querySelector(".cell-container")
          //   .appendChild(image);

          // return oop;
        });
      });
    } catch (error) {
      console.log(error.stack);
    }
  }
}

const xyz = new Fetchcall();
xyz.structer();

// for remove last portion of url
// const divide = g.thumbnailUrl.split("/");
// console.log("divide---", divide);
// var lastSegment = divide.pop() || divide.pop();
// console.log("lastsegment--", lastSegment);

// for split the url into the smaller part :- let lastsegment = [g.thumbnailUrl.split("/").pop()];
// item.thumbnailUrl.split("/").pop().startsWith("5")