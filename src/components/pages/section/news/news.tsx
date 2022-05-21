import { Container, Col, Row, Card } from "react-bootstrap";
import {
  StyledNews,
  InvestCrypto,
  MarketGrowth,
  SecureInvestment,
} from "./newsStyle";

//assets
import bgs from "../../../assets/images/bgs.jpg";
import Header from "../../../common/header/header";

function News() {
  return (
    <StyledNews>
      <Container>
        <Header headerName="News & Updates" />
        <Row>
          <Col lg>
            <InvestCrypto>
              <Card style={{ width: "25rem" }}>
                <Card.Img src={bgs} />
                <Card.Body>
                  <Card.Title>Invest In Crypto</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, voluptatibus cupiditate? Voluptatum adipisci natus
                    beatae saepe mollitia, exercitationem accusantium autem
                    maxime itaque molestias accusamus assumenda quasi est
                    veritatis, a labore.
                  </Card.Text>
                </Card.Body>
              </Card>
            </InvestCrypto>
          </Col>
          <Col lg>
            <MarketGrowth>
              <Card style={{ width: "25rem" }}>
                <Card.Img src={bgs} />
                <Card.Body>
                  <Card.Title>Market Growth</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, voluptatibus cupiditate? Voluptatum adipisci natus
                    beatae saepe mollitia, exercitationem accusantium autem
                    maxime itaque molestias accusamus assumenda quasi est
                    veritatis, a labore.
                  </Card.Text>
                </Card.Body>
              </Card>
            </MarketGrowth>
          </Col>
          <Col lg>
            <SecureInvestment>
              <Card style={{ width: "25rem" }}>
                <Card.Img src={bgs} />
                <Card.Body>
                  <Card.Title>Secure Investment</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, voluptatibus cupiditate? Voluptatum adipisci natus
                    beatae saepe mollitia, exercitationem accusantium autem
                    maxime itaque molestias accusamus assumenda quasi est
                    veritatis, a labore.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SecureInvestment>
          </Col>
        </Row>
      </Container>
    </StyledNews>
  );
}

export default News;
