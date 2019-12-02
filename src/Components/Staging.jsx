import React, { Component } from "react";
import EventList from './EventList'

class Staging extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=e7FWmI9gzJZBRlkSCN3FNcyPsxexhekw"
    )
      .then(buffer => buffer.json())
      .then(res => this.setState({events: res._embedded.events}));
  }

  render() {
    return <div>
      <EventList events={this.state.events}/>
    </div>;
  }
}

export default Staging;
