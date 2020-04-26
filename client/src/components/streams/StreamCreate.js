import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../app/actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formVal) => {
    this.props.createStream(formVal);
  };

  render() {
    return (
      <div>
        <h3> Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// redux connect
export default connect(null, { createStream })(StreamCreate);
