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

