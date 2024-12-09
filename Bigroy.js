let number = 100 % 5 

if(number == 0) {
    console.log("even number")

}
else{
    console.log ("odd number")
}
 
let side1 = 50
let side2 = 40
let side3 = 30

if( side1 === side2 && side1 === side3){

    console.log("Equiliateral triangle")
}
else if ( side1 === side2 || side1 === side3 || side2 === side3 ){

    console.log("isosceles triangle")
}
else {
    console.log ("scalene triangle")
}
   
for ( let number = 1 ; number <= 50 ; number ++) 
if(number % 2 === 1){

    console.log(number)
}
