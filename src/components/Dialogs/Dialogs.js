import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


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
            <TextareaReduxForm onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
    </div>
  )
};

const maxLength100 = maxLengthCreator(100)

function TextareaForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={'body'} component={Textarea} validate={[required, maxLength100]}/>
      <button>Опубликовать</button>
    </form>
  )
}

const TextareaReduxForm = reduxForm({form: `dialogsForm`})(TextareaForm)

export default Dialogs