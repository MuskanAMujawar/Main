
//string is primitive data type
 //it is collection of text stored
 //it defined as "",'',``
 //var str=""''``
 //`` is only for es6
//"" double quotes  literals
//''single quote
//`` bactick dynamic value `${muskan}`

// var str="hello "
// console.log(str)
// var str1='world'
// console.log(str1)
// var str2=`career next`
// console.log(str2)

// var nam="career next"
// var city='parbhani'
// var address=`peer burhan`
//console.log(nam,city,address)
// console.log(nam+","+city+","+address+",")  //usinf concat +operator
//console.log(`${nam},${city},${address}`) //using bacticks es6 new features


//string method

// var str3="welcome to CAREER NEXT, learning academy"
// console.log(str3.length)
// var strlo="WELCOME TO CAREER NEXT LEARNING ACADEMY"
// console.log(strlo.toLowerCase())
// var lo="muSkaN MuJaWaR"
// console.log(lo.toLowerCase())
// console.log (lo.toUpperCase())

// var up="saniya nadeem pathan"
// console.log(up.toUpperCase())
// console.log(up.startsWith("san"))
// console.log(up.endsWith("han"))
// console.log(up.startsWith("nad"))
// console.log(up.startsWith("pa"))
// console.log(up.endsWith("nad"))
// console.log(up.endsWith("sa"))
// console.log(up.endsWith("pa"))
// console.log(up.endsWith("em"))

// var education='msc chemistry chemistry shivaji university kolhapur'
// console.log(education.indexOf("chem"))
// console.log(education.indexOf("chemistry"))
// console.log(education.indexOf("Chemistry"))
// console.log(education.indexOf("hello"))
// console.log(education.lastIndexOf("chemistry"))
// console.log(education.lastIndexOf("shivaji"))

// //concat
// const str1="hello"
// const str2='welcome'
// const str6="to"
// const str4=`career`
// const str5="next"
// console.log(str1.concat(str2," ",str6," ",str4," ",str5))
// const str7=`${str1} ${str2}`
// console.log(str7)

// //trim()
// var str10="                 career next           "
// console.log(str10.trim())

// //split()
// var spl="7030105735"
// console.log(spl.split(''))

// var sp="welcome to career next"
// console.log(sp.split(" "))
// console.log(sp.split(""))

// var s="welcome to  career next"
// console.log(s.split("  "))

// //replace
// var rep="shivaji university"
// console.log(rep.replace("shivaji","nanded"))
// console.log(rep.replace(/university/g, "city")).....................

//charAt
//  var str="welcome to kolhapur shivaji university"
//  console.log(str.charAt(3))
//  console.log(str.charAt(60))
//  console.log(str.charAt(9))

  //var neww="welcome to career next"
//  console.log(neww.charAt(5))
//  console.log(neww.charAt(7))
//  console.log(neww.charAt(70))
//console.log(neww.charAt(-1))

//search
//console.log(str.search("to"))
//  var neww="welcome here career! next shivaji university"
//  console.log(neww.search(" "))
//  console.log(neww.search("e"))
//  console.log(neww.search("co"))
//  console.log(neww.search("z"))
//  console.log(neww.search("here career"))
//  console.log(neww.search("!"))


//match
// console.log(str.match("s"))
// console.log(str.match(/u/g))
// console.log(str.match("x"))

// var neww="muskan abdulgani mujawar"
// console.log(neww.match("muskan"))
// console.log(neww.match(/x/g))
// console.log(neww.match("d"))
// console.log(neww.match(" "))
// console.log(neww.match("mujawar"))
// console.log(neww.match("x"))

//substring & slice
// var strr="javascript is programming language"
// var nstr=strr.substring(5,9)
// console.log(nstr)

// var str="i am muskan i am from kolhapur"
// var ster=str.substring(5,11)
// console.log(ster)
// var st=str.substring(17,21)
// console.log(st)

 //var neww="myself muskan mujawar from kolhapur with msc chemistry from shivaji university"
// var ne=neww.substring(2,8)
// console.log(ne)
// var se=neww.substring(11,15)
// console.log(se)
//  var strn=neww.slice(5,9)
//  console.log(strn)
//  var newt=neww.slice(7,12)
//  console.log(newt)
//  console.log(neww.slice(5))
//  console.log(neww.substring(6))

// var nstrr=strr.substring(5)
// console.log(nstrr)
// var st=strr.slice(5)
// console.log(st)

var stri="zahura pathan muskan shaikh saba khan"
//  var de=stri.substring(-1)
//  console.log(de)
//  console.log(stri.substring(-5))
// // console.log(stri.slice(-1))

//console.log(stri.slice(-10))
// console.log(stri.slice(-5))
// console.log(stri.slice(-10))
// console.log(stri.substring(-1,5))
// console.log(stri.slice(-1,4))

//console.log(stri.substring(1,-5))
//console.log(stri.slice(1,-5))

// console.log(stri.substring(-1,-5))
//  console.log( stri.substring(-1))

// console.log( stri.slice(-1))
// console.log( stri.substring(-1,5))
// console.log( stri.slice(-1,5))
// console.log( stri.substring(5,-1))
// console.log( stri.slice(5,-1))
// console.log( stri.substring(-5,-1))
// console.log( stri.slice(-5,-1))

//substr
// console.log(strr.substr(0,7))
// console.log(strr.substr(7,11))

var here="muskan shaikh zahura pathan lubana fatima saba khan shifa naaz"
console.log(here.substr(3,10))
// console.log(here.substring(0,10))
 console.log(here.slice(0,10))
// console.log(here.substr(0,10))

// console.log(strr.substring(7,11))
// console.log(strr.slice(7,11))

// console.log(strr.substr(0,3))
// console.log(strr.substring(0,3))
// console.log(strr.slice(0,3))

// console.log(strr.substr(3,8))
// console.log(strr.substring(3,8))
// console.log(strr.slice(3,8))

// var a=2345678
// console.log(typeof a)
// var b=a.toString()
// console.log(b)
// console.log(typeof b)

// const a=abdulgani
// console.log(typeof(a))
// const b=a.toString()
// console.log(b)
// console.log(typeof(b))

// console.log()

// var q=4567890
// console.log(typeof q)
// var w=q.toString()
// console.log(w)
// console.log(typeof w)

// var c=true
// console.log(typeof c)
// var d=c.toString()
// console.log(d)
// console.log(typeof d)

// var e=true
// console.log(typeof e)
// var r=e.toString()
// console.log(r)
// console.log(typeof r)














  




