import { useState } from 'react';
import { Button, Toast } from '@douyinfe/semi-ui';
import Home from './Home'
import Score from './Apps/Score';
import { Layout } from '@douyinfe/semi-ui';
import { Nav } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import { IconSend, IconHome } from '@douyinfe/semi-icons';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const { Title, Text } = Typography;
  const { Header, Footer, Content } = Layout;

  let navigate = useNavigate();
  let location = useLocation();

  const data = [
    { key: '注册用户', value: '1' },
    // {
    //     key: '7天留存',
    //     value: (
    //         <span>
    //             98%
    //             <IconArrowUp size="small" style={{ color: 'red', marginLeft: '4px' }} />
    //         </span>
    //     ),
    // },
    { key: '已发布', value: '0' },
  ];

  const style = {
    // boxShadow: 'var(--semi-shadow-elevated)',
    backgroundColor: 'var(--semi-color-bg-2)',
    // borderRadius: '4px',
    padding: '10px',
    marginRight: '20px',
    // width: '600px',
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={() => Toast.warning({ content: 'welcome' })}>Hello Semi</Button>
      </header> */}
      <Layout className="components-layout-demo">
        <Header>
          <Nav
            style={{height: '45px', padding: '0 8px', alignItems: 'center'}}
            mode={'horizontal'}
            // items={[
            //     { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
            //     { itemKey: 'union', text: '公会中心', icon: <IconStar /> },
            // ]}
            onSelect={key => console.log(key)}
            header={{
                // logo: ,
                text: (<>
                  {location.pathname === '/'?<div style={{paddingLeft: '5px'}} />:<><Button icon={<IconHome />} aria-label="返回首页" onClick={()=>{navigate('/')}} /><div style={{borderRight: '1px solid #EDEDED', margin: '0 10px'}}></div></>}
                  
                  <div style={{alignItems: 'center', display: 'flex'}}>
                    <IconSend size='extra-large' style={{color: 'var(--semi-color-primary)'}} />
                    <span style={{paddingLeft:'10px'}}>虎腾数据</span>
                  </div>
                </>)
            }}
            // footer={
            //     <Dropdown
            //         position="bottomRight"
            //         render={
            //             <Dropdown.Menu>
            //                 <Dropdown.Item>详情</Dropdown.Item>
            //                 <Dropdown.Item>退出</Dropdown.Item>
            //             </Dropdown.Menu>
            //         }
            //     >
            //         <Avatar size="small" color='light-blue' style={{margin: 4}}>BD</Avatar>
            //         <span>YuzeTT</span>
            //     </Dropdown>
            // }
          />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/score" element={<Score />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404</p>
                </main>
              }
            />
          </Routes>
        </Content>
        <Footer>
          <div style={{textAlign: 'center'}}>
            <Text style={{textAlign: 'center'}} type="quaternary">{`© 2022 YuzeTT. All rights reserved.`}</Text>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
