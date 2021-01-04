import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation";
import MainStatics from "../Statistic/MainStatictis"
function Statistic() {
  return (
    <div>
      <Navigation title="Thống kê" />
      <Container fluid className="content-wrapper">
          <MainStatics/>
      </Container>
    </div>
  );
}

export default Statistic;
