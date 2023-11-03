import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';
import NavbarComponent from '../NavbarComponent';
import CreateContext from '../store/CreateContext'
const AuthForm = () => {
  const context = useContext(CreateContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading , setIsLoading] = useState(false);
  const emailInput = useRef();
  const passwordInput = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) =>{
        e.preventDefault();
        let url;
        if(isLogin){
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj0Zzo53c5R7CZvKiYDSDRSFVbhXZ2fQM'
        }else{
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj0Zzo53c5R7CZvKiYDSDRSFVbhXZ2fQM'
        }
        setIsLoading(true);
        fetch(url,{
          method : 'POST',
          body : JSON.stringify({
            email : emailInput.current.value,
            password : passwordInput.current.value
          })
        })
        .then((res) =>{
            if(res.ok){
               console.log('success');
               res.json().then((data) =>{
                console.log(data.idToken)
                localStorage.setItem("ecommToken" , data.idToken);
               context.addToken(data.idToken)
               })
               navigate('/')
            }
            else{
              res.json().then((data) =>{
                alert(data.error.message)
               })
            }
            setIsLoading(false);
        })
  }

  return (
    <>
    <NavbarComponent />
    <section className={classes.auth}>
      
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit = {submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref = {emailInput}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref = {passwordInput}
          />
        </div>
        <div className={classes.actions}>
       { isLoading? <p>Loading...</p> :<button type = "submit">{ isLogin? 'Login' : 'Signup' 
}</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </>
  );
};

export default AuthForm;
