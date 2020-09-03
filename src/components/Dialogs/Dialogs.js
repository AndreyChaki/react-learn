import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, Form} from 'react-final-form'
import {Textarea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const Dialogs = props => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

  let messagesElements = props.dialogsPage.messages.map(m => <MessageItem messageText={m.messageText} id={m.id}
                                                                          key={m.id}/>)


  const onSubmit = (formData) => {
    props.addMessage(formData.body);
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

            <Form onSubmit={onSubmit}>
              {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                  <Field name={'body'} component={Textarea} validate={required}/>
                  <button>Опубликовать</button>
                </form>
              )}
            </Form>

          </div>
        </div>
      </div>
    </div>
  )
};


export default Dialogs