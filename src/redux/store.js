
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'},
        {id: 3, name: 'User 3'}
      ],
      messages: [
        {id: 1, messageText: 'message 1'},
        {id: 2, messageText: 'message 2'},
        {id: 3, messageText: 'message 3'}
      ],
      taText: ''
    },
    profilePage: {
      posts: [
        {id: 1, postText: 'post 1'},
        {id: 2, postText: 'post 2'},
        {id: 3, postText: 'post 3'}
      ],
      taText: ''
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  }
}


export default store

window.state = store._state