import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Redirect, Link, useHistory } from "react-router-dom";
import logo from "../img/tyComp.png";
import TitleBar from "./TitleBar";

function Login({ setCurrentUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then(res => {
            if (res.ok) {
                res.json().then(user => {
                    setCurrentUser(user);
                    history.push("/");
                });
            } else {
                res.json().then(errors => {
                    console.error(errors);

                    if (errors.error) {
                        setUserError(true);
                        setErrorMessage(errors.error);
                    }
                });
            }
        });
    };

    return (
        <>
            <TitleBar />
            <div className="form-div  ">
                <Redirect to="/" />
                <img className="logo mb-4" src={logo} alt="BodiCat" />

                <form onSubmit={handleSubmit}>
                    <h1>Log In:</h1>

                    {userError ? (
                        <Alert variant="danger">{errorMessage}</Alert>
                    ) : null}

                    <p>
                        <label htmlFor="username" className="p-2">
                            Username
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            value={username}
                            onChange={e => {
                                setUsername(e.target.value);
                                setUserError(false);
                            }}
                        />
                    </p>
                    <p>
                        <label htmlFor="password" className="p-2">
                            Password
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name=""
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value);
                                setUserError(false);
                            }}
                        />
                    </p>
                    <Button type="submit" variant="success">
                        Log In
                    </Button>
                    <p className="p-4">--- OR ---</p>
                    <Link
                        className="list-group-item list-group-item-danger"
                        to="/signup"
                    >
                        Sign Up
                    </Link>
                </form>
            </div>
        </>
    );
}

export default Login;
