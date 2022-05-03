// Solution 1

// const a = 5;

// function add(a, b) {
//     let a = 4;
//     let b = 4;
//     return a + b;
// }
// console.log(a);

// Solution 2
// function vote(a) {
//     if (a < 18) {
//         return "Not eligible"
//     } else {
//         return "ELigible"
//     }
// }
// console.log(vote(70));

// console.log(a);

// Solution 3
// var string = ["James", "Ivan", "Jack"]
// var getValue = function(names) {
//     for (let i = 0; i < string.length; i++) {
//         names = string;
//         console.log("Name: ", names[i], "Length: ", i + 1);
//     }
// };
// getValue();

// Solution 4
// var string = ["James", "Ivan", "Jack"]
// var getValue = function(names) {
//     names = string;
//     console.log("Name: ", names, "Length: ", names.length);
// };
// getValue();

// Solution 5(a)
// function add(a, b) {
//     var a = 5;
//     var b = 6;
//     return a + b
// }
// console.log(add())


// Solution 5(b)
// function userFriends(username, ...arr){
//     console.log(username);
//     for (const iterator of arr) {
//         console.log(iterator);
        
//     }
// }
// userFriends("Akshat",["h","e","r"]);

// Solution 5(c)
// let displayLetter = function(letters) {

//     for (const letter of letters) {
//         console.log(letter.charAt(0).toUpperCase() + letter.slice(1));
//     }
// }

// let letters = ["p", "f", "w", "i", "j"];

// displayLetter(letters)



// Solution 6
// function description(lModel,desk_no,name) {
    
//     let text = {
//             "model":lModel,
//             "no":desk_no,
//             "name":name
//     }
//     console.log(`This is the Model : ${text.model}\n
// This is the NO : ${text.no}\n
// This is the Name : ${text.name}`);
// }
// description("EA12",12,"DELL");

// Solution 7
// let array = [1,2,3,4,];
// let [ , , third , ] = array;
// console.log(third);

// const surr = {
//     "name":"roy",
//     "address":"here",
//     "pincode":1234
// };
// let {   pincode} = surr;
// console.log(pincode);



// Solution 8
// class Accounts{
//      total_Balance;
//     constructor(balance){
//         this.total_Balance = balance;
//     }
//     get Balance(){
//         return this.total_Balance;
//     }
//     deposit(amount){
//         this.total_Balance += amount;
//             console.log("Deposited : $"+ amount);
//             console.log("Total Balance : $"+ this.Balance);
//     }
//     withdraw(amount){
//         if (amount < this.Balance) {
//             this.total_Balance -= amount;
//                 console.log("Withdraw Amount : $"+ amount);
//                 console.log("Remaining Balance : $"+ this.Balance);
            
//         } else {
//             return "Less Cash Present";
//         }
//     }
// }
