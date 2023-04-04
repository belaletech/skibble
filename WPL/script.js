// Simple function
function student(name, Section, RollNo) {
  this.name = name;
  this.Section = Section;
  this.RollNo = RollNo;
}
// New keyword to create an object
let student1 = new student("Belal", "11", "22SCSE2140046");
// Property accessors
console.log(student1.name);
console.log(student1.Section);
console.log(student1["RollNo"]);
