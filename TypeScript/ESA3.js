// Solution 1

// let p = Promise.resolve(
//     Math.floor(Math.random() * 10)
// )

// // generating Q
// let q = Promise.resolve(
//     Math.floor(Math.random() * 10)
// )

// // PROMISE.ALL
// Promise.all([p,q]).then(values => {
    
//     // logging generated values
//     console.log(`The generated values : ${values}`);
    
//     // logging the sum
//     console.log(`Sum : ${values[0] + values[1]}`);
// }).catch((message)=>{
//     console.log(`Error while processing...`);
// })

// Solution 2
// class Accountss{
//      total_Balance= number;
//     constructor(balance= number){
//         this.total_Balance = balance;
//     }
//     get Balance(){
//         return this.total_Balance;
//     }
//     deposit(amount=number){
//         this.total_Balance += amount;
//             console.log("Deposited : $"+ amount);
//             console.log("Total Balance : $"+ this.Balance);
//     }
//     withdraw(amount=number){
//         if (amount < this.Balance) {
//             this.total_Balance -= amount;
//                 console.log("Withdraw Amount : $"+ amount);
//                 console.log("Remaining Balance : $"+ this.Balance);
            
//         } else {
//             return "Less Cash Present";
//         }
//     }
// }

// // savings account
// class Savings_Account extends Accountss{
//      interest =number = 0.05;
//     getAfterInterest(){
//         console.log("After Interest Added : $"+(this.Balance + (this.Balance*this.interest)));
//     }
// }

// // current account
// class Current_Account extends Accountss{
//      cashCreditR =number = 5.00;
//     cashCredit(){
//         console.log("After Cash Credited : $"+(this.Balance - ((this.Balance * 0.02) - this.cashCreditR)));
//     }
// }

// // objects 1
// let savingss = new SavingsAccount(1000);
// savings.deposit(500);
// savings.withdraw(100);
// savings.getAfterInterest();
// console.log("=========================================");
// let checkingg = new CurrentAccount(2000);
// checking.deposit(600);
// checking.withdraw(100)
// checking.cashCredit();

// Solution 3

// interface Printable{
//     name:string;
//     type:string;
//     dept?:string;
//     area?:number;
// }

// IMPLEMENTATIONS
// class Employee implements Printable {
//     name;
//     type;
//     dept;
//     constructor(NAME: string, TYPE: string,DEPT: string) { 
//                 this.name = NAME;
//                 this.type = TYPE;
//                 this.dept = DEPT;
//     }
//     getDetails(){ 
//        return{
//          Employee_Name : this.name,
//          Employee_Type : this.type,
//          Employee_Department : this.dept  
//        }
//     }
// };
// class Circle implements Printable {
//     name;
//     type;
//     area;
//     constructor(NAME: string, TYPE: string,AREA: number) { 
//                 this.name = NAME;
//                 this.type = TYPE;
//                 this.area = AREA;
//     }
//     getDetails(){ 
//        return{
//          Circle_Name : this.name,
//          Circle_Type : this.type,
//          Circle_Area : this.area  
//        }
//     }
// }

// // for employee
// let e = new Employee("Kartik","Manager","Marketing");
// console.log(e.getDetails());

// // for circle
// let c = new Circle("Big Circle","Big-O",1212212);
// console.log(c.getDetails());