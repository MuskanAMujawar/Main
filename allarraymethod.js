// // const javascript=["JavaScript", "was", "initially", "created", "to", "make", "web", "pages", "alive" ,"The", "programs", "in", "this", "language", "are", "called", "scripts", "They", "can", "be", "written", "right", "in", "a", "web", "pages", "HTML", "and", "run", "automatically", "as", "the", "page", "loads"]
// // console.log(javascript.pop())
// // javascript.pop()
// // console.log(javascript)
// // let java2=javascript.pop()
// // console.log(java2)
// const first=[1,2,3,4,5,6]
// const newfir = first.map((elem)=>elem-1).filter((ele)=>ele>2).reduce((a,c)=>a+c)
// console.log(newfir)

// // const arr=[1,2,3,4,5,6,7,8,9,19,11,12,13,14,15,16,17,16,19,22]
// // console.log(arr.pop())    o=22  last element show
// // ------------------
// // arr.pop()    complete array without last index
// // console.log(arr)  o=[1,2,3,4,5,6,7,8,9,19,11,12,13,14,15,16,17,16]
// // -----------------------
// // let arr1=arr.pop()  last index show 
// //  console.log(arr1)  o=16 
// //  ----------------------

// //push
//  //console.log(arr.push("54")) o=21 show length  
//  //arr.push("34")
//  //console.log(arr) o=[1-22,54,34] complete array with new element
// // let arr2=arr.push("78")
//  //console.log(arr2) o=23 show length

// //shift
//  //console.log(arr.shift())   show first element only o=1
//  //arr.shift() o=[3-22]
//  //console.log(arr)  complete array without first index
//  //let arr3=arr.shift()  //show fist element only o=3
//  //console.log(arr3)

// //unshift
// // console.log(arr.unshift()) o=20 show length
// // console.log(arr.unshift(90)) o=21 show length with addition of new element
// // arr.unshift(45)  o=[45,90,1-22] complete array with new element on first index
// // console.log(arr)
// // let arr4=arr.unshift() o=22 show length
// // console.log(arr4)

// //slice
// // console.log(arr.slice(8,18)) o=[9-16] copy numbers from index number to index+1 
// // arr.slice(4,12)  does not effect o=complete array
// // console.log(arr)
// // let arr5=arr.slice(6,15) correct output as expected o=
// // console.log(arr5)

// //splice
// //console.log(arr.splice(3,8))
// //arr.splice(3,8)
// //console.log(arr)
// //let arr6=arr.splice(3,8)
// //console.log(arr6)

// //splice+word
// //console.log(arr.splice(3,8,78))
// //arr.splice(3,8,"hi")
// //console.log(arr)
// //let arr6=arr.splice(3,8,"ok")
// //console.log(arr6)

// //fill
// //console.log(arr.fill(25))
// //arr.fill (120)
// //console.log(arr)
// //let arr7=arr.fill(55)
// //console.log(arr7)
// //let q=new Array(10)
// //console.log(q.fill("muskan"))

// //filter
// //console.log(arr.filter((elem)=>elem==2))
// //console.log(arr.filter((elem,index)=>elem!=5&&elem!=6))
// //qq=arr.filter(((ele)=>ele==6))
// //console.log(qq)

// //find
// //console.log(arr.find((elem,ind)=>elem==6))
// //arr.find((elem,inde)=>elem==5)
// //console.log(arr)
// //aa8=arr.find((elem,ind)=>elem==16)
// //console.log(aa8)

// //reduce
// //console.log(arr.reduce((acc,cur)=>acc+cur))
// //arr.reduce((acc,cur)=>acc*cur)
// //console.log(arr)
// //aa9=arr.reduce((acc,cur)=>acc+cur)
// //console.log(aa9)

// //const arr=['apple','mango','banana','orange','lemon','kiwi','pineaple','dragon']
// //console.log(arr.splice(2))
// //console.log(arr.splice(0,2))
// //console.log(arr.splice(1,2))
// // console.log(arr.splice(1,3))
// //arr1=arr.splice(1,4)
// //console.log(arr1)

// //const a=[1,2,3,4,5,6,7,8,9]

// //const a="23478122"
// //const b=a.split(" ").reduce((acc,cur)=>acc.Number==cur.Number)
// //const b=a.split(" ").reduce((acc,cur)=>acc.Number+cur.Number)
// //const b=a.split(" ")
// //const c=b.reduce((acc,cur)=>Number(acc)+Number(cur))
// //console.log(b)
// //console.log(typeof b)

//  const c=[4,5,6,7,9,3,4,5]
//  const result=c.map((elem)=>elem*2)
//  console.log(result)

//  const filt=c.forEach((elem)=>elem*2)
//  console.log(filt)

//  //c.forEach(console.log((ele)=>ele*2))

//  console.log(c.forEach((ele)=>ele*2))