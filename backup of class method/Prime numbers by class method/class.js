function demo() {
  let num = document.getElementById("number").value;
  let myNumber = new primeNumber(num);
  document.getElementById("abc").innerHTML = myNumber.getStructure();
}

class primeNumber {
  constructor(number) {
    this.name = number;
  }
    //  demo() {

      // console.log("hdfkjbh",demo())
    // let num = document.getElementById("number").value;
    // console.log("fkhaef--",num)


  //   let myNumber = new primeNumber(document.getElementById("number").value);
  //   document.getElementById("abc").innerHTML = myNumber.getStructure();
  // }
  prime() {
    let i,
      j,
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
    const getPrimeNumbers = this.prime();

    let cell = '<div class="cell-container" id="abcd">';
    getPrimeNumbers.forEach(function (s) {
      cell += '<div class="cell" id="lol">' + s + "</div>";
      onclick = function (c) {
        c.target.style.backgroundColor = "red";
        c.target.style.color = "white";
      };
    });
    cell += "</div>";

    let test = cell;

    // this.getColor();
    return test;
  }

  // getColor() {
  //   const getClick = this.prime();
  //   getClick.forEach(function (abcd) {
  //     onclick = function (abcd) {
  //       abcd.target.style.backgroundColor = "red";
  //       abcd.target.style.color = "white";
  //     };
  //   });

  //   // console.log(getClick)
  //   return getClick;
  // }
}
