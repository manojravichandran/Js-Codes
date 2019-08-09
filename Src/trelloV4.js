let cars=['benz','audi','tesla','hundai']

//console.log(cars.indexOf('audi'))



const newtodo=[{
title:'wake',
time:2
},
{

    title:'ride',
    time:1
},
{
    title:'bake',
    time:3
},12]

// let ans=newtodo.findIndex(function(todo) //check everytime
// {
//     console.log(todo)
//     if( todo.title==='bake')
//     {
//         return todo.title
//     }
// })
// console.log(ans)

//checking by sending list and element

// console.log(newtodo.indexOf(12))
// console.log("found")
// const check=function(list,elementa)
// {
//     const position=list.findIndex(function(list)
//     {
//         console.log(list)
//         if( list.title===elementa)
//         {
           
//             console.log(list)
//             return list
//         }
//     })
 
//     return position
// }

// let anss=check(newtodo,'bake')
// console.log(anss)

///////////////            keyword find 



// const finder=function(list,element)
// {
//     const elements=list.find(function(iterator)
//     {
//         if(iterator.title===element)
//         {
//             return iterator.title
//         }
//     })

//     return elements
// }

// let ans=finder(newtodo,'bake')

// console.log(ans)

let a=[1,2,3,4,5]

let position=a.findIndex(function(a)
{
return a==2
}
)

console.log(position)
