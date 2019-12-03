import React from "react";




export default function EventCard(props) {
  const { events } = props;
  console.log(events);


  return events.map(event => {
    return (
      <li key={event.id}>
        {event.name}
        <img className="img" src={event.images[0].url} alt="p"></img>
        <button>Find out more</button>
      </li>
    );
  });
}
