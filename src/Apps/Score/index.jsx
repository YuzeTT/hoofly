import React, { useState, useEffect } from 'react'
import Center from '../../Framework/Center'
import { Card, Steps, Descriptions, Tag, Typography, Form, Col, Row, Button, Popconfirm, TextArea, Collapse } from '@douyinfe/semi-ui';

const Input = () => {
  const { Option } = Form.Select;
  const { Title, Text } = Typography;
  const { Section, Input, InputNumber, AutoComplete, Select, TreeSelect, Cascader, DatePicker, TimePicker, CheckboxGroup, Checkbox, RadioGroup, Radio, Slider, Rating, Switch, TagInput, Label } = Form;

  const [step, setStep] = useState(0)

  const treeData = [
      {
          label: '七年级',
          value: '7',
          key: '0',
          children: [
              {
                  label: '上册',
                  value: '1',
                  key: '0-1',
              },
              {
                  label: '下册',
                  value: '2',
                  key: '0-2',
              },
          ],
      },
      {
          label: '八年级',
          value: '8',
          key: '1',
          children: [
              {
                  label: '上册',
                  value: '1',
                  key: '1-1',
              },
              {
                  label: '下册',
                  value: '2',
                  key: '1-2',
              },
          ],
      },
      {
          label: '九年级',
          value: '9',
          key: '2',
          children: [
              {
                  label: '上册',
                  value: '1',
                  key: '2-1',
              },
              {
                  label: '下册',
                  value: '2',
                  key: '2-2',
              },
          ],
      },
  ];
  const formBox = {
    width: '90%'
  }
  const subject = [
    { name: '语文', fullScore: 150, ranking: 0 },
    { name: '数学', fullScore: 150, ranking: 0 },
    { name: '英语', fullScore: 150, ranking: 0 },
    { name: '历史', fullScore: 100, ranking: 0 },
    { name: '地理', fullScore: 100, ranking: 0 },
    { name: '政治', fullScore: 100, ranking: 0 },
    { name: '生物', fullScore: 100, ranking: 0 },
    { name: '物理', fullScore: 100, ranking: 0 },
    { name: '化学', fullScore: 100, ranking: 0 },
    { name: '体育', fullScore: 30, ranking: 0 },
  ]

  const [testInfo, setTestInfo] = useState()
  const [scores, setScores] = useState()
  const [fullScores, setFullScores] = useState()
  const [scoreDatas, setScoreDatas] = useState()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [allFullScores, setAllFullScores] = useState(false)

  const submit_0 = (values) => {
    // Toast.info({ content: JSON.stringify(values) })
    setTestInfo(values)
    setFullScores(Object.entries(values).filter(([k]) => k.startsWith('fullScore')))
    setStep(1)
  }
  useEffect(()=>{
    console.log(scores)
  }, [scores])
  const submit_1 = (values) => {
    // 开始加载
    setSubmitLoading(true)
    // 赋值分数
    setScores(Object.entries(values).filter(([k]) => k.startsWith('score')))
    // 整理分数
    const score_ = Object.entries(values).filter(([k]) => k.startsWith('score'))
    setScoreDatas(
      fullScores.map(([/**/, vfs], i) => {
        const [/**/, vs = null] = score_[i] || [];
        return [vs, vfs]; 
      })
    )
    // 计算总分
    let as = 0
    for(let i = 0; i < score_.length; i++) {
      console.log(score_[i][1])
      as = as + score_[i][1]
    }
    setAllFullScores(as)
    // 取消加载
    setSubmitLoading(false)
    // 切换下一步
    setStep(2)
  }
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center', padding: '10px 0'}}>
        <Title heading={2} style={{margin: '8px 0'}} >学情报告</Title>
        <Tag color='blue' type='solid' size='large' style={{marginLeft: '7px', marginTop: '2px'}}> BETA </Tag>
      </div>
      
      <Card title={
        <Steps current={step} type="basic" size="small">
          <Steps.Step title="考试信息" />
          <Steps.Step title="录入成绩" />
          <Steps.Step title="生成报告" />
        </Steps>
      }>
        {/* ====== step 1 ====== */}
        <Form style={{display: step===0?'':'none'}} layout='vertical' onValueChange={values=>console.log(values)} onSubmit={values => submit_0(values)}>
          {
            ({ formState, values, formApi }) => (
              <>
                <Section text='考生信息'>
                  <Row gutter={10}>
                    <Col span={12}>
                      <Form.Input field='studentNumber' label='学号' initValue='210247' />
                    </Col>
                    <Col span={12}>
                      <Form.Input field='name' label='姓名' rules={[
                        { required: true, message: '此处必填' }
                      ]} initValue='饶志伟'/>
                    </Col>
                  </Row>
                  
                  {/* <Form.Input field='Password' label='密码' style={{width:176}}/> */}
                  
                </Section>
                <Section text='考试信息'>
                  <Form.Cascader
                    placeholder="请选择考试年级"
                    treeData={treeData}
                    field='grade'
                    validateStatus="default"
                    label='年级'
                    rules={[
                      { required: true, message: '此处必填' }
                    ]}
                    initValue={['7','2']}
                  >
                  </Form.Cascader>
                  <RadioGroup style={{padding: '0'}} field="testType" type='button' label='考试类型' rules={[
                    { required: true, message: '此处必填' }
                  ]} initValue='month1'>
                    <Radio value='month1'>月考 #1</Radio>
                    <Radio value='center'>期中</Radio>
                    <Radio value='month2'>月考 #2</Radio>
                    <Radio value='end'>期末</Radio>
                    <Radio value='other'>其他</Radio>
                  </RadioGroup>
                </Section>
                <Section text='设置满分'>
                  <Row gutter={10}>
                    {
                      subject.map((item, i)=> {
                        return (
                          <Col span={8} xs={8} sm={8} md={6} lg={6} xl={6} key={i}>
                            <InputNumber hideButtons labelPosition='inset' field={'fullScore'+i} initValue={item.fullScore} label={{text:item.name, required: true}}/>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </Section>

                <div style={{backgroundColor: 'rgba(var(--semi-grey-0), 1)', padding: '10px', marginBottom: '10px',borderRadius:'5px'}}>
                  <TextArea value={JSON.stringify(formState.values)}></TextArea>
                </div>
                <div style={{textAlign: 'right'}}>
                  <Popconfirm
                    title="是否重置？"
                    content="将所有表单清空"
                    onConfirm={()=>{formApi.reset()}}
                    position='topRight'
                  >
                    <Button theme='light' type='danger' style={{ marginRight: 8 }}>重置</Button>
                  </Popconfirm>
                  
                  <Button theme='solid' type="primary" htmlType="submit" style={{ width: 120 }}>
                    下一步
                  </Button>
                </div>
                
              </>
            )
          }
        </Form>

        {/* ====== step 2 ====== */}

        <Form labelPosition='inset' style={{display: step===1?'':'none'}} layout='vertical' onValueChange={values=>console.log(values)} onSubmit={values => submit_1(values)}>
          {
            ({ formState, values, formApi }) => (
              <>
                <Section text='各科成绩'>
                  {
                    subject.map((item, i)=> {
                      return (
                        <Row gutter={10} style={{display: 'flex', alignItems: 'center'}} key={i}>
                          {/* <Col span={8}>
                            <Label text="语文"/>
                          </Col> */}
                          <Col span={10} style={{display: 'flex', alignItems: 'center'}}>
                            <Label text={item.name} style={{margin: 0}}/>
                            <Form.InputNumber hideButtons field={'score'+i} label='成绩' initValue={''} />
                          </Col>
                          <Col span={8}>
                            <Form.InputNumber  field={'ranking'+i} label='排名' initValue={item.ranking}/>
                          </Col>
                          <Col span={6}>
                            <Form.Checkbox field={'noTest'+i} noLabel>无考试</Form.Checkbox>
                          </Col>
                        </Row>
                      )
                    })
                  }
                  
                  
                  
                  {/* <Form.Input field='Password' label='密码' style={{width:176}}/> */}
                  
                </Section>

                <div style={{backgroundColor: 'rgba(var(--semi-grey-0), 1)', padding: '10px', marginBottom: '10px',borderRadius:'5px'}}>
                  {/* <code style={{marginTop: 30}}>{JSON.stringify(formState)}</code> */}
                  <TextArea value={JSON.stringify(formState.values)}></TextArea>
                </div>
                <div style={{textAlign: 'right'}}>
                  <Button theme='light' type='tertiary' style={{ marginRight: 8 }} onClick={()=>{setStep(0)}}>上一步</Button>
                  
                  <Button loading={submitLoading} theme='solid' type="primary" htmlType="submit"  style={{ width: 120 }}>
                    下一步
                  </Button>
                </div>
                
              </>
            )
          }
        </Form>

        {/* ====== step 3 ====== */}
        {step===2?<div>
          {/* <TextArea value={JSON.stringify(subject)}></TextArea> */}
          <Text type="tertiary">总分</Text>
          <div style={{display: 'flex', alignItems: 'end', margin: '10px 0'}}>
            <Title style={{fontSize: '3.6rem'}}>
              {allFullScores}
            </Title>
            <Text strong style={{paddingLeft: '5px'}}>分</Text>
          </div>
          <hr style={{margin: '20px 0', borderColor: 'rgba(var(--semi-grey-1), .2)'}}/>
          <div>
            <Row gutter={[15,15]}>
              {
                scoreDatas.map((item, key)=>{
                  return (
                    
                    <Col span={12} xs={12} sm={12} md={8} lg={8} xl={8} key={key}>
                      <div >
                        <Text style={{fontSize: '1rem'}}>{subject[key].name}</Text>
                        {
                          item[0]?
                          <Text strong style={{paddingLeft: '5px', fontSize: '1rem'}}>{item[0]}</Text>:<Text type="quaternary" strong style={{paddingLeft: '5px', fontSize: '1rem'}}>阅卷中</Text>
                        }
                        
                        <Text strong style={{paddingLeft: '5px', fontSize: '1rem'}} type="quaternary">/ {item[1]}</Text>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </div>
          <br />
          <Collapse>
            <Collapse.Panel header="考试信息" itemKey="1">
              <TextArea autosize rows={1} value={JSON.stringify(testInfo, null, '\t')}></TextArea>
            </Collapse.Panel>
            <Collapse.Panel header="分数信息" itemKey="2">
              <TextArea autosize rows={1} value={JSON.stringify(scores, null, '\t')}></TextArea>
            </Collapse.Panel>
            <Collapse.Panel header="处理结果" itemKey="3">
              {/* <TextArea autosize rows={1} value={scores}></TextArea> */}
              <TextArea autosize rows={1} value={JSON.stringify(scoreDatas)}></TextArea>
            </Collapse.Panel>
          </Collapse>

          <div style={{textAlign: 'right',paddingTop: '20px'}}>
            <Button theme='light' type='tertiary' style={{ marginRight: 8 }} onClick={()=>{setStep(1)}}>上一步</Button>
          </div>
        </div>:''}
      </Card>
    </div>
  )
}

function Score() {
  return (
    <div>
      <Center>
        <Input/>
      </Center>
    </div>
  )
}

export default Score