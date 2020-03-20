import React, {Component} from 'react';

class Header extends Component {
  static get defaultProps() {
    return {
      name:"Konstant",
      taskCount:0
    }
  }
  render() {
    const {
      name,
       taskCount
    } = this.props;
    return (
      <div className="jumbotron">
        <h1 className="dispalay-3">Список текущих задач</h1>
        <div>Привет {name} , у тебя {taskCount} невыполненных задания!</div>
      </div>
    )
  }
}

export default Header;