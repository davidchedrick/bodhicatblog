import { Container, Navbar } from "react-bootstrap";

function TitleBar() {
    return (
        <Navbar className="Header " bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="Header logo-text" href="">
                    BodhiCat Blogging.
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TitleBar;
