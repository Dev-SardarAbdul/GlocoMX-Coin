import { Col, Container, Row } from "react-bootstrap";
import Header from "../../../common/header/header";
import {
  StyledPartners,
  ImageContainer,
  Wrapper,
  MainWrapper,
} from "./partnersStyle";

function Partners() {
  return (
    <StyledPartners>
      <Container>
        <Header headerName="Partners" />
        <Wrapper>
          <Row>
            <Col lg={4}>
              <MainWrapper>
                <ImageContainer />
                <h4>Company Name</h4>
              </MainWrapper>
            </Col>
            <Col lg={4}>
              <MainWrapper>
                <ImageContainer />
                <h4>Company Name</h4>
              </MainWrapper>
            </Col>
            <Col lg={4}>
              <MainWrapper>
                <ImageContainer />
                <h4>Company Name</h4>
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </StyledPartners>
  );
}

export default Partners;
