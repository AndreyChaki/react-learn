import {getAuthUserData} from "./auth-reducer";

const INIT_SUCCESS = 'app/INIT_SUCCESS'

let initialState = {
  initialized: false,
  globalError: null
}

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export default appReducer

const initSuccess = () => ({
  type: INIT_SUCCESS
})

export const initApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())

  Promise.all([promise])
    .then(() => {
      dispatch(initSuccess())
    })

}
