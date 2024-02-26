import { Container } from 'reactstrap';

const Header = () =>{
    return (
        <header className='banner container-fluid jumbotron'>
            <Container fluid>
                <h1 className="display-2">Star Wars Fan Blog</h1>
            </Container>
        </header>
    )
}

export default Header;