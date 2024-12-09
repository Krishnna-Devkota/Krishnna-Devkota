let input =[10,11,12]
let output = input.map((value,i)=>{
    if (value%2 === 0){
        return value*100
    }
    else {
          return value*0
    }

});
console.log(output);

// input array , output array
/*  
input length should be same as output
[1,2,3] => [2,3,4]

*/