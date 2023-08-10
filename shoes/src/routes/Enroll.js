import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'
import axios from 'axios';

function Enroll() {
  
  //객체 저장
  const [userName , setuserName] = useState("");
  const [userId, setuserId] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userPasswordCheck, setuserPasswordCheck] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  
  const [form, setForm] = useState({
    userName : "",
    userId : "",
    userPassword : "",
    userPasswordCheck : "",
    userEmail : "",
    userPhone : "",
  })
  console.log(form);
  
  // 오류메시지
  const [nameMessage, setNameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  //유효성 검사
  const [isName, setisName] = useState(false); 
  const [isId, setisId] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const [isPasswordCheck, setisPasswordCheck] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPhone, setisPhone] = useState(false);
  
  const [messageStyle, setMessageStyle] = useState({});

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setuserName(currentName);
    setForm({
      ...form,
      userName, 
    });    
    const idRegExp = /^[a-zA-z0-9]{1,5}$/;
 
    if (!idRegExp.test(currentName)) {
      setNameMessage("5글자 이하로 입력해주세요");
      setMessageStyle({ color: 'red' });
      setisName(false);
    } else {
      setNameMessage("올바른 이름입니다 .");
      setMessageStyle({ color: 'green' });
      setisName(true);
    }
  };

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setuserId(currentId);
    setForm({
      ...form,
      userId, 
    });    
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;
 
    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setMessageStyle({ color: 'red' });
      setisId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setMessageStyle({ color: 'green' });
      setisId(true);
    }
  };

  const onChangePassword = (e)=>{
    const currentPassword = e.target.value    
    setuserPassword(currentPassword);
    setForm({
      ...form,
      userPassword, 
    });    
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,25}$/;
  if(!passwordRegExp.test(currentPassword)) {
    setPasswordMessage("숫자 + 영문자 + 특수문자으로 7자리 이상 입력해주세요~")
    setisPassword(false);
  } else{
    setPasswordMessage("안전한 비밀번호입니다 !")
    setisPassword(true);
  }
}
  const onChangePasswordCheck = (e)=>{
    const currentPasswordCheck = e.target.value
    setuserPasswordCheck(currentPasswordCheck);
    setForm({
      ...form,
      userPasswordCheck, 
    });    
    if(userPassword!==currentPasswordCheck){
      setPasswordCheckMessage("비밀번호가 동일하지 않습니다")
      setisPasswordCheck(false);
    }else{
      setPasswordCheckMessage("비밀번호가 동일합니다")
      setisPasswordCheck(true);
    }
  }


  const onChangePhone = (e) =>{
    const currentPhone = e.target.value
    setuserPhone(currentPhone);
    setForm({
      ...form,
      userPhone, 
    });    
    const phoneRegExp = /^010\d{8}$/;
    if(!phoneRegExp.test(currentPhone)){
      setPhoneMessage("8자리 숫자만 입력해주세요")
      setisPhone(false)
    }else{
      setPhoneMessage("옳은 전화번호 입니다")
      setisPhone(true);
    }
    
  }
    const onChangeEmail = (e) =>{
      const currentEmail = e.target.value
      setuserEmail(currentEmail);
      setForm({
        ...form,
        userEmail, 
      });    
      const emailRegxp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!emailRegxp.test(currentEmail)){
        setEmailMessage("이메일 형식이 옳지 않습니다 ")
        setisEmail(false)
      }else{
        setEmailMessage("이메일 형식이 옳습니다")
        setisEmail(true)
      }
    }


  const register = ()=>{
    axios.post('/member/enroll',
    form
    ) 
      .then(response => {
        console.log("회원가입 성공")
      })
      .catch(error => console.log(error));
      console.log("회원가입 실패")
  }

 

  return (
    <div className='Login_form-wrapper'>
    <div className='Login_form'> 
      <form action=''>
        <h2 className='Login_title'>Shoe Market</h2>
        <h3> 회원가입 </h3>
        <p className='enroll_list'>이름</p>
        <input type='text' placeholder='이름 ' className='input' value={userName} onChange={onChangeName}></input>
        <p className='alertMessage' style={messageStyle}>{nameMessage}</p>
        <p className='enroll_list'>아이디</p>
        <input type='text' placeholder='아이디 ' className='input' value={userId} onChange={onChangeId}></input>
        <p className='alertMessage' style={messageStyle}>{idMessage}</p>
        <p className='enroll_list'>비밀번호</p>
        <input type='password' placeholder='비밀번호 ' className='input' value={userPassword} onChange={onChangePassword}></input>
        <p className='alertMessage' style={messageStyle}>{passwordMessage}</p>
        <p className='enroll_list'>비밀번호 확인</p>
        <input type='password' placeholder='비밀번호 확인' className='input'value={userPasswordCheck} onChange={onChangePasswordCheck}></input>
        <p className='alertMessage' style={messageStyle}>{passwordCheckMessage}</p>
        <p className='enroll_list'>Email</p>
        <input type='text' placeholder='email ' className='input'value={userEmail} onChange={onChangeEmail}></input>
        <p className='alertMessage' style={messageStyle}>{emailMessage}</p>
        <p className='enroll_list'>Phone</p>
        <input type='text' placeholder='Phone ' className='input' value={userPhone} onChange={onChangePhone}></input>
        <p className='alertMessage' style={messageStyle}>{phoneMessage}</p>
        <input type="submit" value="회원가입" className='btn-submit' onClick={register}></input>
       
      </form>
    </div>
    </div>
    
  );
  
}

export default Enroll;