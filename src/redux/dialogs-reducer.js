const ADD_MESSAGE = 'dialogs/ADD-MESSAGE'

let initialState = {
  dialogs: [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'}
  ],
  messages: [
    {id: 1, messageText: 'message 1'},
    {id: 2, messageText: 'message 2'},
    {id: 3, messageText: 'message 3'}
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        taText: '',
        messages: [...state.messages, {id: state.messages.length + 1, messageText: action.body}]
      }
    default:
      return state
  }
}

export default dialogsReducer


export const addMessage = (body) => ({type: ADD_MESSAGE, body})