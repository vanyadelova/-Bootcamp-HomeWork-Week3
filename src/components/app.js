import React, { Component } from "react";
import ModelList from "../containers/model-list";
import ModelDetail from "../containers/model-detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <ModelList />
        <ModelDetail />
      </div>
    );
  }
}
