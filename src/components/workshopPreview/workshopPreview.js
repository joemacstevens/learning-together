import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./workshopPreview.scss";

const WorkshopPreview = props => {
  const { name, location, instructor } = props.workshop;

  return (
    <section className="workshops">
      <article className="workshop grid-x">
        <div className="date cell small-3">
          <time>
            <span>Sept</span> <span>20th</span> <span>2019</span>
          </time>
        </div>
        <div className="workshop-info cell small-5">
          <h5 className="workshop-title">
            <strong>{name}</strong>
          </h5>
          <span className="location">
            <FontAwesomeIcon icon="map-marker" /> Buildit {location}
          </span>
          <span className="conference-room">Black</span>
          <span className="instructor">{instructor}</span>
        </div>
        <div className="cell small-3 button-container">
          <button className="button">Learn More</button>
        </div>
      </article>
    </section>
  );
};
export default WorkshopPreview;