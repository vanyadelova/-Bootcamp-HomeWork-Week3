import React, { Component } from "react";
import { connect } from "react-redux";

class ModelDetail extends Component {
  render() {
    if (!this.props.model) {
      return <div>Click one of the models to see details.</div>;
    }
    return (
      <div>
        <h4>Details for: {this.props.model.name}</h4>
        <div>Manufacturer: {this.props.model.manufacturer}</div>
        <div>Year: {this.props.model.year}</div>
        <div>Origin: {this.props.model.origin}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    model: state.activeModel
  };
}

export default connect(mapStateToProps)(ModelDetail);
