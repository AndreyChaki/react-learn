import React from "react";
import {login} from "../../redux/auth-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import Login from "./Login";


class LoginContainer extends React.Component {
  render() {
    return (
      <Login {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

let mapDispatchToProps = {
  login
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer)