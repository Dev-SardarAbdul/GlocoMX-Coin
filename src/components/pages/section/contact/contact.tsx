import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Buttons from "../../../common/button";
import Header from "../../../common/header/header";
import {
  StyledContact,
  Wrapper,
  TextContainer,
  ContactContainer,
  FormContainer,
  BtnWrapper,
} from "./contactStyle";

function Contact() {
  return (
    <StyledContact id="contact">
      <Container>
        <Header headerName="Contact Us" />
        <Wrapper>
          <Row>
            <Col lg={4}>
              <TextContainer>
                <h4>Get In Touch</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate eligendi fugiat aliquam odit ex voluptates
                  architecto commodi voluptatibus accusantium ipsam. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptate
                  eligendi fugiat aliquam odit ex voluptates architecto commodi
                  voluptatibus accusantium ipsam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate eligendi fugiat aliquam odit ex voluptates
                  architecto commodi voluptatibus accusantium ipsam. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptate
                  eligendi fugiat aliquam odit ex voluptates architecto commodi
                  voluptatibus accusantium ipsam.
                </p>
              </TextContainer>
            </Col>
            <Col lg={8}>
              <ContactContainer>
                <FormContainer>
                  <Form className="ml-100">
                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="formGridFirstName">
                          <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="formGridLastName">
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                      <Form.Control placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridMessage">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </Form.Group>
                  </Form>
                </FormContainer>
                <BtnWrapper>
                  <Buttons btnName="Send" />
                </BtnWrapper>
              </ContactContainer>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </StyledContact>
  );
}

export default Contact;
