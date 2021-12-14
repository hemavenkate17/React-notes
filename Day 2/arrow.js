//anonymous function

add=function(a,b){
    return a+b
}

sum=function(a,b){
    console.log("line 1 is running")
    console.log("Sum is",a+b)

}

console.log(add(2,3))
sum(2,3)

//left side params ..right side return value...
plus=(a,b)=>a+b

addition= (a,b)=>{
    console.log("line 1 is running")
    console.log("Sum is",a+b)

}
console.log(plus(5,6))
addition(5,6)
