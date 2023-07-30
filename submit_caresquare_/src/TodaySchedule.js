import React, { useState } from 'react';

function TodaySchedule() {
  let [ todayTimeLine, setTodayTimeLine] = useState(''); //시간 설정  state
    
  let schedule = [
   
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

  // 입력받은 시간 전까지 

  return (
    <div>
      <h1>오늘 하루 나의 타임라인 </h1>
      <label>
        선택한 시간까지 타임라인 :
        <input type="time" value={ todayTimeLine} onChange={handleTimeChange} />
      </label>
      <div>
        {getEventsAtCurrentTime().map((item) => (
          <div key={item.time}>
            <p>{item.time}</p>
            <p>{item.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodaySchedule;