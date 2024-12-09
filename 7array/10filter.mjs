// return true kita false matra huncha\


let input = [10,11,12,13,14]
let output = input.filter((value,i)=>{
   if (value % 2 === 0){
     return true;

   }
   else {
    return false;
   }
});
console.log(output)
