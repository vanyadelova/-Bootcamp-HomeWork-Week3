import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectModel from '../actions/action_select_model'
import {bindActionCreators} from 'redux'

class ModelList extends Component {
  renderList() {
    return this.props.models.map((model) => {
      return (
        <li
        key={model.manufacturer}
        onClick={() => this.props.selectModel(model)}
        className='list-group-item'>{model.name}</li>
      );
    });
  }
  render() {
    return (
      <ul className = 'list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    models: state.models
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectModel: selectModel}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelList)
