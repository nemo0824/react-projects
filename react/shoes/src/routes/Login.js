import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { setLoginUser } from '../store';
import { Link } from 'react-router-dom';
function Login() {
  
  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    userPassword : "",
  });
  const navigate = useNavigate();

  let state = useSelector((state)=>{return state})
  console.log(state.userCart)
  let dispatch = useDispatch()
  



  const handleLoginFormSubmit = (e) => {
    e.preventDefault(); 
    axios.post('/member/login', loginInfo)
      .then(response => {
        console.log(response)
        if(response.data == null){
          alert('로그인 실패')
        }else{
          alert('로그인 성공')
          Object.keys(response.data).forEach(function(key){
            window.sessionStorage.setItem(key, response.data[key]);
            console.log(window.sessionStorage.setItem)
          })
          dispatch(setLoginUser(response.data));
          navigate('/')
        }
        
      })
      .catch(error => {
        console.error("로그인 실패", error);
      });
     
  }


  return (
    <div className='Login_form-wrapper'>
    <div className='Login_form'> 
      <form onSubmit={handleLoginFormSubmit}>
        <h2 className='Login_title'>Shoe Market</h2>
        <h3> 로그인 </h3>
        <p className='enroll_list'>아이디</p>
        <input type='text' placeholder='아이디 ' className='input'  onChange={e => setLoginInfo({ ...loginInfo, userId: e.target.value })}></input>
        <p className='enroll_list'>비밀번호</p>
        <input type='password' placeholder='비밀번호 ' className='input' onChange= {e=> setLoginInfo({...loginInfo, userPassword: e.target.value})}></input>
        <input type="submit" value="로그인" className='btn-submit' ></input>
        <div className='login_atage'>
        <Link to="/enroll">회원가입</Link>
         
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Login;