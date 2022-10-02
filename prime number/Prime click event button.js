function demo() {
  let num = document.getElementById("number").value;
  let IsPrime;
  let xyz = [];

  for (let i = num; i < 100; i++) {
    IsPrime = 1;

    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        IsPrime = 0;
        break;
      }
    }

    

    if (IsPrime == 1) {
      xyz.push(i);
    }  
  }
      let cell = '<div class="cell-container" id="lbc">';
      xyz.forEach(function (g) {
        cell += '<div class="cell">' + g + "</div>";
      });
      cell += "</div>";
      
     var test =  document.getElementById("abc").innerHTML = cell;
     console.log("text----", test)
    

     lbc.onclick = function (event) {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
    };
  }

