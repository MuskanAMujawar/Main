// const arr=['nanded','parbhani','hyderabad','jalna','aurangabad']
// const result=arr.every((elem)=>elem=="nanded")
// const resul=arr.some((elem)=>elem=="nanded")
// const resu=arr.some((elem)=>elem=="Nanded")
// const res=arr.every((elem)=>elem=="Nanded")
// console.log(result,resul,resu,res)

// const abdulgani=['lubana','muskan','saba','shifa','zahura']
// const abdulgan=abdulgani.every((elem)=>elem=='muskan')
// const abdulga=abdulgani.every((elem)=>elem!='muskan')
// const abdulg=abdulgani.every((elem)=>elem=='mUskan')
// console.log(abdulgan,abdulga,abdulg)

// const mujawar=[ "muskn", "uskan", "mskan", "musan", "mukan"]
// console.log(mujawar.every((elem)=>elem==" "))

// const car=["supra","mercidise","bMw",'mastani','farari','lemborgini','taksi']
// //const sale=car.some((elem)=>elem.toLowerCase()=="bMw".toLowerCase())
// const saleee=car.some((elem)=>elem.toLowerCase().includes("bMw".toLowerCase()))
// const saleeee=car.some((elem)=>elem.toLowerCase().includes("M".toLowerCase()))
// //const salee=car.every((elem)=>elem.toLowerCase()=="bMw".toLowerCase())
// console.log(saleee,saleeee)

// const fruits=["orange","mango","KIWI","orange","pineapple","orange"]
//  function get(a,b){
//      const count=fruits.length-1;
//      fruits.forEach((elem)=>(elem===b&&count))
//      return count;-
//  }
//  console.log(get(fruits,"mango"))

//  function found (fruits){
//     fruits.reduce(function(elem,inde,i){
//          if (inde == "orange")
//          elem.push(i);
//          return elem;
//      },[]);
//  }
//  console.log(found(fruits))



// const count=fruits.indexOf('orange')
// const coun=fruits.indexOf('orang')
// const cou=fruits.indexOf('orange')
// const middle=fruits[Math.floor(fruits.length-3)]
// console.log(middle)
// console.log(count,coun)````

const arr=[0,2,4,6,8,100000,22]

console.log(arr.every((item)=>item/2))
console.log(arr.some((item)=>item/2))
console.log(arr.indexOf(9))








