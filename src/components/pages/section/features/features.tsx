import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../../../common/button";
import {
  StyledFeature,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  BookIcon,
  CoinIcon,
  HandIcon,
} from "./featureStyle";

function Features() {
  return (
    <StyledFeature>
      <Container>
        <Row>
          <Col lg>
            <FirstContainer>
              <BookIcon />
              <p>Glocomx Coin</p>
              <h4>White Paper</h4>
              <Buttons btnName="Download" />
            </FirstContainer>
          </Col>
          <Col lg>
            <SecondContainer>
              <CoinIcon />
              <p>Glocomx Coin</p>
              <h4>Public Price Offer</h4>
              <Buttons btnName="Buy NFT" />
            </SecondContainer>
          </Col>
          <Col lg>
            <ThirdContainer>
              <HandIcon />
              <p>Glocomx Coin</p>
              <h4>Join Us</h4>
              <Buttons btnName="Telegram" />
            </ThirdContainer>
          </Col>
        </Row>
      </Container>
    </StyledFeature>
  );
}

export default Features;
