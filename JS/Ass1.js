//Solution 1

// const number = parseInt(prompt('Enter a positive integer: '));

// let sum = 0;

// for (let i = 1; i <= number; i++) {
//     sum += i;
// }

// console.log('The sum of natural numbers:', sum);

//Solution 2
// const number = parseInt(prompt('Enter a positive integer: '));

//  let sum = 0;

//  for (let i = 1; i <= number; i++) {
//      if(i%3==0 && i%5==0){
//      sum += i;}
     
//  }

//  console.log('The sum of natural numbers:', sum);

//Solution 3

// function eo(a){
//     if(a%2==0){
//         console.log("Even Number..");
//     }else{
//         console.log("Odd Number..")
//     }
// }
// eo(6);


//Solution 5
// var year = prompt("please input a year to find out the next 20 years");
// var counter = 20;
// var result=true;


// function leapYear(year, counter, result) {
//     while (counter >= 0) {

//         if ((year % 4 === 0) && (year % 100 !== 0)||(year % 400 === 0)) {
//             result = true;
//             console.log(year);
//             year++;
//             counter--;
//         }
//         else{
//         year++;
//         }    
//     }
// }

//Solution 6

// var x = "Hello\nWorld\nin\na\nframe";

// function star(str) {
//   let arr = [];
//   arr = str.split("\n");
//   for (let index = 0; index < 1; index++) {
//     console.log("*******");
//     for (let j = 0; j <= arr.length; j++) {
//      arr == arr[j].split(",");
//       console.log("*" + arr[j] + "*" );
//     }
//   }
//   console.log("******");
//   return arr;
// }
// console.log(star(x));

//Solution 7


// function curr(a){
//     console.log(a*74.28 +"INR");
//     console.log(a*109.14+"YEN");
//     console.log(a*0.84+"EURO");
//     console.log(a*0.72+"Pound Sterling");
// }

// curr(1);

//Solution 8

// const array1 = ['a', 'b', 'c'];
// const array2 = [1,2,3];
// const array3 = array1.concat(array2);

// console.log(array3);


// Solution 9
// var list_two = [1,3,5];
// var list_one = ['a','b','c'];
// var array = [];
// var array_length = list_one.length+list_two.length;
// let j=0,k=0;
// for (var i = 0; i < array_length; i++) {
//   if(i%2 == 0) {
//     array[i] = list_one[k++]
//   }else{
//     array[i] = list_two[j++]
//   }
// }
// console.log(array)

//Solution 10


// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }


//Solution 11
// let numbers = [1, 2, 3, 4, 5];
// let reversedNumbers = numbers.reverse();

// console.log(reversedNumbers);


//Solution 12
// function longestToken(s){
//     var max=0;
//     var start=0;
//     var end=0;
//     var i=0;
//     for(x=0;x<s.length;x++){
//         if(s[x]=='a' || s[x]=='b'){
//             len=x-i;
//             if(max<len){
//                 max=len;
//                 start=i;
//                 end=x;
//             }
//             i=x+1;
//         }
//         if(x==s.length-1 && s[x]!='a' && s[x]!='b'){
//             len=x+1-i;
//             if(max<len){
//                 start=i;
//                 end=x+1;    
//             }
//         }
//     }
//     return s.slice(start,end);
// }


// document.write(longestToken("abafdsgbbabagfabababarftggfhfgdhfhf"));

//Solution 13
// var a=[1,2,3,4,5,6,7,8,9,10];
// var fsum=0, wsum=0; dsum=0;
// for(i=0; i<a.length; i++)
//     fsum+=a[i];
// var i=0;
// while(i<a.length){
//     wsum+=a[i];
//     i++;
// }

// i=0;
// do{
//     dsum+=a[i];
//     i++;
// }while(i<a.length);

// if(fsum==wsum && fsum==dsum)
//     document.write("The sum of numbers in array calculated by using three differnet loops is equal: "+fsum);


//Solution 14
// function countOdd(a){
//     var c=0;
//     for(i=0;i<100;i++){
//         if(a[i]%2)
//             c++;
//     }
//     return c;
// }

// function countEven(a){
//     var c=0;
//     for(i=0;i<100;i++){
//         if(a[i]%2==0)
//             c++;
//     }
//     return c;
// }

// function sum(a){
//     var s=0
//     for(i=0;i<100;i++){
//         s+=a[i];
//     }
//     return s;
// }

// x=[]
// for(i=0;i<100;i++)
//     x.push(Math.floor(Math.random() * 1000));
// document.write("Largest Number is "+Math.max(...x));
// document.write("<br><br>Smallest Numer is "+Math.min(...x));
 
// var o=countOdd(x);
// var e=countEven(x);

// if(o>e)
//     document.write("<br><br>There are more odd numbers with count: "+o)
// else
//     document.write("<br><br>There are more even numbers with count: "+e)

// document.write("<br><br>The sum of numbers is "+sum(x)+" and average is "+(sum(x)/100));



//Solution 15

// function bubble(a){
//     for(i=0; i<20-1; i++){
//         for(j=0; j<20-i-1; j++){
//             if(a[j]>a[j+1]){
//                 a[j]=a[j]+a[j+1];
//                 a[j+1]=a[j]-a[j+1];
//                 a[j]=a[j]-a[j+1];
//             }
//         }
//     }
//     return a;
// }

// x=[];
// for(i=0;i<20;i++)
//     x.push(Math.floor(Math.random() * 100));

// document.write("Array before sorting: "+x);
// document.write("<br><br>Array after sorting: "+bubble(x));

//Solution 17
// function rotate(a, k){
//     for(i=0; i<k; i++){
//         a.push(a.shift());
//     }
//     return a;
// }

// var a=[4,9,3,2,4,7,6,5];
// document.write(rotate(a,4));


//Solution 18
// function latin(s){
//     var a= s.split(" ");
//     for(i=0;i<a.length;i++){
//         var l=a[i][0]+"ay";
//         a[i]=a[i].slice(1)+l;
//     }
//     return a.join(" ");
// }

// document.write(latin("The quick brown fox"));


//Solution 19



