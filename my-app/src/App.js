import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { updateUser } from "./actions/userActions";


class  App extends React.Component{
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value)
  }

  render() {

    console.log(this.props);

    return (

          <div>
            <input onChange={this.onUpdateUser}>

            </input>
            <h1>{this.props.user}</h1>
          </div>

    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});
const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(App);
