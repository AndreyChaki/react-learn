import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, saveData} from "../../redux/profile-reducer";
import Settings from "./Settings";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class SettingsContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.autorizedUserId
    }
    this.props.getProfile(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Settings
        profile={this.props.profile}
        saveData={this.props.saveData}
      />
    )
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    autorizedUserId: state.auth.userId
  }
}

let mapDispatchToProps = {
  saveData,
  getProfile
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(SettingsContainer)