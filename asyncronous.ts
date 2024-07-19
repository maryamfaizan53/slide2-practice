//...............asyncrounous function washing..........................
function washing(){
    console.log("Washing started");
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Washing finished")
        },3000)
    })
    
}
//...............asyncrounous function soakind.........................
function soaking(){
    console.log("soaking started");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Soaking finished")
        },2000)
    })

}
//...............asyncrounous function drying..........................
function drying(){
    console.log("Drying started");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Drying finished")
        },4000)
    })

}
washing()
.then((val)=>{
    console.log(val);
    return soaking()
    .then((val)=>{
        console.log(val)
        return drying()
        .then((val)=>{
            console.log(val)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            console.log("Thank you")
        })
    })
})


//...............async await function.............................................................
async function washingProcess (){
    try{
        const results1 = await washing();
        console.log(results1);
        const results2 = await soaking();
        console.log(results2);
        const results3 = await drying();
        console.log(results3);
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("Thank you")
    }
}
washingProcess();