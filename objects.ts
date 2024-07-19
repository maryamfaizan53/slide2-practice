///......anoynomus or normal object..........................
let me : {name:string, age:number, roleNumber:number}={
    name :"Maryam",
    age :18,
    roleNumber : 1234
}
console.log(me.name);
//.............type aalised object.................
type Me = {
    name:string,
    age:number,
    roleNumber:number,
}
let me1 : Me ={
    name :"Maryam",
    age :18,
    roleNumber : 1234
}
 let me2 : Me ={
    name :"Ali",
    age :28,
    roleNumber : 4363
}
console.log(me.roleNumber)
console.log(me1["age"])
console.log(me2);



//....................Interfaces.....................
interface Person{
    name?:string,    ////ap property do ya no do error nhi ayege
    age?:number,
    roleNumber?:number,
}
let person1 : Person ={
    name :"Haya",
    age :18,
    roleNumber : 1234
}
let person2 :Person={
    age :28,
    roleNumber : 4363,
}
console.log(person1)
console.log(person2.age)

//............type intersection...............................
type user1={
    id:number,
    password:string,
}
type user2 = {
    name:string,
    email:string,
}
type userdetails = user1 & user2
let users:userdetails={
    id:1,
    password:"123",
    name:"Maryam",
    email:"XXXXXXXXXXXXXXXX"
}
console.log(users)
console.log(users.id)

//...................nested objects.............
let office ={
    name:"Ibex",
    branch:3,
    location :{
        country:"Pakistan",
        city:"Karachi",
        area:"Bahadurabad",
    }
    }
console.log(office.location)
console.log(office.location.city)

//......................Optional Chaining.........................
let user: {
    id: number,
    name: string,
    favoriteColor?: string
} = {
    id: 1,
    name: "Maryam",
    favoriteColor:"Bottle Green"
}
console.log(user.favoriteColor);

