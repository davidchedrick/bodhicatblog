
import { Container, Navbar } from "react-bootstrap";

function Header({ currentUser, handleLogout }) {

    return(
        <Navbar className="Header " bg="dark" variant="dark">
            <Container>
               
            <button onClick={handleLogout}>Logout</button>
            <a href={"/post"}  className="btn btn-dark fs-4">+</a>
                <Navbar.Brand className="Header " href="">
                    BodhiCat Blogging!

                    
                </Navbar.Brand>
                <Navbar.Text>
            Signed in as: <a href="#login">{currentUser.username} </a>
          </Navbar.Text>
          
            </Container>
            
        </Navbar>
    )
}

export default Header