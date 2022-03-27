import React, { useState } from 'react'
import Center from '../../Framework/Center'
import { Card, Steps, Toast, Tag, Typography, Form, Col, Row, Button, Popconfirm } from '@douyinfe/semi-ui';

const Input = () => {
  const { Option } = Form.Select;
  const { Title, Text } = Typography;
  const { Section, Input, InputNumber, AutoComplete, Select, TreeSelect, Cascader, DatePicker, TimePicker, TextArea, CheckboxGroup, Checkbox, RadioGroup, Radio, Slider, Rating, Switch, TagInput } = Form;

  const [step, setStep] = useState(1)

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

  const submit_1 = (values) => {
    Toast.info({ content: JSON.stringify(values) })
  }
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center', padding: '10px 0'}}>
        <Title heading={2} style={{margin: '8px 0'}} >成绩分析</Title>
        <Tag color='blue' type='solid' size='large' style={{marginLeft: '7px', marginTop: '2px'}}> BETA </Tag>
      </div>
      
      <Card title={
        <Steps current={0} type="basic" size="small">
          <Steps.Step title="考试信息" />
          <Steps.Step title="录入成绩" />
          <Steps.Step title="生成报告" />
        </Steps>
      }>
        <Form layout='vertical' onValueChange={values=>console.log(values)} onSubmit={values => submit_1(values)}>
          {
            ({ formState, values, formApi }) => (
              <>
                <Section text='考生信息'>
                  <Row gutter={10}>
                    <Col span={12}>
                      <Form.Input field='StudentNumber' label='学号' initValue='210247' />
                    </Col>
                    <Col span={12}>
                      <Form.Input field='UserName' label='姓名' rules={[
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
                    field='area'
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
                  <Select
                      field="business"
                      multiple
                      placeholder='请选择考试科目'
                      label="选择科目"
                      rules={[
                        { required: true, message: '此处必填' }
                      ]}
                      initValue={["0","1","2","3","4","5","6"]}
                  >
                      <Select.Option value="0">语文</Select.Option>
                      <Select.Option value="1">数学</Select.Option>
                      <Select.Option value="2">英语</Select.Option>
                      <Select.Option value="3">历史</Select.Option>
                      <Select.Option value="4">地理</Select.Option>
                      <Select.Option value="5">政治</Select.Option>
                      <Select.Option value="6">生物</Select.Option>
                      <Select.Option value="7">物理</Select.Option>
                      <Select.Option value="8">化学</Select.Option>
                      <Select.Option value="9">体育</Select.Option>
                  </Select>
                </Section>

                <div style={{backgroundColor: 'rgba(var(--semi-grey-0), 1)', padding: '10px', marginBottom: '10px',borderRadius:'5px'}}>
                  <code style={{marginTop: 30}}>{JSON.stringify(formState)}</code>
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
                  
                  <Button theme='solid' type="primary" htmlType="submit">
                    下一步
                  </Button>
                </div>
                
              </>
            )
          }
        </Form>

        {/* <Space vertical spacing='loose' align='start'>
          <RadioGroup type='button' buttonSize='small' defaultValue={1} aria-label="单选组合示例">
            <Radio value={1}>即时推送</Radio>
            <Radio value={2}>定时推送</Radio>
            <Radio value={3}>动态推送</Radio>
          </RadioGroup>
          <RadioGroup type='button' buttonSize='middle' defaultValue={1} aria-label="单选组合示例">
            <Radio value={1}>即时推送</Radio>
            <Radio value={2}>定时推送</Radio>
            <Radio value={3}>动态推送</Radio>
          </RadioGroup>
          <RadioGroup type='button' buttonSize='large' defaultValue={1} aria-label="单选组合示例">
            <Radio value={1}>即时推送</Radio>
            <Radio value={2}>定时推送</Radio>
            <Radio value={3}>动态推送</Radio>
          </RadioGroup>
        </Space> */}
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