import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Button from "../../../common/button";
//Styles
import {
  SpanContainer,
  StyledHeader,
  TextContainer,
  TimeContainer,
  Wrapper,
  BtnWrapper,
} from "./headerStyle";

function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <Container>
          <Row>
            <Col lg={6}>
              <TextContainer>
                <h1>GLOCOMX COIN</h1>
                <h4>REVOLUTIONIZING INTERNATIONAL TRADE</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores provident, error praesentium nobis sint explicabo
                  blanditiis laborum. Error doloribus saepe obcaecati sunt ipsam
                  esse itaque, dolore aliquid, ullam quia voluptatem.
                </p>
              </TextContainer>
              <Col lg>
                <BtnWrapper>
                  <Button btnName="Buy Now" />
                </BtnWrapper>
              </Col>
            </Col>
            <Col lg={6}>
              <TimeContainer>
                <p>Public Sale Price: $0.021</p>
                <SpanContainer>
                  <Row>
                    <Col>
                      <span>
                        15 <br />
                        Days
                      </span>
                    </Col>
                    <Col>
                      <span>15 Hours</span>
                    </Col>
                    <Col>
                      <span>15 Mins</span>
                    </Col>
                    <Col>
                      <span>15 Secs</span>
                    </Col>
                  </Row>
                </SpanContainer>
                <ProgressBar variant="warning" now={60}></ProgressBar>
              </TimeContainer>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
