import React from "react";
import s from "./Pagination.module.css";

function Pagination(props) {

  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

  let startPage = props.currentPage - 4
  let lastPage = props.currentPage + 4

  if (startPage < 1) {
    startPage = 1
  }
  if (lastPage > pagesCount) {
    lastPage = pagesCount
  }

  let pages = []
  for (let i = startPage; i <= lastPage; i++) {
    pages.push(i)
  }

  return (
    <div className={s.pag}>
      {
        pages.map(p => {
          return <div
            key={p}
            className={props.currentPage === p ? s.active : ''}
            onClick={(e) => props.onPageChanged(p)}
          >{p}</div>
        })
      }
    </div>
  )
}

export default Pagination