//Solution 1

// function square (x){
// 	return x*x;
// }
// function double (x){
// 	return x*2;
// }
// const y =(a,b) => (data) => a(b(data));

// const u = y(square,double);
// console.log(u(5));

//************************************************************************************ */
//Solution 2


// Solution 3
// function isEven(num) { return(num%2 == 0); }
// function find(a){
// 	for(i=0; i<a.length;i++){
// 		if(isEven(a[i])){
// 			return a[i];
// 		}
// 	}
// }
// console.log(find([1, 3, 5, 4, 2]));


//solution 4
// function bingo(v){
// 	return v*v;
// }

// function map(a,fun){
// 	let arr = [];
// 	for(i=0; i<a.length;i++){

// 		arr.push(fun(a[i]));
// 	}
// 	return arr;
// }
// console.log(map([1, 3, 5, 4, 2], bingo));
// console.log(map([1, 9, 25, 16, 4], Math.sqrt));



//Solution 5
// function isEven(num) { return(num%2 == 0); }
// function find1(a,fun){
// 	var b= a.shift();
// 	if(fun(b))
// 		{return b;}
// 	if(a.length===0){return "not found";}
// 	else {return find1(a,fun);}
	
// }
// console.log(find1([1, 4, 9, 2, 7],isEven));


//Solution 6
// function bingo(v){
//      	return v*v;
//      }
// var arr1=[];
// function map1(a,fun){
// 	arr1.push(fun(a.shift()));
// 	if(a.length===0){return arr1;}
// 	else {return map1(a,fun);}
// }
// console.log(map1([1, 3, 5, 4, 2], bingo));
// var arr1=[];
// console.log(map1([1, 9, 25, 16, 4], Math.sqrt));

// Solution 7
var anonymousFunction = function(x){return x*x;}
            document.write("Anonymous Function: "+anonymousFunction);
