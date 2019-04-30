import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from 'react-moment';
import "./workshopPreview.scss";

const WorkshopPreview = ({ workshop }) => {
  const start = workshop.start ? workshop.start : workshop.startDate
  const wrkshopId = workshop.id ? workshop.id : workshop.workshopId
  console.log('workshop', workshop)
  return (
    <Link to={`/workshop/${wrkshopId}`} className="workshop-link grid-x grid-margin-x" >
      <div className="cell small-12 cell">
        <p className="from-now"><Moment format="dddd">{start}</Moment> <Moment format="LT">{start}</Moment> | <Moment fromNow>{start}</Moment></p>
      </div>
      <div className="start small-3 cell"><p className="calender"><span><Moment format="MMM">{start}</Moment></span> <span><Moment format="DD">{start}</Moment></span></p>
      </div>
      <div className="small-9 cell">
        <h3><strong>{workshop.name}</strong></h3>
      </div>
    </Link>


  );
};
export default WorkshopPreview;
