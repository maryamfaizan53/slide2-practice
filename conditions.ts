let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple");
    break;
  case "banana":
    console.log("Banana");
    break;
  default:
    console.log("Unknown fruit");
}

//for loop
for (let i = 0; i < 5; i++) {
   console.log(i);
 } 
 
 //while loop
 let j = 0;
 while (j < 5) {
   console.log(j);
   j++;
 } 
 
 //do...while loop
 let k = 0;
 do {
   console.log(k);
   k++;
 } while (k < 5);
////rest parameters

 function sum(...numbers: number[]): number {
   return numbers.reduce((total, num) => total + num, 0);
 }
 let final =sum(1,2,5,6,7,8,9,)
 console.log(final)

  