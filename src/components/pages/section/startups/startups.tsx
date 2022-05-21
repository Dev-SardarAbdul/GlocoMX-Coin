import { Row, Col, Container } from "react-bootstrap";
import Button from "../../../common/button";
import Header from "../../../common/header/header";
import {
  ImageContainer,
  StyledStartups,
  TextContainer,
  BtnWrapper,
} from "./startupsStyle";

function Startups() {
  return (
    <StyledStartups>
      <Container>
        <Header headerName="Open Call For Startups" />
        <Row>
          <Col lg={6}>
            <TextContainer>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique eveniet nesciunt quis quasi at quisquam consectetur
                ut, ducimus nulla eius sit voluptatibus accusantium quam placeat
                rem impedit sed tenetur. Officia dolore, tempore eveniet
                perferendis animi accusantium reiciendis repellendus libero
                perspiciatis quasi minima facere ducimus ratione suscipit a
                veritatis, labore odit! Vel iusto, provident assumenda neque
                laboriosam magnam et animi error! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique eveniet nesciunt quis
                quasi at quisquam consectetur ut, ducimus nulla eius sit
                voluptatibus accusantium quam placeat rem impedit sed tenetur.
                Officia dolore, tempore eveniet perferendis animi accusantium
                reiciendis repellendus libero perspiciatis quasi minima facere
                ducimus ratione suscipit a veritatis, labore odit! Vel iusto,
                provident assumenda neque laboriosam magnam et animi error!
              </p>
              <BtnWrapper>
                <Button btnName="Buy Now" />
              </BtnWrapper>
            </TextContainer>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <ImageContainer />
          </Col>
        </Row>
      </Container>
    </StyledStartups>
  );
}

export default Startups;
