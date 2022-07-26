import { Container, Navbar } from "react-bootstrap";

function Header({ currentUser, handleLogout }) {
    return (
        <Navbar className="Header " bg="dark" variant="dark">
            <Container>
                <button onClick={handleLogout}>Logout</button>
                <a href={"api/post"} className="btn btn-dark fs-4">
                    +
                </a>

                <Navbar.Brand className="Header logo-text" href="/">
                    BodhiCat Blogging!
                </Navbar.Brand>
                <Navbar.Text>
                    Signed in as: <a href={`/users/${currentUser.id}`}>{currentUser.username} </a>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default Header;
