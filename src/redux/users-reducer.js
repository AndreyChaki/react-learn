import {followAPI, usersAPI} from "../api/api";


const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USERS:
      return {...state, users: action.users}
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: !state.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress:
          action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export default usersReducer


const followSuccess = (userId) => ({type: FOLLOW, userId})
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
const setUsers = (users) => ({type: SET_USERS, users})
const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING})
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching())
  dispatch(setCurrentPage(page))
  let response = await usersAPI.getUsers(page, pageSize)
  dispatch(toggleIsFetching())
  dispatch(setUsers(response.data.items))
  dispatch(setTotalUsersCount(response.data.totalCount))
}

export const follow = (id) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, id))
  let response = await followAPI.follow(id)
  if (response.data.resultCode === 0) {
    dispatch(followSuccess(id))
  }
  dispatch(toggleFollowingProgress(false, id))
}

export const unfollow = (id) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, id))
  let response = await followAPI.unfollow(id)
  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccess(id))
  }
  dispatch(toggleFollowingProgress(false, id))
}

