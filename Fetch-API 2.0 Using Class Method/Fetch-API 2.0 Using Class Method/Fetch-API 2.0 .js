class Fetchcall {
  async Fetch() {
    try {
      let store = [];
      await fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => store.push(data));

      var data = store[0];

      // console.log("data-----", data);
      return data;
    } catch (err) {
      alert(err.message);
    }
  }
  structer() {
    try {

      const fetchPromise = this.Fetch();

      fetchPromise.then((response) => {
        response.slice(0, 5).map(function (g) {
          let image = document.createElement("img");
          image.src = g.thumbnailUrl;

          let oop = document
            .querySelector(".cell-container")
            .appendChild(image);
          console.log("response------", oop);

          return oop;
        });
      });

      fetchPromise.then((jarvis) => {
        jarvis.slice(0, 2).map(function (s) {
          let someusers = jarvis.filter((item) => item < 1);
          someusers.src = s.title;
          console.log("someusers filters---", someusers);
        });
      });

      fetchPromise.then((lop) => {
        lop.slice(0, 1).map(function () {
          let users = lop.find((item) => item.id == 5);
          console.log("usersfind using find---", users);
        });
      });

      fetchPromise.then((marvel) => {
        marvel.slice(0, 1).map(function () {
          let find = marvel.findIndex(
            (item) =>
              item.thumbnailUrl === "https://via.placeholder.com/150/d32776"
          );
          console.log("find using findindex---", find);
          console.log("find index---", marvel[find]);
        });
      });

      // fetchPromise.then((execute) => {
      //   execute.slice(0, 1).map(function (n) {
      //     let getusers = execute.includes("url");
      //     getusers.src=n.url

      //     console.log(getusers);
      //   });
      // });
    } catch (error) {
      console.log(error.stack);
    }
  }
}

const xyz = new Fetchcall();
xyz.structer();
