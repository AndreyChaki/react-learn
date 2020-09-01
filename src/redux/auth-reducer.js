
const ADD_MESSAGE = 'ADD-MESSAGE'
const TA_M_CHANGE = 'TA-M-CHANGE'

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
  ],
  taText: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        taText: '',
        messages: [...state.messages, {id: state.messages.length + 1, messageText: state.taText}]
      }
    case TA_M_CHANGE:
      return {
        ...state,
        taText: action.taText
      }
    default:
      return state
  }
}

export default dialogsReducer


export const addMessageAC = () => ( {type: ADD_MESSAGE} )
export const taMessageChangeAC = (taText) => ( {type: TA_M_CHANGE, taText: taText} )