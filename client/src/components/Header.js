import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";

function Header({ currentUser, handleLogout }) {
    const [commentsSort, setCommentsSort] = useState([]);
    console.log("commentsSort: ", commentsSort);

    useEffect(() => {
        fetch("/api/sort")
            .then(res => res.json())
            .then(posts => setCommentsSort(posts));
    }, []);

    function commentCLick() {
        console.log(commentsSort);
    }

    return (
        <Navbar className="Header " bg="dark" variant="dark">
            <Container>
                <button onClick={handleLogout}>Logout!</button>
                <a href={"api/post"} className="btn btn-dark fs-4">
                    +
                </a>
                <button onClick={commentCLick}>Click</button>
                <Navbar.Brand className="Header logo-text" href="/">
                    BodhiCat Blogging!
                </Navbar.Brand>
                <Navbar.Text>
                    Signed in as:{" "}
                    <a href={`/profiles/${currentUser.profile.id}`}>
                        {currentUser.username}{" "}
                    </a>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default Header;
