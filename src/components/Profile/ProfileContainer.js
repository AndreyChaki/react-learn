import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updatePhoto, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.autorizedUserId
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props}
               isOwner={!this.props.match.params.userId}
               updatePhoto={this.props.updatePhoto}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

let mapDispatchToProps = {
  getProfile,
  getStatus,
  updateStatus,
  updatePhoto
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)
