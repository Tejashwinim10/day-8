
import React, { useState } from 'react';
import StudentCard from './StudentCard';

function StudentList() {
    const [students, setStudents] = useState([
        { id: 1, name: 'Abi', age: 20 },
        { id: 2, name: 'Arshitha', age: 22 },
        { id: 2, name: 'Gagasya', age: 22 },
        { id: 2, name: 'Swathi', age: 22 },
    ]);

    const [newStudent, setNewStudent] = useState({ name: '', age: '' });

    
    const addStudent = () => {
        if (newStudent.name && newStudent.age) {
            setStudents([...students, { id: Date.now(), name: newStudent.name, age: newStudent.age }]);
            setNewStudent({ name: '', age: '' }); 
        }
    };

    
    const removeStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div className="student-list-container">
            {}
            <div className="add-student-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={newStudent.age}
                    onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                />
                <button onClick={addStudent} className="add-button">Add Student</button>
            </div>

            {}
            <ul className="student-list">
                {students.map(student => (
                    <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        age={student.age}
                        removeStudent={removeStudent}
                    />
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
