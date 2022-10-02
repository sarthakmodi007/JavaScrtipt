function demo() {

    let num = document.getElementById("number").value;
    let IsPrime;

    for (let i = num; i < 100; i++) {
        IsPrime = 1;

    }

    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            IsPrime = 0;
            break;

        }
    }


    if (IsPrime == 1) {
        let xyz = [];
        xyz.push(i);

        let cell = '<div class="cell-container" id="jam">';
        xyz.forEach(function (G) {
            cell += '<div class="cell" id="pop">' + G + "</div>";
        });
        cell += "</div>";

        document.getElementById("lbw").innerHTML = cell;

        jam.onclick = function (event) {
            event.target.style.backgroundColor = "red";
            event.target.style.color = "blue";
        }
    };


}



