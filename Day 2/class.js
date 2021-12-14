function Person(sno,name){
    this.sno=sno
    this.name=name
}

Person.prototype.display=function(){
    console.log(this.sno,this.name)
}
obj1= new Person(12,'hema')
obj2= new Person(13,'vino')
obj1.display()
obj2.display()
