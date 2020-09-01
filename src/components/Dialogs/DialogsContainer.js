import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageAC, taMessageChangeAC} from "../../redux/dialogs-reducer";


function Dialogs(props) {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)

  let messagesElements = props.state.messages.map(m => <MessageItem messageText={m.messageText} id={m.id} key={m.id} />)

  let addMessageTextarea = React.createRef()

  let addMessage = () => {
    props.dispatch(addMessageAC())
  }

  let taChange = () => {
    props.dispatch(taMessageChangeAC(addMessageTextarea.current.value))
  }

  return (
    <div className={s.dialogs_wrap}>
      <div>
        <div className="page_block">
          {dialogsElements}
        </div>
      </div>
      <div>
        <div className="page_block p20">
          {messagesElements}

          <div className={s.submit_message}>
            <textarea onChange={taChange} value={props.state.taText} ref={addMessageTextarea}/>
            <button onClick={addMessage}>Опубликовать</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs