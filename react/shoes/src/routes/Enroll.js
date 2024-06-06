import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
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
  
  const [NamemessageStyle, setNameMessageStyle] = useState({});
  const [IdmessageStyle, setIdMessageStyle] = useState({});
  const [PwmessageStyle, setPwMessageStyle] = useState({});
  const [PwcmessageStyle, setPwcMessageStyle] = useState({});
  const [EmailmessageStyle, setEmailMessageStyle] = useState({});
  const [PhonemessageStyle, setPhoneMessageStyle] = useState({});


  let navigate = useNavigate();

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setuserName(currentName);
    setForm(form => ({
      ...form,
      userName: currentName,
    }));    
    const idRegExp = /^[가-힣]{1,5}$/;
 
    if (!idRegExp.test(currentName)) {
      setNameMessage("한글 5글자 이하로 입력해주세요");
      setNameMessageStyle({ color: 'red' });
      setisName(false);
    } else {
      setNameMessage("올바른 이름입니다 .");
      setNameMessageStyle({ color: 'green' });
      setisName(true);
    }
  };

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setuserId(currentId);
    setForm(form => ({
      ...form,
      userId: currentId,
    }));    
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;
 
    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setIdMessageStyle({ color: 'red' });
      setisId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIdMessageStyle({ color: 'green' });
      setisId(true);
    }
  };

  const onChangePassword = (e)=>{
    const currentPassword = e.target.value    
    setuserPassword(currentPassword);
    setForm(form => ({
      ...form,
      userPassword: currentPassword,
    }));    
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,25}$/;
  if(!passwordRegExp.test(currentPassword)) {
    setPasswordMessage("숫자 + 영문자 + 특수문자으로 7자리 이상 입력해주세요~")
    setPwMessageStyle({ color: 'red' });
    setisPassword(false);
  } else{
    setPasswordMessage("안전한 비밀번호입니다 !")
    setPwMessageStyle({ color: 'green' });
    setisPassword(true);
  }
}
  const onChangePasswordCheck = (e)=>{
    const currentPasswordCheck = e.target.value
    setuserPasswordCheck(currentPasswordCheck);
    setForm(form => ({
      ...form,
      userPasswordCheck: currentPasswordCheck,
    }));    
    if(userPassword!==currentPasswordCheck){
      setPasswordCheckMessage("비밀번호가 동일하지 않습니다")
      setPwcMessageStyle({ color: 'red' });
      setisPasswordCheck(false);
    }else{
      setPasswordCheckMessage("비밀번호가 동일합니다")
      setPwcMessageStyle({ color: 'green' })
      setisPasswordCheck(true);
    }
  }


  const onChangePhone = (e) =>{
    const currentPhone = e.target.value
    setuserPhone(currentPhone);
    setForm(form => ({
      ...form,
      userPhone: currentPhone,
    }));    
    const phoneRegExp = /^010\d{8}$/;
    if(!phoneRegExp.test(currentPhone)){
      setPhoneMessage("8자리 숫자만 입력해주세요")
      setPhoneMessageStyle({ color: 'red' });
      setisPhone(false)
    }else{
      setPhoneMessage("옳은 전화번호 입니다")
      setPhoneMessageStyle({ color: 'green' })
      setisPhone(true);
    }
    
  }
    const onChangeEmail = (e) =>{
      const currentEmail = e.target.value
      setuserEmail(currentEmail);
      setForm(form => ({
        ...form,
        userEmail: currentEmail,
      }));    
      const emailRegxp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!emailRegxp.test(currentEmail)){
        setEmailMessage("이메일 형식이 옳지 않습니다 ")
        setEmailMessageStyle({ color: 'red' });
        setisEmail(false)
      }else{
        setEmailMessage("이메일 형식이 옳습니다")
        setEmailMessageStyle({ color: 'green' })
        setisEmail(true)
      }
    }


    const register = () => {
      
      if (!isName || !isId || !isPassword || !isPasswordCheck || !isEmail || !isPhone) {
        alert("입력한 정보를 다시 확인해주세요.");
        return;
      }
    
      axios
        .post('/member/enroll', form)
        .then(response => {
          console.log("회원가입 성공");
          alert("회원가입 성공하셨습니다!");
          navigate('/')
        })
        .catch(error => {
          console.log("회원가입 실패", error);
          alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
        });
    }

 

  return (
    <div className='Login_form-wrapper'>
    <div className='Login_form'> 
      <form action=''>
        <h2 className='Login_title'>Shoe Market</h2>
        <h3> 회원가입 </h3>
        <p className='enroll_list'>이름</p>
        <input type='text' placeholder='이름' className='input' value={userName} onChange={onChangeName}></input>
        <p className='alertMessage' style={NamemessageStyle}>{nameMessage}</p>
        <p className='enroll_list'>아이디</p>
        <input type='text' placeholder='아이디 ' className='input' value={userId} onChange={onChangeId}></input>
        <p className='alertMessage' style={IdmessageStyle}>{idMessage}</p>
        <p className='enroll_list'>비밀번호</p>
        <input type='password' placeholder='비밀번호 ' className='input' value={userPassword} onChange={onChangePassword}></input>
        <p className='alertMessage' style={PwmessageStyle}>{passwordMessage}</p>
        <p className='enroll_list'>비밀번호 확인</p>
        <input type='password' placeholder='비밀번호 확인' className='input'value={userPasswordCheck} onChange={onChangePasswordCheck}></input>
        <p className='alertMessage' style={PwcmessageStyle}>{passwordCheckMessage}</p>
        <p className='enroll_list'>Email</p>
        <input type='text' placeholder='email ' className='input'value={userEmail} onChange={onChangeEmail}></input>
        <p className='alertMessage' style={EmailmessageStyle}>{emailMessage}</p>
        <p className='enroll_list'>Phone</p>
        <input type='text' placeholder='Phone ' className='input' value={userPhone} onChange={onChangePhone}></input>
        <p className='alertMessage' style={PhonemessageStyle}>{phoneMessage}</p>

        <input type="submit" value="회원가입" className='btn-submit' onClick={register} ></input>
       
      </form>
    </div>
    </div>
    
  );
  
}

export default Enroll;