import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { StyledBenefits, CardGroup, Wrapper } from "./benefitsStyle";
import Header from "../../../common/header/header";

function Benefits() {
  return (
    <StyledBenefits>
      <Container>
        <Header headerName="Benefits for NFT Holders" />
        <CardGroup>
          <Row>
            <Col>
              <Wrapper>
                <Card style={{ width: " 18rem" }}>
                  <Card.Img src="" />
                  <Card.Body>
                    <Card.Title>Exchangeability</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam, voluptatibus cupiditate? Voluptatum adipisci natus
                      beatae saepe mollitia, exercitationem accusantium autem
                      maxime itaque molestias accusamus assumenda quasi est
                      veritatis, a labore.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Wrapper>
            </Col>
            <Col>
              <Wrapper>
                <Card style={{ width: " 18rem" }}>
                  <Card.Img src="" />
                  <Card.Body>
                    <Card.Title>Hidden Products</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam, voluptatibus cupiditate? Voluptatum adipisci natus
                      beatae saepe mollitia, exercitationem accusantium autem
                      maxime itaque molestias accusamus assumenda quasi est
                      veritatis, a labore.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Wrapper>
            </Col>
            <Col>
              <Wrapper>
                {" "}
                <Card style={{ width: " 18rem" }}>
                  <Card.Img src="" />
                  <Card.Body>
                    <Card.Title>Voting Rights</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam, voluptatibus cupiditate? Voluptatum adipisci natus
                      beatae saepe mollitia, exercitationem accusantium autem
                      maxime itaque molestias accusamus assumenda quasi est
                      veritatis, a labore.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Wrapper>
            </Col>
            <Col>
              <Wrapper>
                <Card style={{ width: " 18rem" }}>
                  <Card.Img src="" />
                  <Card.Body>
                    <Card.Title>Liquidity</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam, voluptatibus cupiditate? Voluptatum adipisci natus
                      beatae saepe mollitia, exercitationem accusantium autem
                      maxime itaque molestias accusamus assumenda quasi est
                      veritatis, a labore.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Wrapper>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </StyledBenefits>
  );
}

export default Benefits;
