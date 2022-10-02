    //    *
    //   **
    //  *** 
let star = "";
let number = 10;

for (let i = 0; i <= number; i++) {
    

    for (let j = 0; j < number-i ; j++) {

        star += " ";
        
    }
    
    
    for (let lmv = 0; lmv < i; lmv++) {
        
        star += "*"; 
    }

    star += "\n";
}

console.log(star);
// let x = "sarthak"
// document.getElementById('test').innerHTML = star;