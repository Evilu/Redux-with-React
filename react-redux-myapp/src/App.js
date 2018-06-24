import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {addName} from "./actions";


class App extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

    }
    addName = ()=> {
      this.props.addName(this.myRef.current.value)
    }

  render() {
      const list = this.props.users.map((user, index)=>{
        return <li key={index}>{user}</li>
      });
    return (

        <div>
            <ul>{list}</ul>
          <input ref={this.myRef} />
          <button onClick={this.addName}>add</button>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addName: (name) => {
            dispatch(addName(name))
        },

    }
};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

console.log("ConnectedApp", ConnectedApp);

export default ConnectedApp;
