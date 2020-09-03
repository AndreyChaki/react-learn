import React from "react";
import UserItem from "./UserItem/UserItem";
import Pagination from "../common/Pagination/Pagination";


let Users = (props) => {


  return (
    <div className='page_block p20'>
      <h1>Пользователи</h1>

      <Pagination
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />

      <div>
        {
          props.users.map(u => <UserItem
            id={u.id}
            key={u.id}
            name={u.name}
            about={u.about}
            photos={u.photos}
            followed={u.followed}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
          />)
        }
      </div>
    </div>
  )
}

export default Users