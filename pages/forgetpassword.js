import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Row, Form, Input, message } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

const ForgetPassword = () => {

    const onFinish = async (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Password Reset</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full p-4 px-4 lg:px-10">
                <img src="" alt="" />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={10} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">
                            FORGOTTEN YOUR PASSWORD?</h1>
                        <p className="my-4">Enter your email address below, and if an account exists, we’ll send you a link to reset your password.</p>
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
                            <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Reset Password &nbsp; <ArrowRightOutlined /></button>
                        </Form>
                    </Col>
                    <Col span={24} xl={4}></Col>
                    <Col span={24} xl={10} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">CREATE AN ACCOUNT</h1>
                        <Link href="/register">
                            <button className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Register &nbsp; <ArrowRightOutlined /></button>
                        </Link>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default ForgetPassword
