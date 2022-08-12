import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';


const { Option } = Select;
const { Item, useForm } = Form;

const layout = {
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};


const SignupForm = ({ signup, verifyEmailToken, resendEmailToken, loadingModal,form }) => {
  
  
  return (
      <div>
    <Form
      form={form}
      {...layout}
      name="basic"
      initialValues={{ remember: true }}>
      <Row gutter={12}>
        <Col xs={24} sm={12} md={12}>
          <Item
            name="firstName"
            rules={[{ required: true, message: 'Please enter First Name!' }]}>
            <Input placeholder="First name" />
          </Item>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <Item
            name="lastName"
            rules={[{ required: true, message: 'Please enter Last Name!' }]}>
            <Input placeholder="Last name" />
          </Item>
        </Col>
        <Col xs={24} sm={24} md={24}>
          <Item
            name="email"
            rules={[{ required: true, message: 'Please enter a valid Email address!' }]}>
            <Input placeholder="Email" />
          </Item>
          <Item
            name="phone"
            rules={[{ required: true, message: 'Please enter Phone number!' }]}>
            <Input placeholder="Phone#" />
          </Item>
          <Item
            name="password"
            rules={[{ required: true, message: 'Please enter password!' }]}>
            <Input.Password placeholder="Password" />
          </Item>
          <Item
              name="userType"
              rules={[{ required: true, message: 'Select User Type' }]}>
              <Select
                style={{ width: '100%' }}
                placeholder='Select User Type'>
                <Option>Individual User</Option>
                <Option>BUSINESS</Option>
              </Select>
            </Item>
        </Col>
      </Row>
     <>
      <Item
        name="zip"
            rules={[{ required: true, message: 'Please enter Zip code or City!' }]}>
            <Input placeholder="Zip code/city name" />
      </Item>

      <Row gutter={12}>
        <Col xs={24} sm={16} md={8}>
          <div className="form-group">
            <Item
              name="month"
              rules={[{ required: true, message: 'Select month' }]}>
              <Select
                style={{ width: '100%' }}
                placeholder='Month'
                >
              </Select>
            </Item>
          </div>
        </Col>
        <Col xs={24} sm={16} md={8}>
          <div className="form-group">
            <Item
              name='day'
              rules={[{ required: true, message: 'Select day' }]}>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder='Day'>
              </Select>
            </Item>
          </div>
        </Col>
        <Col xs={24} sm={16} md={8}>
          <div className="form-group">
            <Item
              name="year"
              rules={[{ required: true, message: 'Select year' }]}>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder='Year'>
              </Select>
            </Item>
          </div>
        </Col>
      </Row>
      </>
     

  
    <Item
            name="businessName"
            rules={[{ required: true, message: 'Please enter a Business Name' }]}>
            <Input placeholder="Business Name" />
          </Item>
   
      <Item {...tailLayout}>
        <Button
          type='primary'
         >
          Signup
        </Button>
      </Item>
    </Form>
 
    </div>
  )
}

export default SignupForm;
