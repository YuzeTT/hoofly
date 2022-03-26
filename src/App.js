import { useState } from 'react';
import { Button, Toast } from '@douyinfe/semi-ui';
import { Layout } from '@douyinfe/semi-ui';
import { Nav, Avatar, Dropdown, Col, Row, Empty } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import { Descriptions } from '@douyinfe/semi-ui';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { Card } from '@douyinfe/semi-ui';
// import { IconArrowUp } from '@douyinfe/semi-icons';
import { IconHistogram, IconSend, IconCopyAdd } from '@douyinfe/semi-icons';
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations';
import logo from './logo.svg';
import './App.css';

function App() {
  const { Title, Text } = Typography;
  const { Header, Footer, Content } = Layout;

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
            style={{height: '45px'}}
            mode={'horizontal'}
            // items={[
            //     { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
            //     { itemKey: 'union', text: '公会中心', icon: <IconStar /> },
            // ]}
            onSelect={key => console.log(key)}
            header={{
                // logo: ,
                text: (<><IconSend size='extra-large' style={{color: 'var(--semi-color-primary)'}} /><span style={{paddingLeft:'10px'}}>虎腾数据</span></>)
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
          <div style={{maxWidth: '600px', margin: '0 auto', padding: '10px 15px'}}>
            <Title heading={2} style={{margin: '8px 0'}} >👋你好，YuzeTT</Title>

            <Descriptions data={data} row style={style} size="large" />

            <div>
              <Tabs type="line">
                <TabPane tab="我的关注" itemKey="1">
                  <h3>小程序</h3>
                  <div>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Card>
                          <div style={{display: 'flex', alignItems: 'center'}}>
                            <Avatar color="blue" style={{ marginRight: '15px', borderRadius: '10px', backgroundColor: 'rgba(var(--semi-green-1), 1)' }} shape="square">
                              <IconHistogram size='extra-large' style={{color: 'rgba(var(--semi-green-6), 1)'}} />
                            </Avatar>
                            <div>
                              <Title heading={5} style={{paddingBottom: '3px'}}>成绩分析</Title>
                              <Text style={{textAlign: 'center'}} type="tertiary">APPID: 100001</Text>
                            </div>
                          </div>
                        </Card>
                      </Col>
                      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Card>
                          <div style={{display: 'flex', alignItems: 'center'}}>
                            <Avatar color="blue" style={{ marginRight: '15px', borderRadius: '10px', backgroundColor: 'rgba(var(--semi-light-blue-1), 1)' }} shape="square">
                              <IconCopyAdd size='extra-large' style={{color: 'rgba(var(--semi-blue-6), 1)'}} />
                            </Avatar>
                            <div>
                              <Title heading={5} style={{paddingBottom: '3px'}}>发布作业</Title>
                              <Text style={{textAlign: 'center'}} type="tertiary">APPID: 100001</Text>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                    
                  </div>
                </TabPane>
                <TabPane tab="课程" itemKey="2">
                  <Empty
                    style={{paddingTop: '15px'}}
                    image={<IllustrationConstruction style={{width: 150, height: 150}} />}
                    darkModeImage={<IllustrationConstructionDark style={{width: 150, height: 150}} />}
                    title={'功能建设中'}
                    description="当前功能暂未开放，敬请期待。"
                  />
                </TabPane>
                <TabPane tab="发布" itemKey="3">
                  <Empty
                    style={{paddingTop: '15px'}}
                    image={<IllustrationConstruction style={{width: 150, height: 150}} />}
                    darkModeImage={<IllustrationConstructionDark style={{width: 150, height: 150}} />}
                    title={'功能建设中'}
                    description="当前功能暂未开放，敬请期待。"
                  />
                </TabPane>
            </Tabs>
            </div>
          </div>
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
