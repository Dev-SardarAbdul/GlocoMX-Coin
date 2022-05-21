import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../../common/header/header";
import { ImageContainer, StyledShop, Wrapper, BtnWrapper } from "./shopStyle";
import shop from "../../assets/images/shop.png";
import Button from "../../common/button";

function Shop() {
  return (
    <StyledShop id="shop">
      <Container>
        <ImageContainer />
      </Container>
      <Container>
        <Header headerName="Investor Packages" />
        <Row>
          <Col>
            <Wrapper>
              <Card style={{ width: " 18rem" }}>
                <Card.Img src={shop} />
                <Card.Body>
                  <Card.Title>Investor set (550,000)</Card.Title>
                  <Card.Text>
                    <h3>$10000</h3>
                  </Card.Text>
                  <BtnWrapper>
                    <Button btnName="Select" />
                  </BtnWrapper>
                </Card.Body>
              </Card>
            </Wrapper>
          </Col>
          <Col>
            <Wrapper>
              <Card style={{ width: " 18rem" }}>
                <Card.Img src={shop} />
                <Card.Body>
                  <Card.Title>Investor set (750,000)</Card.Title>
                  <Card.Text>
                    <h3>$30000</h3>
                  </Card.Text>
                  <BtnWrapper>
                    <Button btnName="Select" />
                  </BtnWrapper>
                </Card.Body>
              </Card>
            </Wrapper>
          </Col>
          <Col>
            <Wrapper>
              <Card style={{ width: " 18rem" }}>
                <Card.Img src={shop} />
                <Card.Body>
                  <Card.Title>Investor set (950,000)</Card.Title>
                  <Card.Text>
                    <h3>$50000</h3>
                  </Card.Text>
                  <BtnWrapper>
                    <Button btnName="Select" />
                  </BtnWrapper>
                </Card.Body>
              </Card>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </StyledShop>
  );
}

export default Shop;
