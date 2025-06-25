function squareDigits(num){
  
    // const square = num.map((item) => item ^2)
    // return square
    let str = String(num)
    let joiin = str.split('').join("")
    
    
let squaree = ''
    //const squarii = arr.map((item)=> item*item)
    for(let i=0;i<joiin.length;i++){
     squaree += joiin[i]*joiin[i]
    }
    
    return squaree
}



  console.log(squareDigits(343333))