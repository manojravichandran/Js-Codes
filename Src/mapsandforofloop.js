

///        maps



var student={
    name:"manoj",
    age:19,
    sex:"male"
}

var techer={
    name:"mada",
    age:39,
    sex:"male"
}
var god={
    name:"siva",
    age:0,
    sex:"male"
}

let user=new Map()

user.set('a',student)

user.set('b',techer)

user.set('c',god)

// let x=user.size ///big advantage of objects
// console.log(x)
// console.log(user.get('a'))
//console.log(user.values())

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
