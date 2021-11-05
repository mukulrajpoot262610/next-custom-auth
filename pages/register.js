import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Col, Row, Form, Input, message } from 'antd'
import { ArrowRightOutlined, GoogleOutlined, CheckOutlined } from '@ant-design/icons'
import withoutAuth from '../utils/withoutAuth'

const Register = () => {

    const router = useRouter()

    const onFinish = async (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={10} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">REGISTER</h1>
                        <hr className="my-4" />
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <h1 className="font-bold text-xl uppercase my-4">Enter Name</h1>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none p-4" placeholder="Enter Name Here..." />
                            </Form.Item>
                            <h1 className="font-bold text-xl uppercase my-4">Enter Gender</h1>
                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select your Gender!',
                                    },
                                ]}
                            >
                                <div className="flex items-center">
                                    <input type='radio' value="male" name="gender" className="" />
                                    <label className="text-xl mr-8">Male</label>
                                    <input type='radio' value="female" name="gender" />
                                    <label className="text-xl mr-8">Female</label>
                                    <input type='radio' value="other" name="gender" />
                                    <label className="text-xl ">Other</label>
                                </div>
                            </Form.Item>

                            <h1 className="font-bold text-xl uppercase my-4">Login Details</h1>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none p-4" placeholder="Enter Email Here..." />
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
                                <Input.Password className="w-full border outline-none p-4" placeholder="Enter Password Here..." />
                            </Form.Item>
                            <Form.Item
                                name="cpassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Confirm your Password!',
                                    },
                                ]}
                            >
                                <Input.Password className="w-full border outline-none p-4" placeholder="Enter Password Here Again..." />
                            </Form.Item>
                            <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Regsiter &nbsp; <ArrowRightOutlined /></button>
                        </Form>
                    </Col>
                    <Col span={24} xl={4}></Col>
                    <Col span={24} xl={10} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">Already have AN ACCOUNT?</h1>
                        <Link href="/" passHref={true}>
                            <button className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Login &nbsp; <ArrowRightOutlined /></button>
                        </Link>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default (Register)
