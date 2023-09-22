// for loop 




// let a = prompt("ENETER A number")
// a = Number(a)
// for( let i = a ; i<20; i++){
//     console.log("vasu")
// }


//  while loop

// let a = prompt("Eneter a number")
// a = Number(a)
// //  let b = 0
// do {
//     console.log("vasu")
//     a++
// } while (a < 20)


//  do while  loop

// do {
//     console.log("vasu")
//     a++
// } while (a < 20)


              // function
// function abcd(a,b,c ){
//     console.log("the total")
//  return a+b+c

// }
// console.log( "the total of laber " ,abcd(1,2,3))
// console.log( "the total of laber " ,abcd(2,2,3))
// console.log( "the total of laber " ,abcd(3,2,3))



//  call back function 
// function callback(sum){
//     num = sum/2
//     return num


// function printresult(result){
//     console.log(result/2)
// }

// function sum ( a,b,callback){
//      let num = a+b
//      callback(num)   
// }

// sum (1,3,printresult)

// setTimeout(function (){ 
//     console.log("this is a vasu")
// },2000)







//        recursive function
// function vasu (num){ 
//     console.log(num)
//     num++
//     if(num<=20){
//         vasu(num)
//     }
// }
// vasu(10)



//        foreach
// let a = [1,3,4,223,4,33]

// a.forEach(function (value){
//     console.log(typeof value)
// })





//      for in 
//  let clint = 
//  { name:"vasu",
//    age: 13,
//    work: "coding"
// }

// for(let key in clint){
//      clint.name = 15
//     console.log([13].clint)
// } 



//     first class function 

//  let a =function birla (){
//      console.log("word")
    
// }


//     first class function 

// function a (){ 
//     return "hello"
// }

// function d (hellomass,d){ 
//     console.log(hellomass(),d)
// }

// d(a,6)


//    constructore function
// function User(a,b,c) {
//     this.name = 'Bob';
//     this.valu = a
//     this.b = b
//     this.c = c
//     }
    
//     var user1 = new User(1,3,3);
//     var user2 = new User();

//     console.log(user1)


//    constructore and newkey word  function

function makeme (color,age){
    this.name = "vasu"
    this.age = age
    this.color= color
}

const abcd = new makeme("red",14)


