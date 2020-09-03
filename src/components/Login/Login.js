import React from "react";
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field type={'text'} placeholder="Email" name="email" component={Input} validate={[required]}/>
      </div>
      <div>
        <Field type={'password'} placeholder="Password" name="password" component={Input} validate={[required]}/>
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox"/> Запомнить меня
      </div>
      {error && <div className={s.form_error}>
        {error}
      </div>}
      <div>
        <button>Залогиниться</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div className='page_block p20'>
      <h1>Login</h1>
      <div className={s.login_wrap}>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

export default Login