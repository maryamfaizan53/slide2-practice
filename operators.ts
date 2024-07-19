import inquirer from "inquirer";


    const input1 = await inquirer.prompt({
    name:"num1",
    type:"input",
    message:"enter your first number"
});
const input2 = await inquirer.prompt({
    name:"num2",
    type:"input",
    message:"enter your second number"
    
});

let total: number = input1.num1 + input2.num2;
console.log("total:" + total);


/// operators..........................................................................
let a:number=5
let b:number=2
let c : number;
//  6      6      1   1      7  0     1   = 22
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c)
/////        3+ 20 = 23
let result = 3+4*5
console.log(result)//23
/// adding calculator
////..............Number guessing game .......................
let guessNumber : number = 8;
let targetNumber: number = 8
if(guessNumber>targetNumber){
    console.log("your guess is too high");
}
else if(guessNumber<targetNumber){
    console.log("your guess is too low");
}
else{
    console.log("you win the game");
}
//.....................BMI CALCULATOR,..............
let weightInKg:number = 70;
let heightInFoot :number=5.3;
let bmi= weightInKg/(heightInFoot*heightInFoot);
console.log(`Your BMI is ${bmi}`);


//..............friend base game..............................
let isFriend : string = "samreen";
if (isFriend === "warda"|| isFriend=== "samreen")
{
    console.log(`${isFriend} is your friend`);
}
else{
    console.log(`${isFriend} is not your friend.`);
}

///........... user prompt..............
//

    //............rock paper scissor game.....................

let player1 :string = "rock";
let player2:string="scissors"
if (player1 === player2){
    console.log("it is a tie");
}
    else if((player1==="rock"&& player2==="scissors")||
    (player1==="scissors"&& player2==="paper")||
    (player1==="paper"&& player2==="rock")){
    console.log("player1 wins");
}
else{
    console.log("player2 wins");
}


    