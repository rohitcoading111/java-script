const students = [
  { name: "Rohit", present: true },
  { name: "Aman", present: false },
  { name: "Raj", present: true }
];

function attendanceReport() {
  let present = 0;
  let absent = 0;

  for (let student of students) {
    if (student.present) {
      present++;
    } else {
      absent++;
    }
  }

  console.log("Present:", present);
  console.log("Absent:", absent);
}

attendanceReport();