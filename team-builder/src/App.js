import React, { useState } from 'react';
import Form from './Form';
import './App.css';

const teamMemberList = [{}]

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList);

  const [formValues, setFormValues] = useState({name: "", email: "", role: ""})

  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = (event) => {
    event.preventDefault();
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      setError("Please fill out all of the fields!");
      return
    };

    setTeamMembers([newTeamMember, ...teamMembers]);
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues({name: "", email: "", role: ""})
  }

    

  return (
    <div className='container'>
      <h1>Team Member List</h1>
      <h3 className='error'>{error}</h3>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map((teamMember, index) => {
          return (
            <div key={index}>
              <h3>{teamMember.name}</h3>
              <p>{teamMember.email}</p>
              <p>{teamMember.role}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
