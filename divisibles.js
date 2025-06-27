function divisibleBy(numbers, divisor){

 const divs = numbers.filter((item)=>item%divisor === 0)

 return divs
}


 
 console.log(divisibleBy([1,3,46,74,55,43,6,0],2))