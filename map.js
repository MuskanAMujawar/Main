// const arrFirst=["arbaz",'salman',"xyz","Shahrukh","BigBoss"]
// const result=arrFirst.map((item,index)=>[item]).concat([["afroz"]])
// console.log(result);

// function deleteword(a,b){
//     const del=a.filter((item)=>item!=b)
//         return del
//     }
//  console.log(deleteword([1,2,3,4,5,6,7,4],4))

//  function count (a,b){
//      const cnt=a.forEach(element =>element);
//             return cnt
//  }
//  console.log(count([2000,500,200,100],2500))

//  const array4=[7,5,43,8,9,3,2,1,5]
//  const array5=array4.filter((item)=>item>5)
//  console.log(array5)

//  const array6=["punjab","banglore","nanded","goa"]
//  const array7=array6.filter((item)=>item=="banglore")
//  const array8=array6.filter((item)=>item.startsWith("bang"))
//  const array9=array6.filter((item)=>item.endsWith("ore"))
//  const array10=array6.filter((item)=>item.includes("j"))
//  const array11=array6.filter((item)=>item.indexOf("goa"))
//  console.log(array7,array8,array9,array10,array11)

// const products=[
//     {title:"adidas",size:"7",color:"black"},
//     {title:"adidas",size:"8",color:"red"},
//     {title:"adidas",size:"9",color:"black"},
//     {title:"adidas",size:"10",color:"black"},
//     {title:"adidas",size:"7",color:"black"},
//     {title:"adidas",size:"7",color:"black"},
//     {title:"adidas",size:"7",color:"black"},
//     {title:"adidas",size:"7",color:"black"}
// ]

// function fun (...c){
// let result=c.sort((a,b)=>a>b ? 1:-1)
// return result
// }
// console.log(fun(265,7652,877,5445,232))

const a=[10,20,30,40]
const ab=a.sort((a,b)=>a<b ?1:-1).length-1
 console.log(ab)

 function ss(a){
    if(a==3){
        console.log(4)
    }else{
        console.log(3)
    }
 }
 ss()

 