import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Enroll() {
  return (
    <div className='Login_form-wrapper'>
    <div className='Login_form'> 
      <form action=''>
        <h2 className='Login_title'>Shoe Market</h2>
        <h3> 회원가입 </h3>
        <p className='enroll_list'>이름</p>
        <input type='text' placeholder='이름 ' className='input'></input>
        <p className='enroll_list'>아이디</p>
        <input type='text' placeholder='아이디 ' className='input'></input>
        <p className='enroll_list'>비밀번호</p>
        <input type='password' placeholder='비밀번호 ' className='input'></input>
        <p className='enroll_list'>비밀번호 확인</p>
        <input type='password' placeholder='비밀번호 확인' className='input'></input>
        <input type="submit" value="로그인" className='btn-submit'></input>
       
      </form>
    </div>
    </div>
    
  );
}

export default Enroll;