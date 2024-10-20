import React from 'react';
import './Recovery.css';
import image1 from '../../Images/Rectangle 546.png';


const Recovery = () => {
    return (
        <div className="container">
            <div className="image-container">
                <img src={image1} alt="Sign In" />
            </div>

            <div className="form-container">
                <div className='form-inner-container'>
                    <div className="description">
                        <h2>Password Recovery</h2>
                        <p>Enter Your email to recovery</p>
                    </div>

                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='yourmail@gmail.com' id="email" name="email" required />
                        </div>

                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Recovery;
