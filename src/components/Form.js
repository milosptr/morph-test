import React, { useState } from 'react';
import './form.scss';

function Form() {
    const [percentage, setPercentage] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleUpdatePercentage = (e, addNum) => {
        if (e.target.value !== null || e.target.value !== '') {
            setPercentage(prevPercentage => prevPercentage + addNum);
        }
    }

    const [password, setPassword] = useState('');

    const hasDigit = word => {
        let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < word.length; i++) {
            if (digits.includes(word.charAt(i))) {
                console.log('ima digit');
                return true;
            }
        }
        console.log('nema digit');
        return false;
    }

    const hasUpperCase = word => {
        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) === word.charAt(i).toUpperCase()) {
                console.log('ima upper');
                return true;
            }
        }
        console.log('nema upper');
        return false;
    }

    const hasLowerCase = word => {
        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) === word.charAt(i).toLowerCase()) {
                console.log('ima lower');
                return true;
            }
        }
        console.log('nema lower');
        return false;
    }

    const hasSpecial = word => {
        let regEx = /[^a-zA-Z0-9\-\/]/;
        if (!regEx.test(word)) {
            console.log('nema special');
            return false;
        }
        console.log('ima special');
        return true;
    }

    const handleCheckPassword = e => {
        e.preventDefault();

        if (password.length >= 8 &&
            hasDigit(password) &&
            hasUpperCase(password) &&
            hasLowerCase(password) &&
            hasSpecial(password)) {
            console.log("Strong password");
        }

        else if (password.length >= 6 &&
            hasUpperCase(password) &&
            hasLowerCase(password) &&
            hasDigit(password) &&
            hasSpecial(password))
            console.log('Medium password');

        else if (!hasDigit(password) &&
            password.length >= 8 &&
            hasUpperCase(password) &&
            hasLowerCase(password) &&
            hasSpecial(password)) {
            console.log('Medium password');
        }

        else {
            console.log('Weak password');
        }
    }

    return (
        <form>
            <div className="form-header">
                <div className="percentage-wrapper">
                    <div className="percentage">{percentage}%</div>
                </div>
                <div className="info">
                    <p>New York State</p>
                    <p>Request for Contact</p>
                </div>
            </div>

            <div className="form-body">
                <div className="input-group">
                    <div className="input-number-wrapper">
                        <p className="input-number">1</p>
                    </div>
                    <div className="input-right">
                        <div className="input-title">First Name</div>
                        <input type="text" className="input-border-underline" onChange={e => setFirstName(e.target.value)} onBlur={e => handleUpdatePercentage(e, 25)} />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-number-wrapper">
                        <p className="input-number">2</p>
                    </div>
                    <div className="input-right">
                        <div className="input-title">Last Name</div>
                        <input type="text" className="input-border-underline" onChange={e => setLastName(e.target.value)} onBlur={e => handleUpdatePercentage(e, 25)} />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-number-wrapper">
                        <p className="input-number">3</p>
                    </div>
                    <div className="input-right">
                        <div className="input-title">Email Address</div>
                        <input type="email" className="input-border-underline" onChange={e => setEmail(e.target.value)} onBlur={e => handleUpdatePercentage(e, 30)} />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-number-wrapper">
                        <p className="input-number">4</p>
                    </div>
                    <div className="input-right">
                        <div className="input-title last">What is the best time to contact you?</div>
                        <label htmlFor="contact">
                            <input type="radio" name="contact" value="Monday 3pm"></input>
                            Monday 3pm
                        </label>
                        <label htmlFor="contact">
                            <input type="radio" name="contact" value="Tuesday 3pm"></input>
                            Tuesday 3pm
                        </label>

                    </div>
                </div>
                <button type="submit" onClick={e => e.preventDefault()}><b>Submit</b></button>
            </div>

            <div>
                <p>Enter Your Password</p>
                <input type="text" onChange={e => setPassword(e.target.value)} />
                <button onClick={e => handleCheckPassword(e)}>Check</button>
            </div>
        </form>
    )
}

export default Form
