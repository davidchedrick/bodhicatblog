import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        fetch("/api/me", {
            credentials: "include",
        }).then(res => {
            if (res.ok) {
                res.json().then(user => {
                    setCurrentUser(user);
                    setAuthChecked(true);
                });
            } else {
                setAuthChecked(true);
            }
        });
    }, []);

    if (!authChecked) {
        return <div></div>;
    }

    return (
        <Router>
            {currentUser ? (
                <AuthenticatedApp
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                />
            ) : (
                <UnauthenticatedApp setCurrentUser={setCurrentUser} />
            )}
        </Router>
    );
}

export default App;
