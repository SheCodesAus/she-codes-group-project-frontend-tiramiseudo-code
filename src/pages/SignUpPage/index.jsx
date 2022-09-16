import SignUpComponent from '../../components/SignUpForm/signup.jsx';

function SignUpPage () {

    return (
        <div className="register-container">
        <div className="content-container">
        <h2 className="register-h2">Let's get to know you</h2>
        <p className="register-p">Tell us a little bit about yourself so that you can be an ally but also so that our other allies can support you.</p>
        </div>
        <SignUpComponent />
        </div>
    )
}

export default SignUpPage;
