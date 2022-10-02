class primeNumber {
  constructor(number,getabcolors) {
    this.name = number;
    this.color=getabcolors
  }
  prime() {
    let i, j,
      arr = [];
    for (i = this.name; i <= 100; i++) {
      let IsPrime = 1;
      for (j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
          IsPrime = 0;
          break;
        }
      }
      if (IsPrime == 1) {
        arr.push(i);
      }
    }
    return arr;
  }

  getStructure() {

    let getprimenumbers = this.prime();

    let cell = '<div class="cell-container" id="lbc">';
    getprimenumbers.forEach(function (G) {
      cell += '<div class="cell">' + G + "</div>";
    });
    cell += "</div>";

    let test = cell;

    return test;
  }

  //   getcolors() {

  //     let getcolor = this.getStructure();
  //     lbc.onclick = function (event) {
  //       event.target.style.backgroundColor = "red";
  //       event.target.style.color = "white";
  //     }


  //   }

}


let getvalues = document.getElementById("ppp").addEventListener("click", function () {
  let abvalues = document.getElementById("number").value

  let getcolors = document.getElementById("lbc").addEventListener("click", function (event) { event.target.style.backgroundColor = "red" 

  let myNumber = new primeNumber(abvalues,getcolors);
  document.getElementById("abc").innerHTML = myNumber.getStructure();
})
})

