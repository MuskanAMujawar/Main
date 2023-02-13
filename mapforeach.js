const arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.map((elem)=>elem+1))
console.log(arr.forEach((elem)=>elem+1))
arr.forEach((elem)=>console.log(elem+1))
arr.map((elem)=>console.log(elem+2))
(arr.forEach((elem)=>console.log(elem+3)))