// two type  of data type 

//const { use } = require("react")

//const { use } = require("react")

// 1.  primitive data type 
// 7 type of primitive data type 
//  1. string 2. numbers 3. boolean 4. null 5. undefine 6. symbol 7. BigInt


// None Primitive data type OR Reference

//  three type of None primitive data type  

//   Array Object function

// =========================================================================================================================================================================//

 //   STACK  defination  
  let user1="mark"
  let user2=user1
  user2="batman"
  console.log(user1)
 console.log(user2)


//======================================================================================================================================================

// HEAP  

let userEmail= {
    email: "mark@gmail.com",
    upid: "upiid123@"
}

let userEmailTwo=userEmail
userEmailTwo.email="batman@gmail.com"

console.log(userEmail.email)
console.log(userEmailTwo.email)