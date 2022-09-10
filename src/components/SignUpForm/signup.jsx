import React, {useState} from 'react';
import SignUpComponent from '../../components/SignUpForm/signup.jsx';
import './signup.css';

const initialState = {
    firstName: '',
    lastName: '',
    proNoun: '',
    email: '',
    password: '',
    skills: '',
    bio: '',
}
function SignUpFrom () {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const newState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newState);
    }

    const handleForm = (e) => {
        e.preventDefault();

        
    }

    const renderInput = ({name="", type="text", value="", label=""}) => {
        return (
            <div className="form-row">
                <label>
                    <span>{label}</span>
                    <input 
                        name={name}
                        type={type}
                        onChange={handleChange}
                    />
                </label>
            </div>
        )
    }

    const renderSkills = ({name="skills", label=""}) => {
        const skills = [
            {name: 'Skill 1', value: 'skill-1'},
            {name: 'Skill 2', value: 'skill-2'},
            {name: 'Skill 3', value: 'skill-3'},
            {name: 'Skill 4', value: 'skill-4'},
            {name: 'Skill 5', value: 'skill-5'},
        ];

        return (
            <div className="form-row">
                <label>
                    <span>{label}</span>
                    <select name={name} onChange={handleChange}>
                        <option>Select your skills</option>
                        {skills.map(({name, value})=>(<option key={value} value={value}>{name}</option>))}
                    </select>
                </label>
            </div>
        )
    }

    const renderBio = () => {
        return (
            <div className="form-row">
                <label>
                    <span>Bio</span>
                    <textarea name="bio" rows="10" cols="50" onChange={handleChange}></textarea>
                </label>
            </div>
        )
    }

    return (
        <form className='signup-container' onSubmit={handleForm}>
            <div className='signup-form'>
                <div>
                    {renderInput({
                        name: 'firstName',
                        label: 'First Name'
                    })}

                    {renderInput({
                        name: 'lastName',
                        label: 'Last Name'
                    })}

                    {renderInput({
                        name: 'proNoun',
                        label: 'Pronoun'
                    })}

                    {renderInput({
                        name: 'email',
                        type: 'email',
                        label: 'Email'
                    })}

                    {renderInput({
                        name: 'password',
                        type: 'Password',
                        label: 'Password'
                    })}

                    {renderInput({
                        name: 'picture',
                        type: 'file',
                        label: 'Picture'
                    })}

                    {renderSkills({label: 'Skills'})}

                    {renderBio()}
                </div>
                <div className='signup-buttons'>
                    <button className='login-btn'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default SignUpFrom;