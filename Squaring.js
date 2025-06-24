function squareDigits(num){
  
    // const square = num.map((item) => item ^2)
    // return square
    let str = String(num)
    let joiin = str.split('').join(",")
    let pow = parseInt(joiin)

    ///const squarii = pow.map((item)=> item*item)
    
    return pow 
}



  console.log(squareDigits(34))