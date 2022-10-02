let allPrimes = (n) => {
    //Create new n+1 array and mark them as true
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    let primes = [];

    for (let i = 2; i <= n; i++) {
        //if the number is  
        if (isPrime[i] === true) {
            primes.push(i);
        }

        //mark all the numbers divisible i as false
        let next = i * i;
        while (next <= n) {
            isPrime[next] = false;
            next += i;
        }
    }
    let cell='<div class="cell-container"id="jam">';
    primes.forEach(function(G){
        cell+='<div class="cell">'+G+"</div>";
    });
    cell +="</div>";
     
    var test =  document.getElementById("abc").innerHTML = cell;
     

     jam.onClick = function(event){
        event.target.style.background="red";
        event.target.style.color="white";
    }
};

allPrimes(100);




