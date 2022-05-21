import { StyledHome } from "./homeStyle";

//components

import Advisors from "../section/advisors/advisors";
import Benefits from "../section/benefits/benefits";
import Contact from "../section/contact/contact";
import Faq from "../section/faq/faq";
import Features from "../section/features/features";
import Header from "../section/header/header";
import Model from "../section/model/model";
import News from "../section/news/news";
import Partners from "../section/partners/partners";
import Portfolio from "../section/portfolio/portfolio";
import Roadmap from "../section/roadmap/roadmap";
import Sale from "../section/sale/sale";
import Startups from "../section/startups/startups";
import Team from "../section/team/team";
import Testimonials from "../section/testimonials/testimonials";
import Token from "../section/token/token";
import Value from "../section/value/value";
import Work from "../section/work/work";

function Home() {
  return (
    <StyledHome>
      <Header />
      <Features />
      <News />
      <Work />
      <Benefits />
      <Value />
      <Token />
      <Model />
      <Portfolio />
      <Startups />
      <Sale />
      <Roadmap />
      <Faq />
      <Team />
      <Advisors />
      <Contact />
      <Testimonials />
      <Partners />
    </StyledHome>
  );
}

export default Home;
