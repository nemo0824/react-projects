import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Certificate from './Certificate';
import SelfIntroduce from './SelfIntroduce';

function TabIntroduce() {
  return (
    <div className='TabIntroduce'>
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="certificate" title="certificate">
        <h2>자격증</h2>
        <Certificate></Certificate>
        
      </Tab>
      <Tab eventKey="Introduce" title="Introduce">
        <SelfIntroduce></SelfIntroduce>
      </Tab>
    </Tabs>
    </div>
  );
}

export default TabIntroduce;