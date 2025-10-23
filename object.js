
// object literals 

const getUgers= {
    First_Name : "mark",
    Second_Name : "Programmer",
    Email_Id : "mark@gmail.com" ,
    Phone_No : "9315733647",
    Address : "delhi",
    Is_LoggendIn :false

}
// console.log(getUgers)
//  console.log(getUgers.Email_Id)
// console.log(getUgers["First_Name"]) // 

getUgers.Email_Id= "marktest@gmail.com"  // change anything using this over ride method 

Object.freeze(getUgers)  // using this freeze never change any object

getUgers.First_Name="arun"

// console.log(getUgers)
 
const instaUser= {}
instaUser.Name="mark"
instaUser.Id="9315"
instaUser.Email="mark@gmail.com"
instaUser.Is_LoggendIn=false

// console.log(instaUser);

const New_InstaUser={
    email: "mark@gmail.com",
    fullname:{ 
        fullname:{
            First_Name:"mark",
            Second_Name:"batman"
        }
    }
}

// console.log(New_InstaUser)

// console.log(New_InstaUser.fullname.fullname.First_Name)

const obj1={1:"a", 2:"b",3:"c"}
const obj2={1:"d", 2:"e",3:"f"}
// const obj3= Object.assign({}, obj1, obj2) // add two object or more using this methods
const obj3= {...obj1, ...obj2}  // mostly use this methods {spred syntax method}
console.log(obj3);