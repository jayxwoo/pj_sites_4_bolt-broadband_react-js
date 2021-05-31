import { useState } from "react";
import "../styles/SignupForm.scss";
import Button from "./Button";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState(null);
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, pass, dob, gender, address);

        setName('');
        setEmail('');
        setPass('');
        setDob('');
        setGender(null);
        setAddress('');
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign Up</h2>
            <fieldset className="required">
                <legend className="a11y-hidden">Required</legend>
                <label className="a11y-hidden">Name</label>
                <input type="text" className="name-input" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} required />
                <label className="a11y-hidden">Email</label>
                <input type="email" className="email-input" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                <label className="a11y-hidden">Password</label>
                <input type="password" className="password-input" placeholder="Password" value={pass} onChange={(e) => {setPass(e.target.value)}} required />
            </fieldset>
            <fieldset className="optional">
                <legend>Optional</legend>
                <div className="dob-cont cont">
                    <label htmlFor="dob" className="dob-label label">Date of Birth</label>
                    <input type="date" id="dob" className="dob-input" value={dob} onChange={(e) => {setDob(e.target.value)}} />
                </div>
                <div className="gender-cont cont">
                    <p className="gender-label label">Gender</p>
                    <div className="gender-input-cont" value={gender} onChange={(e) => {setGender(e.target.value)}}>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="address-cont cont">
                    <label htmlFor="address" className="address-label label">Address</label>
                    <input type="text" id="address" className="address-input" placeholder="Street / Town / City" value={address} onChange={(e) => {setAddress(e.target.value)}} />
                </div>
            </fieldset>
            <Button btnStyle="btn-outline--light" btnSize="btn--mobile">Submit</Button>
        </form>
    );
}

export default Form;