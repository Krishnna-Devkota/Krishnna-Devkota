// "niTAN" === "Nitan"
let input = "niTAN"
let output = input.split("");

let output1 = output.map((value,i) => {
    if (i === 0 ) {
        return value.toUpperCase();
    }
    else {
        return value.toLocaleLowerCase();
    }

 });

let output2 = output1.join("");
console.log(output2);

