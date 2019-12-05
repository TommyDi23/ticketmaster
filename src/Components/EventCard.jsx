import React from "react";

export default function EventCard(props) {
  const { events } = props;
  console.log(events);
  return events.map(event => {
    return (
      <li key={event.id}>
        <h2>{event.name}</h2>
        <p>{event.dates.start.localDate}</p>
        <img className="img" src={event.images[0].url} alt="p"></img>
      </li>
    );
  });
}
