function findAverage(array) {
    if(array.length ===0){
        return 0
    }
let reduc = array.reduce((acc,curr) => acc + curr,0)

let aver = reduc/ array.length
return aver
    
}


  console.log(findAverage([1,3,4,2,4,3,4]))