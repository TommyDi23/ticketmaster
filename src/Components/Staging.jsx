import React, { Component } from "react";
import EventList from "./EventList";
import axios from "axios";



class Staging extends Component {
  state = {
    events: [],
    keyword: ""
  };
  componentDidMount() {
    this.getData();
  }

  getData = keyword => {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=e7FWmI9gzJZBRlkSCN3FNcyPsxexhekw",
        { params: { keyword: keyword } }
      )
      .then(({ data }) => {
        this.setState({ events: data._embedded.events });
      })
      .catch();
  };

  render() {
    return (
      <div>
        <EventList events={this.state.events} func={this.getData} />
      </div>
    );
  }
}

export default Staging;
