import React from 'react';
import './App.css'; // Style import

const StudentCard = ({ name, year }) => {
  const getClassName = (year) => {
    switch (year) {
      case 'Freshman':
        return 'freshman';
      case 'Sophomore':
        return 'sophomore';
      case 'Junior':
        return 'junior';
      case 'Senior':
        return 'senior';
      default:
        return 'default-card';
    }
  };

  return (
    <div className={`student-card ${getClassName(year)}`}>
      <h2>{name}</h2>
      <p>{year}</p>
    </div>
  );
};

export default StudentCard;
