import React, { useState } from 'react';
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
    </div>
  );
}

export default App;
