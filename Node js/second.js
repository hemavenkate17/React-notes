

const fun=function(){
    return "hey there"
}

const take=function(){
    return{
        eat: function(){console.log("eating")},
        sleep: function(){console.log("sleeping")}

    }
}

module.exports = {greet: fun,activity: take}

module.exports.store ={
    sno:1,
    name: "hema",
    city: "mumbai"
}