import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



// 입력받은 시간 전까지 

function TodaySchedule() {

    
let [ todayTimeLine, setTodayTimeLine] = useState(''); //시간 설정  state
    
let schedule = [
  { time: '00:00', event: '취침' },
  { time: '01:00', event: '취침' },
  { time: '02:00', event: '취침' },
  { time: '03:00', event: '취침' },
  { time: '04:00', event: '취침' },
  { time: '05:00', event: '취침' },
  { time: '06:00', event: '취침' },
  { time: '07:00', event: '취침' },
  { time: '08:00', event: '취침' },
  { time: '09:00', event: '기상' },
  { time: '10:00', event: '식사' },
  { time: '10:30', event: 'React 강의' },
  { time: '13:00', event: '식사' },
  { time: '14:00', event: '헬스' },
  { time: '15:30', event: '씻기' },
  { time: '16:00', event: '집안일' },
  { time: '17:00', event: 'React 프로젝트 ' },
  { time: '20:00', event: '식사' },
  { time: '21:00', event: 'CS 관련 서적 읽기 및 구직' },
  { time: '24:00', event: '취침' },
]; // 스케줄 [{time, event}]

let handleTimeChange = (e) => {
  setTodayTimeLine(e.target.value);
}; 
//  입력받은 시간 변경

let getEventsAtCurrentTime = () => {
  return schedule.filter((item) =>  todayTimeLine >= item.time);
};
   

  return (
    <div className='CardForm'>
    <Card className='Card'>
      <Card.Body>
        <Card.Title>오늘 하루일정</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> <label>
        선택한 시간까지 타임라인 : 
        <input type="time" value={ todayTimeLine} onChange={handleTimeChange} />
      </label></Card.Subtitle>
        <Card.Text>
        {getEventsAtCurrentTime().map((item) => (
          <div key={item.time}>
            <p className='time'>{item.time}</p>
            <p className='event'>{item.event}</p>
          </div>
        ))}
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
  );
}




export default TodaySchedule;