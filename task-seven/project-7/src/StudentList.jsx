// StudentList.js
import React, { useState } from 'react';
import StudentCard from './StudentCard';

function StudentList() {
    const [searchTerm, setSearchTerm] = useState('');
    const students = [
        { id: 1, name: 'Akila'},
        { id: 2, name: 'Banumathi' },
        { id: 3, name: 'Champangi' },
        { id: 4, name: 'Dhakshayani' },
        { id: 4, name: 'Elza' },
        { id: 4, name: 'Farhan' },
        { id: 4, name: 'Gaby' },
        { id: 4, name: 'Hansii' }
    ];

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="student-list-container">
            <input
                type="text"
                placeholder="Search Students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <ul className="student-list">
                {filteredStudents.length > 0 ? (
                    filteredStudents.map(student => (
                        <StudentCard key={student.id} name={student.name} />
                    ))
                ) : (
                    <li className="no-results">No students found</li>
                )}
            </ul>
        </div>
    );
}

export default StudentList;
