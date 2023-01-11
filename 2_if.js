
let a = 2;
let b = 2;

if(a==b){
    console.log("hello world")
}else{
   console.log("bye! world") 
}



// let i = prompt("enter your name")

// let myname  = "uzair"

// if(i == myname){
//     alert("hello sir!")
// }else{
//     alert("enter corect name")
// }

// let user enter their name
// then enter father name
// then enter id
// then login

// let username = prompt("enter your name")
// let fathername = prompt("enetr your father name")
// let id = prompt("enter your id")

// let usname = "talha"
// let fname = "zahid"
// let uid = "12"

// if(username==usname && fathername == fname && id == uid){
//     alert("your welcome you have loged in")
// }else{
//     alert("invalid data")
// }

let username = prompt("enter your name")
let fathername = prompt("enetr your father name")
let id = prompt("enter your id")

let usname = "talha"
let fname = "zahid"
let uid = "12"

if(username != usname){
    alert("incorret username")
}else if(fathername!=fname){
    alert("father name is incorrect")
}else if(id != uid){
    alert("incorrect id")
}else{
    alert("your welcome you have loged in")
}