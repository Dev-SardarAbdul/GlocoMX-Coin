import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  StyledWork,
  FirstContainer,
  ImageContainer,
  Wrapper,
} from "./workStyle";
import Header from "../../../common/header/header";

function Work() {
  return (
    <StyledWork>
      <Container>
        <Header headerName="How GLOCOMX coin works?" />
        <Wrapper>
          <Row>
            <Col lg={3}>
              <FirstContainer>
                <h2>1. Heading</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur blanditiis non beatae dignissimos, unde, eius
                  odio quasi nulla inventore laborum pariatur, quidem suscipit
                  qui illum consectetur dolorum! Reiciendis, delectus nostrum!
                </p>
              </FirstContainer>
              <FirstContainer>
                <h2>2. Heading</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur blanditiis non beatae dignissimos, unde, eius
                  odio quasi nulla inventore laborum pariatur, quidem suscipit
                  qui illum consectetur dolorum! Reiciendis, delectus nostrum!
                </p>
              </FirstContainer>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <ImageContainer />
            </Col>

            <Col lg={3}>
              <FirstContainer>
                <h2>3. Heading</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur blanditiis non beatae dignissimos, unde, eius
                  odio quasi nulla inventore laborum pariatur, quidem suscipit
                  qui illum consectetur dolorum! Reiciendis, delectus nostrum!
                </p>
              </FirstContainer>
              <FirstContainer>
                <h2>4. Heading</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur blanditiis non beatae dignissimos, unde, eius
                  odio quasi nulla inventore laborum pariatur, quidem suscipit
                  qui illum consectetur dolorum! Reiciendis, delectus nostrum!
                </p>
              </FirstContainer>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </StyledWork>
  );
}

export default Work;
