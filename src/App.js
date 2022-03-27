import { useState } from 'react';
import { Button, Banner } from '@douyinfe/semi-ui';
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
                  {location.pathname === '/'?<div style={{paddingLeft: '5px'}} />:<><Button icon={<IconHome />} aria-label="返回首页" className='animate__animated animate__fadeIn' onClick={()=>{navigate('/')}} /><div style={{borderRight: '1px solid #EDEDED', margin: '0 10px'}}></div></>}
                  
                  <div style={{alignItems: 'center', display: 'flex',transition:'all 2s'}} className="animate__animated animate__fadeInLeft">
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
        <Banner 
            type="info"
            style={{backgroundColor: 'rgba(var(--semi-grey-1), 1)'}}
            description={<span style={{color: 'rgb(153, 153, 153)'}}>为MU5735遇难同胞默哀。</span>}
            icon={<img width='20px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAD8klEQVRoBe1ZS2gTQRg220i05NCABdv4aLVeVFDQi160xYPPGqVEaIKhtGnFk4IHQepBQbyIB0VpmqQEjIccFBqhIqLWg17sSRSFYg+iPSgEbFNr2iR+f8iUyZrdZHdm4yUL2//9z/fPayfThlUWP/l8XmltbT3n8Xgc4+PjX2U3p8hOyOcLhUL78b6D7h4KWc3bZPF2WYn4PIlEwplKpe5CdxavjWy5XK4D5BXxMh/pIzA2NtYG8G8AMoBeL4AvAj4iEzjLxTfAdKbp6OhoO0C/xruhTJKc3W7f3t/f/7mMzbRK2ghEo9FmTJMXGuAJoLK8vHxfNSqmgbNAKQUQqKWlpQdI2sYSa9BOLOoLGjZT6gZTUaogt9sdhKpaYF3d3d1Pk8nkd1UaU6LwGsCiXZPJZGbQ+vpqEdhstpnGxsbdfr//V7UxWn7CUwjgTxgBT0Aw5doXFhauaYEyohcuAI0dM9Ig80UR50dGRtYx2SwVLgDTgT5QZh76MnvMBPIxwgWgJ+f4hEZ4FL/NiH85X+ECAOJLucSkg20Or5+olo+oXrgAAJjSAgHgFwcHB+MYpR7wWbUfdJ/UOqOycAFNTU30AfvnmKwoypVgMBghQENDQ89AosSzB+DT+HInmWyWChfg9XozaHxYBSAE8Dd4HUbhjkoeRmE/eZ0ZXrgAahRAYiCXGAD0fojxjLpcro/gc0X5KmJuM5sIlVIAAQCgW5gWZ8AS0MLWitNpF71kT6fTW0Dew6cHvtdJJ+MRPkqoQWCq2CKRyNZsNrsTtsdF+ymn0znp8/lSan9RWdoIMCDo4fzAwMA0ptEupiPeCvCU384aqZbGYjH34uJiGEAPord/g9IO9BwgH+HHylvIhXmOHWZldHkeMQpGaB90pxF3CPJGxKwF/9LhcAQDgcC3arGQ30oj1Qbh/DIB38Pl/AHkBwA9AaUf8gfAe8kPcgJkEvJe8MdBm0mvfmCbwHfjqFqvJxseASTr1EpYBNYH2sf7QKZCCsWA500lPGyFBV+irCCYWQOOCjlFzIZzmylABKD02HoB0rvUYEIzi7ikCewctCofFpW9WIiGd7aShAYF4QIIPLY+P7WLKxMiPvpTq0d4DaDHpxlYnmc6q6lwAVYDrJS/XkClHrLaXh8Bq3u4Uv76CFTqIavt9RHAUaKD9TLPM53VVMZRord4hCCsvVYDVucXLqB4eKvp+Ycvor4G+N74H3zFs3s4HO7AFchNTJU9AEi/WVssBjqL/H+wIUzhquYy3THptadbQDwed83Pz3+oAWgtjLO40duhdymmuwbwjzj6F5DVPa4FnvQtuFM9qeegWwACN+kF18KGqbRZr52/kog1G3RoY+UAAAAASUVORK5CYII='></img>}
            closeIcon={null}
        />
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
