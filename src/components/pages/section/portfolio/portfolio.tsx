import { Container, Row, Col } from "react-bootstrap";
import Header from "../../../common/header/header";
import {
  StyledPortfolio,
  TextContainer,
  CompanyName,
  Tesla,
} from "./portfolioStyle";

function Portfolio() {
  return (
    <StyledPortfolio id="portfolio">
      <Container>
        <Header headerName="Portfolio" />
        <Row>
          <Col lg={5}>
            <TextContainer>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores ex quaerat reiciendis recusandae ut obcaecati deleniti
                et. Explicabo eius, quisquam labore placeat doloribus corrupti
                consequuntur ratione totam, obcaecati voluptate soluta! Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Dolores ex
                quaerat reiciendis recusandae ut obcaecati deleniti et.
                Explicabo eius, quisquam labore placeat doloribus corrupti
                consequuntur ratione totam, obcaecati voluptate soluta! ipsum
                dolor, sit amet consectetur adipisicing elit. Dolores ex quaerat
                reiciendis recusandae ut obcaecati deleniti et. Explicabo eius,
                quisquam labore placeat doloribus corrupti consequuntur ratione
                totam.
              </p>
            </TextContainer>
          </Col>
          <Col lg={7} d-flex justify-content-center align-items-center>
            <CompanyName>
              <Tesla />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus enim dolorum repellendus ex incidunt dolor consectetur
                accusantium molestiae.
              </p>
            </CompanyName>
            <CompanyName>
              <Tesla />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus enim dolorum repellendus ex incidunt dolor consectetur
                accusantium molestiae.
              </p>
            </CompanyName>
          </Col>
        </Row>
      </Container>
    </StyledPortfolio>
  );
}

export default Portfolio;
