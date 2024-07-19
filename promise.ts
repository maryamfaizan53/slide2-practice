//asyncrounous functiler \
let Result = false;
const examsResult  = () => {
    return new Promise((resolve, reject) => {
        if (Result){
            setTimeout(()=>{
                resolve("Congratulations!! You are awesome");
            },3000)

        }
        else{
            setTimeout(()=>{
                reject ("You are average");
            },3000)
        }
        
    })

}
examsResult()

.then((res)=>{
    console.log(res)
    return("You got 100% scholorship");
    
})
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    return ("Try again later for scholorship")
})
.then((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Thank you")
})