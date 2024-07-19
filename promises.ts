let result = false;
const examsResult  = () => {
    return new Promise((resolve, reject) => {
        if (result){
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
//examsResult()
async function getResult() {
    try{
    const ans = await examsResult()
    console.log(ans)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Thank you")
    }
    }
    getResult();
    
        
