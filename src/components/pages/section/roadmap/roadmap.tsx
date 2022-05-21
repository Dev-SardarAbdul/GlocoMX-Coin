import React from "react";
import { Container } from "react-bootstrap";
import { StyledRoadmap, Wrapper } from "./roadmapStyle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Header from "../../../common/header/header";

function Roadmap() {
  return (
    <StyledRoadmap id="roadmap">
      <Container>
        <Header headerName="Roadmap" />
        <Wrapper>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              date="2011 - present"
              iconStyle={{ background: "white", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Lorem ipsum dolor
              </h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita consequatur inventore minus natus quo laborum nam
                doloremque. Odit, odio sint.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "white", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Lorem ipsum dolor
              </h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita consequatur inventore minus natus quo laborum nam
                doloremque. Odit, odio sint.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "white", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Lorem ipsum dolor
              </h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita consequatur inventore minus natus quo laborum nam
                doloremque. Odit, odio sint.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "white", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Lorem ipsum dolor
              </h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita consequatur inventore minus natus quo laborum nam
                doloremque. Odit, odio sint.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "white", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Lorem ipsum dolor
              </h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita consequatur inventore minus natus quo laborum nam
                doloremque. Odit, odio sint.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "white", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Lorem ipsum dolor
              </h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita consequatur inventore minus natus quo laborum nam
                doloremque. Odit, odio sint.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "white", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Lorem ipsum dolor
              </h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita consequatur inventore minus natus quo laborum nam
                doloremque. Odit, odio sint.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Wrapper>
      </Container>
    </StyledRoadmap>
  );
}

export default Roadmap;
