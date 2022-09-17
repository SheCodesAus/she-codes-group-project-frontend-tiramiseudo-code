import React, {useState, useEffect} from 'react';
import SignUpComponent from '../../components/SignUpForm/signup.jsx';
import './signup.css';

const initialState = {
    firstName: '',
    lastName: '',
    pronoun: '',
    email: '',
    password: '',
    skills: '',
    bio: '',
}
function SignUpFrom () {
    const [formData, setFormData] = useState(initialState);
    const [skillList, setSkillList] = useState([]);
    const [isSigningUp, setIsSigningUp] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}skills`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log('skill list', data)
            setSkillList(data);
        });
    }, []);

    const handleChange = (e) => {
        const newState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newState);
    }

    const handleForm = async (e) => {
        e.preventDefault();
        const signUpUrl = `${process.env.REACT_APP_API_URL}users/`;
        const bodyData = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password,
            pronoun: formData.pronoun,
            photo: formData.photo,
            bio: formData.bio,
            skills: formData.skills,
        };

        try {
            setIsSigningUp(true);
            const result = await fetch(signUpUrl, {
                method: 'POST',
                body: bodyData
            });
            const data = await result.json();

            setIsSigningUp(false);
            alert('Signup done successfully')
        } catch (error) {
            setIsSigningUp(false);
            alert('Error in signup, please try again in a moment')
        }
    }

    const renderInput = ({name="", type="text", value="", label="", help = null}) => {
        const renderHelp = () => {
            return help ? 
            (<div className='input-help'>{help}</div>) 
            : null;
        }

        return (
            <div className="form-row">
                <label className="join-label">
                    <span>{label}</span>
                    <input 
                        name={name}
                        type={type}
                        onChange={handleChange}
                    />
                    {renderHelp()}
                </label>
            </div>
        )
    }

    const renderSkills = ({name="skills", label=""}) => {
        return (
            <div className="form-row">
                <label className="join-label">
                    <span>{label}</span>
                    <select name={name} onChange={handleChange} multiple style={{width: '430px'}}>
                        {skillList.map(({id, skill_name})=>(<option key={id} value={id}>{skill_name}</option>))}
                    </select>
                </label>
            </div>
        )
    }

    const renderBio = () => {
        return (
            <div className="form-row">
                <label className="join-label">
                    <span className="bio-heading">Bio</span>
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
                        name: 'pronoun',
                        label: 'pronoun'
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
                        name: 'photo',
                        type: 'url',
                        label: 'Picture',
                        help: (
                            <span>
                                To create your own avatar, click 
                                <a href="https://vinicius73.github.io/gravatar-url-generator/#/" target="_blank"> here</a>
                            </span>
                        )
                    })}

                    {renderSkills({label: 'Skills'})}

                    {renderBio()}
                </div>
                <p className="signin-style-2">Wait! Do you already have an account? Well why don't you<a className="login-link" href="/signup"> sign in</a></p>

                <div className='signup-buttons'>
                    <button 
                    type="submit"
                    className='register-btn'
                    disabled={isSigningUp}
                    >
                        {isSigningUp ? 'Please wait...' : 'Submit'}
                    </button>

                </div>
            </div>
        </form>
    )
}

export default SignUpFrom;