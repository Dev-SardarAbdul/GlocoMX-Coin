import { Container, Row, Col } from "react-bootstrap";
import Header from "../../../common/header/header";
import {
  StyledAdvisors,
  AdvisorContainer,
  ImageContainer,
  Wrapper,
} from "./advisorsStyle";

function Advisors() {
  return (
    <StyledAdvisors>
      <Container>
        <Header headerName="Advirsors" />
        <AdvisorContainer>
          <Row>
            <Col lg={4}>
              <Wrapper>
                <ImageContainer />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  facere mollitia, vel amet nisi tenetur. Blanditiis voluptates
                </p>
              </Wrapper>
            </Col>
            <Col lg={4}>
              <Wrapper>
                <ImageContainer />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  facere mollitia, vel amet nisi tenetur. Blanditiis voluptates
                </p>
              </Wrapper>
            </Col>
            <Col lg={4}>
              <Wrapper>
                <ImageContainer />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  facere mollitia, vel amet nisi tenetur. Blanditiis voluptates
                </p>
              </Wrapper>
            </Col>
          </Row>
        </AdvisorContainer>
      </Container>
    </StyledAdvisors>
  );
}

export default Advisors;
