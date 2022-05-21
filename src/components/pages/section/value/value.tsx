import { Container, Row, Col } from "react-bootstrap";
import Header from "../../../common/header/header";
import { StyledValue, TextContainer, ImageContainer } from "./valueStyle";

function Value() {
  return (
    <StyledValue>
      <Container>
        <Header headerName="Why will Golocmx Coin Value Increase?" />
        <Row>
          <Col lg>
            <TextContainer>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita nulla sequi odio soluta vel reprehenderit placeat
                eveniet autem, modi doloribus deserunt architecto fugit
                aspernatur. Rerum nostrum quasi nobis, obcaecati quas suscipit
                odit pariatur, maxime mollitia minima ad et fugiat quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita nulla sequi odio soluta vel reprehenderit placeat
                eveniet autem, modi doloribus deserunt architecto fugit
                aspernatur. Rerum nostrum quasi nobis, obcaecati quas suscipit
                odit pariatur, maxime mollitia minima ad et fugiat quaerat.
              </p>
            </TextContainer>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <ImageContainer />
          </Col>
        </Row>
      </Container>
    </StyledValue>
  );
}

export default Value;
