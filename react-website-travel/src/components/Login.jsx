import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';



function Login(props) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const {location} = props;
  console.log(location);
  //function
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    if (name === 'userName') {
      setUserName(value);
    };
    if (name === 'password') {
      setPassword(value);
    };

  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let dataForm = {
      username: userName,
      password: password,
    }
    //luu userName & password vaof localstorage
    if (userName ==='admin' && password === 'admin') {
      localStorage.setItem('user', JSON.stringify(dataForm))
    }
    setUserName('');
    setPassword('');
  }
  //getlocalStorage
  const getlocalStorage = () => {
    let loggedInUser = localStorage.getItem('user');
    if(loggedInUser) {
      return true;
    }
    return false;
  }
  //neu da dang nhap se chuyen den trang products
  if (getlocalStorage()) {
    return (
      <Redirect to='/products' />
    )
  }

  return (
    <div>
     <form onSubmit = {handleOnSubmit}>
       <div className="form-group">
       <label>Tai Khoan</label>
        <input
        type="text"
        name='userName'
        value={userName}
        onChange = {handleInput}
        />
       </div>

       <div className="form-group">
       <label>Mat Khau</label>
        <input
        type="password"
        name='password'
        value={password}
        onChange = {handleInput}
        />
       </div>
       <div className="form-group">
         <button type='submit'>Dang nhap</button>
       </div>
      </form>
    </div>
  );
}

export default Login;