
import { Container, Navbar } from "react-bootstrap";

function Header() {

    return(
        <Navbar className="Header " bg="dark" variant="dark">
            <Container>
               

                <Navbar.Brand className="Header " href="">
                    BodhiCat Blogging
                </Navbar.Brand>
               
            </Container>
        </Navbar>
    )
}

export default Header