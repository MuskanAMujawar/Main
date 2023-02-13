const obj={name: "muskan", city:"kolhapur",age:23, education:"msc"}
// console.log(obj.age)
// console.log(obj)
// const objectt= obj["city"]="nanded"
// console.log(objectt)
// obj.age=25
// console.log(obj)
obj.city="nanded"
console.log(obj)
obj.name="arbaz"

console.log(obj)
obj.age=25
console.log(obj)
obj.education="bcom" //change keyword
console.log(obj)
console.log(obj.city)
obj["country"]="india"   //add extra info
console.log(obj)
obj.address="hirekodi"
console.log(obj)

const fullname={
    firstname:"muskan",
    middlename: "Abdulgani",
    lastname:"Mujawar"
}
fullname.firstname="arbaz"
console.log(fullname)
fullname["middlename"]="munaf"
console.log(fullname)
//fullname[2]="mulla"
//console.log(fullname)
fullname.middlename="atik"
fullname.firstname="ayan"
fullname.lastname="mujawar"
console.log(fullname)

fullname.gender="male"
console.log(fullname)

fullname["firstname"]="saniya"
console.log(fullname)
fullname["middlename"]="nadeem"
console.log(fullname)
fullname["lastname"]="pathan"
console.log(fullname)
fullname["gender"]="female"
console.log(fullname)

fullname.education="msc chemistry"
fullname.internship="gokul milk dairy"
fullname.collegename="rajaram college"
fullname.universityname="shivaji university"
fullname.dateofbirth=21_09_1999
console.log(fullname)

delete fullname.internship
console.log(fullname)

const a=[{name:"xyz",city:"kolhapur"},{name:"abc",city:"nanded"}]
console.log(a[1].city)