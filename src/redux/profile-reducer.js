import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    {id: 1, postText: 'post 1'},
    {id: 2, postText: 'post 2'},
    {id: 3, postText: 'post 3'}
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: state.posts.length + 1, postText: action.body}]
      }
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state, status: action.status
      }
    case UPDATE_PHOTO_SUCCESS:
      return {
        ...state, profile: {...state.profile, photos: action.photos}
      }
    default:
      return state
  }
}

export default profileReducer


export const addPost = (body) => ({type: ADD_POST, body})

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = (status) => ({type: SET_STATUS, status})
const updatePhotoSuccess = (photos) => ({type: UPDATE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserStatus(userId)
  dispatch(setUserStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

export const updatePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(updatePhotoSuccess(response.data.data.photos))
  }
}

export const saveData = (data) => async (dispatch, getState) => {

  let uId = getState().auth.userId

  let response = await profileAPI.updateProfile(data)
  if (response.data.resultCode === 0) {
    dispatch(getProfile(uId))
  } else {
    let key = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
    dispatch(stopSubmit('settingsForm', {
      contacts: {[key]: response.data.messages[0]},
    }));
  }
}
