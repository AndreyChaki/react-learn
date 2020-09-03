import React from "react";
import s from './Settings.module.css'
import {Field, Form} from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import Preloader from "../common/Preloader/Preloader";
import {required} from "../../utils/validators/validators";

function Settings(props) {

  let profile = props.profile

  if (!profile) {
    return <Preloader/>
  }

  const onSubmit = (formData) => {
    props.saveData(formData)
  }

  return (
    <div className="page_block p20">
      <h1>Настройки</h1>
      <SettingsForm {...props} initialValues={props.profile} onSubmit={onSubmit}/>
    </div>
  )
}

function SettingsForm({handleSubmit, error, onSubmit, initialValues}) {
  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({handleSubmit}) => (

        <form onSubmit={handleSubmit}>

          <div className={s.form_block}>

            <label>
              <div>Имя</div>
              <Field name={'fullName'} component={Input} type='text' validate={required}/>
            </label>

            <label>
              <div>Обо мне</div>
              <Field name={'aboutMe'} component={Input} type='text' validate={required}/>
            </label>

            <div>
              <div>Ищу работу?</div>
              <Field name={'lookingForAJob'} component={Input} type='checkbox'/>
            </div>

            <label>
              <div>Описание нужной работы</div>
              <Field name={'lookingForAJobDescription'} type='text' component={Input}/>
            </label>

            <h2>Контакты</h2>

            <Field name={'contacts.github'} type='text' component={Input}/>
            <Field name={'contacts.vk'} type='text' component={Input}/>
            <Field name={'contacts.facebook'} type='text' component={Input}/>
            <Field name={'contacts.instagram'} type='text' component={Input}/>
            <Field name={'contacts.twitter'} type='text' component={Input}/>
            <Field name={'contacts.website'} type='text' component={Input}/>
            <Field name={'contacts.youtube'} type='text' component={Input}/>
            <Field name={'contacts.mainLink'} type='text' component={Input}/>


          </div>

          {error && <div className={s.form_error}>
            {error}
          </div>}

          <button>Сохранить</button>
        </form>

      )}
    </Form>
  )
}


export default Settings