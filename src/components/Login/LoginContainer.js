import React from "react";
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="login" component="input" />
      </div>
      <div>
        <Field placeholder="Password" name="password" component="input" />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" /> Запомнить меня
      </div>
      <div>
        <button>Залогиниться</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
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