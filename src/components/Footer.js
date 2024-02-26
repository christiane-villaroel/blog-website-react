import { Container ,Row} from "reactstrap";
const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <small class="col copyright jura">
                        &copy; Copyright Christiane Villaroel
                    </small>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;