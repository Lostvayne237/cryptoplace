import React from "react";
import "./SignUp.css"



const SignUp = () => {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value
        }));
    }

    //

    //




    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="name">Name:</label>
                <p><input id="name" type="text" placeholder="Enter your name..." required onChange={handleChange} /></p>
            </div>
            <div className="field">
                <label htmlFor ="email">Email:</label>
                <p><input id="email" type="email" placeholder="Enter your email..." onChange={handleChange} required/></p>
            </div>
            <div className="field">
                <label htmlFor ="password">Password:</label>
                <p><input id="password" type="password" onChange={handleChange} placeholder="Enter your password..."  required/></p>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp;