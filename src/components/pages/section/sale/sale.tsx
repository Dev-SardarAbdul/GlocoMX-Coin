import { Col, Container, Row, Card } from "react-bootstrap";
import Buttons from "../../../common/button";
import Header from "../../../common/header/header";
import { CardsGroup, StyledSale, Wrapper } from "./saleStyle";

function Sale() {
  return (
    <StyledSale>
      <Container>
        <Header headerName="Whitelisting And Public Sale" />
        <CardsGroup>
          <Row>
            <Col>
              <Wrapper>
                <Card style={{ width: "37rem" }}>
                  <Card.Body>
                    <Row>
                      <Col lg={12}>
                        <Card.Title>Private Sale </Card.Title>
                      </Col>
                      <Col lg={12}>
                        <Card.Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ullam, voluptatibus cupiditate? Voluptatum
                          adipisci natus beatae saepe mollitia, exercitationem
                          accusantium autem maxime itaque molestias accusamus
                          assumenda quasi Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Ullam, voluptatibus cupiditate?
                          Voluptatum adipisci natus beatae saepe mollitia,
                          exercitationem accusantium autem maxime itaque
                          molestias accusamus assumenda quasi Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Ullam,
                          voluptatibus cupiditate? Voluptatum adipisci natus
                          beatae saepe mollitia, exercitationem accusantium
                          autem maxime itaque molestias accusamus assumenda
                          quasi Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Ullam, voluptatibus cupiditate?
                          Voluptatum adipisci natus beatae saepe mollitia,
                          exercitationem accusantium autem maxime itaque
                          molestias accusamus assumenda quasi
                        </Card.Text>
                      </Col>
                      <Col
                        lg={12}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Buttons btnName="Buy NFT Token" />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Wrapper>
            </Col>
            <Col>
              <Wrapper>
                <Card style={{ width: "37rem" }}>
                  <Card.Body>
                    <Row>
                      <Col lg={12}>
                        <Card.Title>Public Sale </Card.Title>
                      </Col>
                      <Col lg={12}>
                        <Card.Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ullam, voluptatibus cupiditate? Voluptatum
                          adipisci natus beatae saepe mollitia, exercitationem
                          accusantium autem maxime itaque molestias accusamus
                          assumenda quasi Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Ullam, voluptatibus cupiditate?
                          Voluptatum adipisci natus beatae saepe mollitia,
                          exercitationem accusantium autem maxime itaque
                          molestias accusamus assumenda quasi Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Ullam,
                          voluptatibus cupiditate? Voluptatum adipisci natus
                          beatae saepe mollitia, exercitationem accusantium
                          autem maxime itaque molestias accusamus assumenda
                          quasi Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Ullam, voluptatibus cupiditate?
                          Voluptatum adipisci natus beatae saepe mollitia,
                          exercitationem accusantium autem maxime itaque
                          molestias accusamus assumenda quasi
                        </Card.Text>
                      </Col>
                      <Col
                        lg={12}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Buttons btnName="Send Form" />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Wrapper>
            </Col>
          </Row>
        </CardsGroup>
      </Container>
    </StyledSale>
  );
}

export default Sale;
