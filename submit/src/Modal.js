import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function IntroduceModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false); // 모달 닫기
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
       포트폴리오
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            포트폴리오 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label>프로젝트 : <a href="https://github.com/nemo0824/react" target="_blank" rel="noopener noreferrer">https://github.com/nemo0824/react</a><br></br></label>  
        <label>프로젝트 : <a href="https://github.com/hongsuk2615/Final_Project" target="_blank" rel="noopener noreferrer">https://github.com/hongsuk2615/Final_Project</a><br></br></label>
        <label> 벨로그  : <a href="https://velog.io/@nemo0824" target="_blank" rel="noopener noreferrer">https://velog.io/@nemo0824</a></label>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default IntroduceModal;