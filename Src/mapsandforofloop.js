

///        maps



var student={
    name:"mj",
    age:19,
    gender:"male"
}

var techer={
    name:"ab",
    age:39,
    gender:"male"
}
var police={
    name:"siva",
    age:30,
    gender:"male"
}



let user=new Map()

user.set('a',student)

user.set('b',techer)

user.set('c',police)

// let x=user.size ///big advantage of objects
// console.log(x)
// console.log(user.get('a'))
//console.log(user.values()) //prints all

// for( let [x,y] of user.entries()) //because of object
// {
//     console.log(x)
//     console.log(y.name)
// }
user.forEach(function(x,y)
{
    console.log(x.name)  //set
    console.log(y) //index
})
