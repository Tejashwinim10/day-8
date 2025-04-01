
import React from 'react';
import User from './User';

const App = () => {
  const students = [
    { name: 'Alice Johnson', year: 'Freshman' },
    { name: 'Bob Smith', year: 'Sophomore' },
    { name: 'Charlie Brown', year: 'Junior' },
    { name: 'Diana Prince', year: 'Senior' },
    { name: 'Unknown Student', year: 'Other' },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {students.map((student, index) => (
        <User key={index} name={student.name} year={student.year} />
      ))}
    </div>
  );
};

export default App;
