function calculateGrade(marks) {
    let total = marks.reduce((acc, curr) => acc + curr, 0);
    let avg = total / marks.length;

    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";

    return "Fail";
}

console.log(calculateGrade([85, 90, 78, 88, 92]));