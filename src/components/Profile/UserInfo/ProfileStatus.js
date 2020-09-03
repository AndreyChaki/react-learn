import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditNode = () => {
    setEditMode(true)
  }

  const deactivateEditNode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode &&
      <div>
        <div onDoubleClick={activateEditNode}>{props.status || 'Empty status'}</div>
      </div>
      }
      {editMode &&
      <div>
        <input
          onChange={onStatusChange}
          onBlur={deactivateEditNode}
          autoFocus={true}
          value={status}
        />
      </div>
      }
    </div>
  )
}

export default ProfileStatus