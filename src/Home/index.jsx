import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Button, Toast } from '@douyinfe/semi-ui';
import { Avatar, Col, Row, Empty } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import { Descriptions } from '@douyinfe/semi-ui';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { Card } from '@douyinfe/semi-ui';
// import { IconArrowUp } from '@douyinfe/semi-icons';
import { IconHistogram, IconCopyAdd } from '@douyinfe/semi-icons';
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations';

function Home() {
  let navigate = useNavigate();

  const { Title, Text } = Typography;

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

  const route_go = (go) => {
    Toast.success('跳转到 '+go)
    navigate(go);
  }

  return (
    <div className="App">
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
                    <Card onClick={()=>{route_go('/score')}}>
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
    </div>
  );
}

export default Home;
