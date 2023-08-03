import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className='Login_form-wrapper'>
    <div className='Login_form'> 
      <form action=''>
        <h2 className='Login_title'>Shoe Market</h2>
        <h3> 로그인 </h3>
        <p className='enroll_list'>아이디</p>
        <input type='text' placeholder='아이디 ' className='input'></input>
        <p className='enroll_list'>비밀번호</p>
        <input type='password' placeholder='비밀번호 ' className='input'></input>
        <input type="submit" value="로그인" className='btn-submit'></input>
        <div className='login_atage'>
         <a>회원가입 </a>
         <a>비밀번호찾기</a>
         <a>아이디찾기</a>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Login;