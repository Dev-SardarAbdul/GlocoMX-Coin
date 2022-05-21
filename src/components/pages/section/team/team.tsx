import { Col, Container, Row } from "react-bootstrap";
import Header from "../../../common/header/header";
import {
  StyledTeam,
  TeamContainer,
  ImageContainer,
  Wrapper,
} from "./teamStyle";

function Team() {
  return (
    <StyledTeam id="team">
      <Container>
        <Header headerName="Team" />
        <TeamContainer>
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
        </TeamContainer>
      </Container>
    </StyledTeam>
  );
}

export default Team;
