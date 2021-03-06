import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Row, Spin, Form, Input, Button, Checkbox, message } from 'antd'
import { ArrowRightOutlined, GoogleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
// import withoutAuth from '../utils/withoutAuth'

const Login = () => {

  const router = useRouter()

  const onFinish = async (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container w-full p-4 px-4 lg:px-10 mt-10">
        <Row className="flex flex-col xl:flex-row">
          <Col span={24} xl={10} className="p-4">
            <h1 className="font-bold text-5xl uppercase">LOG IN</h1>
            <hr className="my-4" />
            <h1 className="font-bold text-xl uppercase my-4">Enter Details</h1>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              size="large"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input type='text' className="w-full border outline-none mt-4 p-4" placeholder="Enter Email Here..." />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password className="w-full border outline-none mt-4 p-4" placeholder="Enter Password Here..." />
              </Form.Item>
              <Link href="/forgetpassword" passHref={true}>
                <p className="my-2 inline-block underline cursor-pointer">Forgotten Password?</p>
              </Link>
              <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Log In &nbsp; <ArrowRightOutlined /></button>
            </Form>
          </Col>
          <Col span={24} xl={4}></Col>
          <Col span={24} xl={10} className="p-4">
            <h1 className="font-bold text-5xl uppercase">CREATE AN ACCOUNT</h1>
            <Link href="/register" passHref={true}>
              <button className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Register &nbsp; <ArrowRightOutlined /></button>
            </Link>
          </Col>
        </Row>
      </div>

    </div>
  )
}

export default (Login)
