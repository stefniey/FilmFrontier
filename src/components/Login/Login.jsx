import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Dummy authentication function (replace with your actual authentication logic)
    const authenticate = (enteredUsername, enteredPassword) => {
        // Replace this with your actual authentication logic
        return enteredUsername === 'yourUsername' && enteredPassword === 'yourPassword';
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate username and password
        if (username.trim() === '' || password.trim() === '') {
            setError('Please fill in both username and password.');
        } else {
            setError(''); // Clear previous error messages

            // Attempt authentication
            if (authenticate(username, password)) {
                // Successful authentication
                console.log('Login successful. Redirecting to Home page.');
            
            }
            else {
                navigate('/');
            
            
        }
        }
    };

    return (
        <section>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button className='btn-login' type="submit">Login</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default Login;
