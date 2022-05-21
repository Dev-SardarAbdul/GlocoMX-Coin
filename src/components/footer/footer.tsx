import { Col, Container, Row } from "react-bootstrap";
import {
  ImageContainer,
  LogoContainer,
  QuickLinks,
  StyledFooter,
  TextContainer,
  Wrapper,
} from "./footerStyle";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Row>
            <Col lg={4}>
              <LogoContainer>
                <ImageContainer />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, distinctio tempora esse fugiat in voluptatibus,
                  maiores quos, veniam quaerat dolore expedita odio ipsum
                  deleniti minima facilis iste necessitatibus reprehenderit .
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, distinctio tempora esse fugiat in voluptatibus,
                  maiores quos, veniam quaerat dolore expedita odio ipsum
                  deleniti minima facilis iste necessitatibus reprehenderit .
                </p>
              </LogoContainer>
            </Col>
            <Col lg={4}>
              <QuickLinks>
                <h4>Quick Links</h4>
                <a href="#shop">Shop</a>
                <a href="#tokens">Tokens</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#roadmap">Roadmap</a>
                <a href="#faq">FAQ</a>
                <a href="#team">Team </a>
                <a href="#contact">Contact</a>
              </QuickLinks>
            </Col>
            <Col lg={4}>
              <TextContainer>
                <h4>Recent News</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Soluta labore obcaecati sequi autem culpa error unde hic nobis
                  blanditiis itaque fuga ab aspernatur totam recusandae non,
                  distinctio odio asperiores inventore. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Soluta labore obcaecati
                  sequi autem culpa error unde hic nobis blanditiis itaque fuga
                  ab aspernatur totam recusandae non, distinctio odio .
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Soluta labore obcaecati sequi autem culpa error unde hic nobis
                  blanditiis itaque fuga ab aspernatur totam recusandae non,
                  distinctio odio asperiores inventore. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit.
                </p>
              </TextContainer>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
