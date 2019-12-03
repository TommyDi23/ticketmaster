import React from "react";
import EventCard from "./EventCard";

function EventList(props) {
  
  return (
    <div>
      <ul className='eventList'>
        <EventCard events={props.events} />
      </ul>
    </div>
  );
}

export default EventList;
