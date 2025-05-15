function showEnrolledStudents(){
    fetch("http://localhost:8080/courses/enrolled")
    .then((response) => response.json())
    .then((students) => {
        const dataTable = document.getElementById("enrolledtable")

        students.forEach(student => {
            var row = `<tr>
            <td>${student.name}</td>
            <td>${student.emailId}</td>
            <td>${student.courseName}</td>
            </tr>`
            dataTable.innerHTML+=row;
        });
    });
}