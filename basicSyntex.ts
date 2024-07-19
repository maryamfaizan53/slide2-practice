///practice q1
async function delay() {
    setTimeout(()=>{
        console.log("Hello World!")
    },4000)
    
}
delay()
///q2///simple calback
function add(num1:number,num2:number,callback:any){
    console.log(num1+num2)
    callback()
}
add(2,5,hello)
add(2,8,hi)
add(5,5,()=>{
    console.log("bye")
})
function hello(){
    console.log("hello")
}
function hi(){
    console.log("hi")

}


///promises
function myFile(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("done")
        },4000)
        
    })
}
myFile()
.then((res)=>{
    console.log(res)
});