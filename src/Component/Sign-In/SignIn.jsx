import React from 'react';
import './SignIn.css';
import image1 from '../../Images/Rectangle 546.png';


const SignIn = () => {
    return (
        <div className="container">
            <div className="image-container">
                <img src={image1} alt="Sign In" />
            </div>

            <div className="form-container">
                <div className='form-inner-container'>
                    <div className="description">
                        <h2>Welcome Back</h2>
                        <p>Please sign in to access your data</p>
                    </div>

                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='yourmail@gmail.com' id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>

                        <div className="form-options">
                            <div>
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember</label>
                            </div>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn">Sign In</button>

                        <div className="signup-link">
                            <p>Don't have an account? <a href="#">Sign up</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignIn;
