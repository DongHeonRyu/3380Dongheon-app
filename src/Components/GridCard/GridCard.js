import React from "react";
import { Col } from 'antd';
import 'antd/dist/antd.css';
function GridCards(props) {
  if (props.landingPage) {
    return (
      <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={`/movie/${props.movieId}`}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={props.image}
            alt={props.movieName}
          />
        </a>
      </div>
      </Col>
    );
  } else {
    return (
      <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={props.image}
          alt={props.characterName}
        />
        <div
          style={{
            position: "absolute",
            right: "5px",
            bottom: "5px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {props.image ? props.characterName : null}
        </div>
      </div>
      </Col>
    );
  }
}

export default GridCards;
