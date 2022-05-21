import { Container, Row, Col, Card } from "react-bootstrap";
import { StyledTestimonials, CardGroup, Wrapper } from "./testimonialsStyle";
import profile from "../../../assets/images/profile.jpeg";
import Header from "../../../common/header/header";

function Testimonials() {
  return (
    <StyledTestimonials>
      <Container>
        <Header headerName="Testimonials" />
        <CardGroup>
          <Row>
            <Col>
              <Wrapper>
                <Card style={{ width: " 18rem" }}>
                  <Card.Img src={profile} />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
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
                  <Card.Img src={profile} />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
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
                  <Card.Img src={profile} />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
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
                  <Card.Img src={profile} />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
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
                  <Card.Img src={profile} />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
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
                  <Card.Img src={profile} />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
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
                  <Card.Img src={profile} />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
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
                  <Card.Img src={profile} />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
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
    </StyledTestimonials>
  );
}

export default Testimonials;
