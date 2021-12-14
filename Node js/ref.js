const fs = require("fs")
const second = require("./second")
//utf-8 to read char ..by default in binary
fs.readFile("package.json","utf-8",function(err,data){
    if(err)
     console.log("unable to read file")
     else
      console.log(data)
})

second.activity().eat()
second.activity().sleep()
console.log(second.greet())
console.log(second.store)

console.log("after attempting to read file")

console.log("still running")