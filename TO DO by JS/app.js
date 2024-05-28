// console.log("hello");
// for (let i = 1; i<=5 ; i++) {
//     console.log(i); 
// }
// for (let a=5; a>=1; a--) {
//     console.log(a);
// }
// let i=1;
// for (let i=1; i<=15; i++) {
//     if(i%2!=0){   //using if
//         console.log(i);
//     }
// }
// for (let i=1; i<=15; i=i+2){
//     console.log(i);
// } 

// console.log("backwards");

// for (let i=15; i>=1; i=i-2){
//     console.log(i);
// }

// console.log("EVEN NUM");

// for (let i=2; i<=10; i=i+2){
//     console.log(i);
// } 
// for(let f=5; f<=50; f=f+5){
//     console.log(`5xA=${f}`);
// }

// let n = prompt("write number:");
// n = parseInt(n);
// for (let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }
``
// let i = 2;
// while (i<=20){
//     console.log(i);
//     i = i+2;
// }

//********guess movie name
// const favMovie = "avatar"; //prompt("tell ur favorite movie");
// let guess = prompt("guess my favourite movie");
 
// while((guess != favMovie) ){
//     if(guess == "quit"){
//         alert("you quit");
//         break;
//     }
//     guess = prompt("wrong answer.please try again!");
// }

// if(guess == favMovie){
//     alert("congrats!!");
// } 

// let cars = ["bmw", "ferrari", "xuv", "honda"];
// cars.push("mercedes");

// for(let i = 0; i<cars.length; i++){
//     console.log(i, cars[i]);
// }

// for (let i = cars.length-1; i >= 0; i--){
//     console.log(i, cars[i]);
// }


//nestes loops for nested arrays
// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder woman", "flash"]
// ];

// for (let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for (let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let student = [["rs",10], ["aouf",92], ["amaan",96]];
// for (let i=0; i<student.length; i++){
//     console.log(`info of liet students ${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

//for of loop
// let names = ["rayyan","affan","aziz","hadiya"];
// for (nam of names) {
//     console.log(nam);
// }

// for(char of "raqeeb") {
//     console.log(char);
// }



//************ TO DO 
let todo = [];
let req = prompt("please enter ur request!!!");
while (true) {
    if(req == "quit") {
        console.log("quitting todo");
        break;
    }

    if(req == "list"){
        console.log("------------");
        for(let i=0; i<todo.length; i++) {
            console.log(i,todo[i]);
        }
        console.log("------------");
    } else if (req == "add") {
       let task = prompt("please enter task to add");
       todo.push(task);
       console.log("task added!");
    } else if (req == "delete") {
        let idx = prompt("please enter idx  to delete");
        todo.splice(idx,1);
        console.log("deleted!");
    } else {
        console.log("wrong request")
    }

     req = prompt("please enter ur request");

}


//ass qs 
//1
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for (let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }   
// }
// console.log(arr);

//2
// let number = 287152;
// let count = 0;

// let copy = number;
// while(copy>0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// 3
// let number = 786;
// let sum = 0;
// let temp = number;
// while (temp>0) {
//   digit = temp%10;
//   sum += digit;
//   temp = Math.floor(temp/10);
// }
// console.log(sum);

//4
// let n=7;
// let fact=1;
// while (n>0) {
//     fact *= n;
//     n = n-1;
// }
//console.log(sum);

//5
// let arr = [2,4,5,1,9,8,10];
// let largest = 0;
// for (let i=0; i<arr.length; i++ ) {
//     if(largest<arr[i]) {
//         largest=arr[i];
//     }
// }
// console.log(largest);