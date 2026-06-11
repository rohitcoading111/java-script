const students = [];

function addStudent(name, marks) {
  students.push({ name, marks });
}

function showStudents() {
  students.forEach(student => {
    console.log(
      `${student.name}: ${student.marks}`
    );
  });
}

addStudent("Rohit", 85);
addStudent("Aman", 92);

showStudents();