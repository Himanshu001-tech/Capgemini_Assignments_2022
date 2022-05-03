//Solution 1

// class Rectangle{

//   constructor(length, breadth) {
//       this.length = length;
//       this.breadth = breadth;
//   }

//   get getLength(){
//       return this.length;
//   }

//   get getBreadth(){
//       return this.breadth;
//   }

// }
// var rectangle = new Rectangle(7, 6);
// document.write("Rectangle<br>Length: "+rectangle.getLength);
// document.write("<br>Breadth: "+rectangle.getBreadth);

// rectangle = new Rectangle(76, 64);
// document.write("<br><hr>Rectangle properties at Instance 1:<br>Length: "+rectangle.getLength);
// document.write("<br>Breadth: "+rectangle.getBreadth);


//Solution 2
// class Rectangle {
//   constructor(length, breadth) {
//       this.length = length;
//       this.breadth = breadth;
//   }
//   get getLength(){
//       return this.length;
//   }
//   get getBreadth(){
//       return this.breadth;
//   }
// }
// var rectangle = new Rectangle(76, 64);
// document.write("Rectangle Dimensions<br><br>Length: "+rectangle.getLength);
// document.write("<br>Breadth: "+rectangle.getBreadth);

// Rectangle.prototype.getArea = function() {
//   document.write( this.length * this.breadth);
// };


//Solution 3
// class Rectangle {
//   constructor(height, width) {
//       this.height = height;
//       this.width = width;
//   }
//   get getHeight(){
//       return this.height;
//   }
//   get getWidth(){
//       return this.width;
//   }
// }

// var rectangle = new Rectangle(4, 5);
// document.write("Rectangle Dimensions<br><br>Height: "+rectangle.getHeight);
// document.write("<br>Width: "+rectangle.getWidth);

// Rectangle.prototype.getArea = function() {
//   return this.height * this.width
// };

// Rectangle.prototype.height = 50;
// document.write("<br><br>Rectangle Area: " +rectangle.getArea());

//Solution 4
// let name = {firstName: "Allu", lastName: "Arjun"};
//             document.write("Firstname: "+name.firstName);
//             document.write("<br>Lastname: "+name.lastName);

//             name.lastName = "Himanshu";
//             document.write("<br><hr>Updated Lastname: "+name.lastName);

//             name.lastName = "Mann";
//             document.write("<br><hr>Updated Lastname: "+name.lastName);

//Solution 5
// let name = {firstName: "Manvendra", lastName: "Mann"};
// document.write("Firstname: "+name.firstName);
// document.write("<br>Lastname: "+name.lastName);

// name.middleName = "Singh";
// document.write("<br><hr>Middlename: "+name.middleName);

//Solution 6
// var fullName = '({"firstName": "Himanshu", "lastName": "Mann"})';
// var realObject = eval(fullName);
// document.getElementById("eval-function").innerHTML = realObject.firstName+" "+realObject.lastName;

//Solution 7
const bio = '{"firstName": "Dhoni", "age": 40, "city": "Ranchi"}';
const bioObject = JSON.parse(bio);
document.getElementById("json-parse").innerHTML = bioObject.firstName+" "+bioObject.age;

class Person {
  constructor(fname, lname, age, skills, dateOfBirth, address, married, profession) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.skills = skills;
      this.dateOfBirth = dateOfBirth;
      this.address = address;
      this.married = married;
      this.profession = profession;
  }
  get getlname(){
      return this.lname;
  }
  get getfname(){
      return this.fname;
  }
  get getage(){
      return this.age ;
  }
  get getskills(){
      return this.skills;
  }
  get getaddress(){
      return this.address;
  }
  get getmarried(){
      return this.maegetmarried;
  }
  get getdateOfBirth(){
      return this.dateOfBirth;
  }
  get getprofession(){
      return this.profession;
  }
}
var person1 = new Person("nikhil","goud",22,["C"],"24/10/1996",{city:"Hyderabad",pincode:"521185"},false,"sr. analyst");
var person2 = new Person("harish","chinna",21,["HTML"],"08/06/1997",{city:"Ameerpet",pincode:"500038"},false,"jr. analyst");

print = function(){
  console.log(person1);
  console.log(person2);
}();
