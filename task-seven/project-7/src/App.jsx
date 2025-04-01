// App.js
import React from 'react';
import StudentList from './StudentList';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <h1>Student List with Search</h1>
            <StudentList />
        </div>
    );
}

export default App;
