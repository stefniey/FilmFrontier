import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');

    const [username, setUsername] = useState('');
    const [usernameMessage, setUsernameMessage] = useState('');

    const [password, setPassword] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}(.[a-zA-Z]{2,8})?/g;
        if (regEx.test(email)) {
            setEmailMessage('Email is Valid');
        
        } else if (!regEx.test(email) && email.trim() === '') {
            setEmailMessage('Email is required');
        } else {
            setEmailMessage('Invalid Email');
            console.log(email)
        }
    };

    const usernameValidation = () => {
        const regEx = /^[a-zA-Z]+$/;

        if (regEx.test(username)) {
            setUsernameMessage('Username is Valid');
            console.log(username)
        } else if (!regEx.test(username) && username.trim() === '') {
            setUsernameMessage('Username is required');
        } else {
            setUsernameMessage('Invalid Username (only text allowed)');
        }
    };

    const passwordValidation = () => {
        // Add your password requirements here
        const minLength = 8;

        if (password.length >= minLength) {
            setPasswordMessage('Password is Valid');
        } else if (password.trim() === '') {
            setPasswordMessage('Password is required');
        } else {
            setPasswordMessage(`Password must be at least ${minLength} characters long`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here (e.g., API call, authentication, etc.)
        console.log('Submitted:', formData);

        // Navigate to Login page
        navigate('/Login');
    };

    return (
        <section>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        {usernameMessage && <p className="error-message">{usernameMessage}</p>}
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {emailMessage && <p className="error-message">{emailMessage}</p>}
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {passwordMessage && <p className="error-message">{passwordMessage}</p>}
                    </label>
                    <button onClick={() => { emailValidation(); usernameValidation(); passwordValidation(); }} className="btn-signup" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
