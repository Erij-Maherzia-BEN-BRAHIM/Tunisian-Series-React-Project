import React, { useRef } from 'react'
import Card from './Card'
import styles from "../components/AddSerieForm.module.css";
import { useContext } from 'react';
import { LoginContext } from './../store/loginContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
        const refLogin = useRef();
        const refPwd = useRef();
        const logC= useContext(LoginContext)
        const navigate= useNavigate()
    function submitHandler(event) {
        event.preventDefault();
        console.log(refLogin.current.value, refPwd.current.value);
        let logValue= logC.seConnecter(refLogin.current.value, refPwd.current.value)
        if (logValue)
        navigate('/')
      }
  return (
    <Card>
    <div>
        <form onSubmit={submitHandler}  className={styles.form}>
            <label htmlFor='username' className={styles.label}>Username</label><br/>
            <input type="text" name='username' className={styles.input} ref={refLogin}></input><br/>
            <label htmlFor='password' className={styles.label}>Password</label><br/>
            <input type="password" name='password' className={styles.input} ref={refPwd}></input> <br/>

             <button type='submit'  className={styles.button}>Login</button>
        </form>
    </div>
    </Card>
  )
}
