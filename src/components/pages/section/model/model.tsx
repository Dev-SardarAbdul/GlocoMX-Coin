import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Header from "../../../common/header/header";
import { StyledModel, ProjectContainer } from "./modelStyle";

function Model() {
  return (
    <StyledModel>
      <Container>
        <Header headerName="Glocomx Coin Growth Model" />
        <Row>
          <Col lg={12}>
            <ProjectContainer>
              <p>Annual Growth rate of All Glocomx capital projects</p>
              <ProgressBar variant="warning" now={60}></ProgressBar>
            </ProjectContainer>
          </Col>
          <Col lg={12}>
            <ProjectContainer>
              <p>Annual Growth rate of All Glocomx capital projects</p>
              <ProgressBar variant="warning" now={30}></ProgressBar>
            </ProjectContainer>
          </Col>
          <Col lg={12}>
            <ProjectContainer>
              <p>Annual Growth rate of All Glocomx capital projects</p>
              <ProgressBar variant="warning" now={80}></ProgressBar>
            </ProjectContainer>
          </Col>
        </Row>
      </Container>
    </StyledModel>
  );
}

export default Model;
