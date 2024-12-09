let input = ["n","i","I","a"]
let output = input.map((value,i) =>{
    if (i === 0){
        return value.toUpperCase()
    }
    else if (value === value.toLowerCase()){
        return value.toUpperCase()
    }
    else if (value === value.toUpperCase()){
        return value.toLowerCase()
    }
});
console.log(output);