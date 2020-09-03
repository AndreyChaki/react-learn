import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import SettingsContainer from "./components/Settings/SettingsContainer";

class App extends React.Component {

  catchAllUnhundledErrors = (reason, promise) => {
    console.error('Some error occured')
    //console.error(promiseRejectionEvent)
  }

  componentDidMount() {
    this.props.initApp()
    window.addEventListener('unhundledrejection', this.catchAllUnhundledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhundledrejection', this.catchAllUnhundledErrors)
  }

  render() {

    if (!this.props.initialized) return <Preloader/>

    return (
      <div className='app'>
        <HeaderContainer/>
        <Sidebar/>
        <div className='content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect from={'/'} to={'/profile'}/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <LoginContainer/>}/>
            <Route path='/Settings' render={() => <SettingsContainer/>}/>
            <Route path='*' render={() => <div className="page_block p20"><h1>404</h1></div>}/>
          </Switch>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let mapDispatchToProps = {
  initApp
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(App)
