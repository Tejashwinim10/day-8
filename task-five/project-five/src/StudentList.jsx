import Student from './Student';
function StudentList() {
    const students = [
        {
            name: "Hemavathy",
            major:"BBA",
            year:"III"
        },
        {
            name: "Harini",
            major:"BBA",
            year:"III"
        },
        
    
    ]
    const studentsList = students.map((student) => <Student name={student.name} major={student.major} year={student.year}/>)
            
    return (
        <>
            {studentsList}
        </>
    );
}
export default StudentList