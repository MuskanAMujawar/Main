// const fir=[1,23,4,6]
// const sec=[5,67,8,7]
// const thr=[10,20,30,40]
// // console.log(fir.concat(sec))
// const final=[...fir,...sec,...thr].sort((a,b)=>a>b ?1:-1)
// console.log(final)

// const aa=[9,08,67,45]
// const ab=[78,42]
// const ac=[54,66]
// const ad=[...aa,...ab,...ac].sort((a,b)=>a>b ?1:-1 )
// console.log(ad)

// const ca=[23,65,67,90]
// const cb=[54,89,78,32]
// const cd=[45,99,33]
// const ce=[...ca,...cb,...cd].sort((a,b)=> a>b ?1:-1)
// console.log(ce)

// const newas=[...ad]
// console.log(newas===ad)

// const newfinal=[...final]
// console.log(newfinal==final)
// console.log(newfinal===final)

// const fir1=[1,2,3,4,5,6,7]
// const sec2=['a','b','c','d','e']
// const thr3=["aa","ab","ac","ad","af","12","13","14","15"]
// const fou4=["aaa","abc","acb","adc","adb"]
// const copy1234=[...fir1,...sec2,...thr3,...fou4]
// console.log(copy1234)

// const a=[1,2,3,4,5]
// const b=[6,7,8,9,10]
// const c=[15,16,17,18,19,20]
// const d=[11,12,13,14]
// d[3]=90
// const abcd=[...a,...b,...c,...d].sort((a,b)=>a>b ?1:-1)
// console.log(abcd)
// console.log(copy1234==abcd)
// const abcdef=[...copy1234,...abcd]
// console.log(abcdef)
// console.log()
//const abcde=abcd.push("happy")
//console.log(abcd.push("happy"))

// const obj1={name:"muskan", city:"kolhapur",education:"msc",age:"23"}
// const obj2={gender:"female",ability: "abled",job:"no"}
// const objj={...obj1,...obj2}
// const newobjj={...objj}
// console.log(newobjj)
// console.log(objj)
// const arra=[23,242,43]
// const arr1=[8,9,112]
// const obj={...obj1,...obj2,...arra,...arr1}
// console.log(obj)

// const o1={a:"one",b:"two",c:"three"}
// const o2={d:"four",e:"five",f:"six",e:true}
// const o12={...o1,...o2}
// console.log(o12)

// const obj3=["university"]
// const obj4=["welcome"]
// const obj5=["shivaji"]
// const obj6=["kolhapur"]
// const obj7=["department"]
// const obj8=["chemistry"]
// const obj9=["to"]
// const obj10=["of"]
// const total=[...obj4,...obj9,...obj7,...obj10,...obj8,...obj5,...obj3,...obj6]
// //console.log(total)
// const newtotal=[...total,...final]
// console.log(newtotal)

// function sum(a,...c){
// console.log(c)
// }
// sum(10,20,30,40,50)

// function some (a,...c){
//     console.log(c)
// }
// some(11,22,33,44,55)

// function suum(a,...c){
// return Number(a) + Number(c)
// }
// console.log(suum(10,20,30,40,50))

// function add (a,...c){
//     return a
// }
// console.log(add(1,3,5,7,9))

// function som(a,...b){
//     let c=b.reduce((acc,cur)=>acc+cur)
//     return a+c
// }
// console.log(som(1,2,3,4,5,6,7))

// function sum (a,...c){
//     let b=c.reduce((acc,cur)=> acc+cur)
//     return a+b
// }
// console.log(sum(1,2,3,4,5))

const suum =(a,b,...c)=>{
let d=c.reduce((acc,cur)=>acc*cur)
return d+a+b
}
console.log(suum(1,2,3,4,5,6,7))

// function addi(a,...c){
//     let d=c.reduce((acc,cur)=>acc>=cur)
//     return a>=d
// }
// console.log(addi(2,4,6,8,10))

// const sad=(a,...c)=>{
//     let d=c.(elem)=>elem
//     return a<d
//     //console.log(d)
// }
// console.log(sad(2,3,4,5,6,7))

// function see (a,b,...c){
//     let d=c.reduce((acc,cur)=>acc*cur)
//     return d+a+b
// }
// console.log(see(2,4,6,8))

// function see (a,b,...c){
//     let d=c.reduce((acc,cur)=>acc*cur)
//     return d*a*b
// }
// console.log(see(2,4,6,8))

// function disc (a,...b){
//     let c=b.reduce((acc,cur)=>acc+cur)
//     return a*c
// }
// console.log(disc(0.1,1000,2000))

// function dis (a,...c){
//     let b=c.reduce((acc,cur)=>acc+cur)
//     return a*b
// }
// console.log(dis(0.025,1000,2000,3000))
// function a1 (a,...b){
//     let a2=b.slice(2,5)
//     return a2+a
// }
// console.log(a1(2,3,4,5,6,7,8,9,10))

// function discount (diss,...cloth){
//     let paid=cloth.reduce((acc,cur)=>acc+cur)
//     return diss*paid
// }


// console.log(discount(0.25,1000,2000,3000,-5000))

// const fat=(cred,...debit)=>{
//     let totall=debit.reduce((acc,cur)=>acc+cur)
//     let disco=totall*cred
//     return totall-disco
// }
// console.log(fat(0.1,1000,2000,5000,2000,3000,1000))

// let discountt=(a,...b)=>{
// let totalll=b.reduce((acc,cur)=>acc+cur)
// let cototall=totalll*a
// return cototall-totalll
// }
// console.log(discountt(0.2,20,15,30,40,20,15))

//   const car=(fuel,av,km)=>km/av*fuel
//  console.log(car(100,20,300))

//  const care=(fuel,carmilage,km)=>km/carmilage*fuel
//  console.log(care(400,20,100))

// // function mod (a,...c){
// //     console.log(a,c)
// // }
// // mod(1,2,3,4,5,6,7)

///////////////            deep and shallow copy            ////////////////

// const objj22={name:"user1",city:"kop"}
//const copy=objj22       //if we assign any object by using (=)operator directly then  it creates shallow copy of that object
//copy.name="saniya"
//console.log(objj22)  //when we change some infor in copy then it will automatic chnage in original
// console.log(copy)        //shallow copy of an object

const objj={name:"muskan", city:"kolhapur", age:"23"}
const obj=objj
obj.education="msc"
console.log(objj)
console.log(obj)


//when we copy any original object by using spread operator then it creates deep copy of an obect
// const spreadcopy={...objj22} 
// spreadcopy.city="nanded"
// console.log(objj22) //when we change some infor in copy then it only change in copy not in original
// console.log(spreadcopy)            //deep copy of object

const abj={name:"saba", city:"nanded", education:"ba"}
const copyabj={...abj}
copyabj.age="23"
console.log(copyabj)
console.log(abj)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const  objx={
//     a: "Amer",
//     b:"Sohel",
//     c:{d:"Nanded",
//        e: "Maharashtra"}
// }
// const copyobj= obj;
// copyobj.c.d="Hirekodi"
// copyobj.c.e="Karnataka"
// console.log(copyobj);
// console.log(obj);

// const copyobj= {...obj};
// copyobj.c.d="Hirekodi"
// copyobj.c.e="Karnataka"
// console.log(copyobj);
// console.log(obj);





