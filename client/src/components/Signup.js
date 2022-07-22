// client/src/components/Signup.js
import { Alert, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/tyComp.png";
import TitleBar from "./TitleBar";

function Signup({ setCurrentUser }) {
    const history = useHistory();
    const [userError, setUserError] = useState(false);
  
    const [passwordError, setPasswordError] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then(res => {
            if (res.ok) {
                res.json().then(user => {
                    setCurrentUser(user);
                    history.push("/");
                });
            } else {
                res.json().then(errors => {

                    if(errors.error.username){
                       setUserError(true); 
                       setErrorMessage('Username Unavailable')
                    }
              
                    if(errors.error.password_confirmation) {
                       setPasswordError(true)
                       setErrorMessage(errors.error.password_confirmation[0])
                    }
                   
                });
            }
        });
    };
    return (
        <>
            <TitleBar />
            <div className="form-div  ">
                <img className="logo mb-4" src={logo} alt="BodiCat" />

                <form onSubmit={handleSubmit}>
                    <h1>Sign Up:</h1>

                    {userError ? (
                        <Alert variant="danger">{errorMessage}</Alert>
                    ) : null}
                  
                    {passwordError ? (
                        <Alert variant="danger">Password Doesnt Match</Alert>
                    ) : null}

                    <label className="p-2" htmlFor="username">
                        Username
                    </label>

                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value)
                            setUserError(false)
                            setPasswordError(false)
                        }}
                    />

                    <label className="p-2" htmlFor="password">
                        Password{" "}
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        name=""
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                            setPasswordError(false)
                            setUserError(false)
                        }}
                    />

                    <label className="p-2" htmlFor="password_confirmation">
                        Password Confirmation
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        name="password_confirmation"
                        value={passwordConfirmation}
                        onChange={e => {
                            setPasswordConfirmation(e.target.value)
                            setPasswordError(false)
                            setUserError(false)
                        }}
                    />

                    <Button className="mt-3" variant="success" type="submit">
                        Sign Up
                    </Button>

                    <p className="p-3">--- OR ---</p>
                    <Link
                        className="list-group-item list-group-item-danger"
                        to="/login"
                    >
                        Log In
                    </Link>
                </form>
            </div>
        </>
    );
}

export default Signup;
