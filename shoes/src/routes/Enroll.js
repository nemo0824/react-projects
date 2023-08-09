import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'
import axios from 'axios';

function Enroll() {
  // 값들 저장한 객체
  const [form, setForm] = useState({
    userName : '',
    userId : '',
    userPassword : '',
    userPasswordCheck: '',
    userEmail : '',
    userPhone: '',
  })
  // 오류메시지
  const [nameMessage, setNameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  //유효성 검사
  const [isName, setName] = useState(false); 
  const [isId, setId] = useState(false);
  const [isPassword, setPassword] = useState(false);
  const [isPasswordCheck, setPasswordCheck] = useState(false);
  const [isEmail, setEmail] = useState(false);
  const [isPhone, setPhone] = useState(false);
  
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setForm(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;
 
    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setId(true);
    }
  };

  const onChangePassword = (e)=>{
    const currentPassword = e.target.value
    setPassword(currentPassword)
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,25}$/;
  if(!passwordRegExp.test(currentPassword)) {
    setPasswordMessage("숫자 + 영문자 + 특수문자으로 7자리 이상 입력해주세요~")
    setPassword(false);
  } else{
    setPasswordMessage("안전한 비밀번호입니다 !")
    setPassword(true);
  }
}

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
        <input type='text' placeholder='이름 ' className='input' value={form.userName} onChange={onChangeId}></input>
        <p className='enroll_list'>아이디</p>
        <input type='text' placeholder='아이디 ' className='input' value={form.userId} onChange={onChangeId}></input>
        <p className='alertMessage'>{idMessage}</p>
        <p className='enroll_list'>비밀번호</p>
        <input type='password' placeholder='비밀번호 ' className='input' value={form.userPassword} onChange={onChangePassword}></input>
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