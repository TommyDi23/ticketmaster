import React from "react";
import EventCard from "./EventCard";

class EventList extends React.Component {
  state = {
    searchterm: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            searchterm
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.searchterm}
            />
          </label>
          <button>search</button>
        </form>
        <ul className="eventList">
          <EventCard events={this.props.events} />
        </ul>
      </div>
    );
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState({ searchterm: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { func } = this.props;
    func(this.state.searchterm);
    this.setState({ searchterm: "" });
  };
}

export default EventList;
