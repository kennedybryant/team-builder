import React, { useState } from 'react';
import './App.css';

const teamMemberList = [{}]

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState({})

  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {}

  const addTeamMember = (member) => {
    const newTeamMember = {
      name: member.name.trim(),
      email: member.email.trim(),
      role: member.role
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      setError("Please fill out all of the fields!");
      return
    };

    
  }



  return (
    <div className='container'>
      <h1>Team Member List</h1>
    </div>
  );
}

export default App;
