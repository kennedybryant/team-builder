import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    return (
        <form className='form container' onSubmit={submit}>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Type in a name"
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input 
                        type="text"
                        name="email"
                        value={values.email}
                        maxLength="50"
                        placeholder="Type in an email address"
                        onChange={onChange}
                    />
                </label>

                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Web Designer'>Web Designer</option>
                        <option value='Intern'>Intern</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}