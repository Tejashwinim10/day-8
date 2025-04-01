
import React from 'react';

function StudentCard({ id, name, age, removeStudent }) {
    return (
        <li className="student-card">
            {`${name} (Age: ${age})`}
            <button onClick={() => removeStudent(id)} className="remove-button">Remove</button>
        </li>
    );
}

export default StudentCard;
