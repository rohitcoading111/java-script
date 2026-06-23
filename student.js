const students = [
  { name: "Rohit", marks: 85 },
  { name: "Aman", marks: 65 },
  { name: "Raj", marks: 92 }
];


let topper = students[0];

for (let student of students) {
  if (student.marks > topper.marks) {
    topper = student;
  }
}

console.log("Topper:", topper);

let total = 0;

for (let student of students) {
  total += student.marks;
}

console.log("Average:", total / students.length);

let pass = students.filter(student => student.marks >= 40);
console.log("Pass:", pass);

let sorted = [...students].sort((a, b) => b.marks - a.marks);
console.log(sorted);