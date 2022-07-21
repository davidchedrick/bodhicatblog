import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Blog from "./components/Blog";
import AddPost from "./components/AddPost";
import PostArea from "./components/PostArea";

function AuthenticatedApp({ currentUser, setCurrentUser }) {
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [fetchRequest, setFetchRequest] = useState(false);
    

    useEffect(() => {
        fetch("/api/posts")
            .then(res => res.json())
            .then(posts => setPosts(posts));
    }, [fetchRequest]);

    const handleLogout = () => {
        fetch("/api/logout", {
            method: "DELETE",
            credentials: "include",
        }).then(res => {
            if (res.ok) {
                setCurrentUser(null);
                history.push("/");
            }
        });
    };

    return (
        <Switch>
            <Route exact path="/">
                <PostArea
                    currentUser={currentUser}
                    posts={posts}
                    handleLogout={handleLogout}
                />
            </Route>
            <Route exact path="/posts/:id">
                <Blog />
            </Route>
            <Route exact path="/api/post">
                <AddPost 
                    currentUser={currentUser}
                    setFetchRequest={setFetchRequest}
                    fetchRequest={fetchRequest}
                />
            </Route>
        </Switch>
    );
}

export default AuthenticatedApp;
