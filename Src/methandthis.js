
let todo={
    day:'Monday',
    meeting:0,
    Time:10,

    addmeet:function(x){

       
        this.meeting =this.meeting+x
        console.log(this.meeting)
    }
}


todo.addmeet(4)


