import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'
import axios from 'axios';

function Enroll() {
  const [form, setForm] = useState({
    userEmail : '',
    userPassword : '',
    userPasswordCheck: '',
    userName : '',
    userId : '',
    userPhone: '',
  })

  const register = ()=>{
    axios.post('/member/enroll',{
      form
    }) 
      .then(response => {
        
      })
      .catch(error => console.log(error));
  }

 

  return (
    <div className='Login_form-wrapper'>
    <div className='Login_form'> 
      <form action=''>
        <h2 className='Login_title'>Shoe Market</h2>
        <h3> 회원가입 </h3>
        <p className='enroll_list'>이름</p>
        <input type='text' placeholder='이름 ' className='input' value={form.userName} onChange={e => setForm({...form , userName: e.target.value})}></input>
        <p className='enroll_list'>아이디</p>
        <input type='text' placeholder='아이디 ' className='input' value={form.userId} onChange={e => setForm({...form , userId: e.target.value})}></input>
        <p className='enroll_list'>비밀번호</p>
        <input type='password' placeholder='비밀번호 ' className='input' value={form.userPassword} onChange={e => setForm({...form , userPassword: e.target.value})}></input>
        <p className='enroll_list'>비밀번호 확인</p>
        <input type='password' placeholder='비밀번호 확인' className='input'value={form.userPasswordCheck} onChange={e => setForm({...form , userPasswordCheck: e.target.value})}></input>
        <p className='enroll_list'>Email</p>
        <input type='text' placeholder='email ' className='input'value={form.userEmail} onChange={e => setForm({...form , userEmail: e.target.value})}></input>
        <p className='enroll_list'>Phone</p>
        <input type='text' placeholder='Phone ' className='input' value={form.userPhone} onChange={e => setForm({...form , userPhone: e.target.value})}></input>
        
        <input type="submit" value="회원가입" className='btn-submit' onClick={register}></input>
       
      </form>
    </div>
    </div>
    
  );
  
}

export default Enroll;