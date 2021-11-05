import React from 'react'
import Head from 'next/head'
import { Col, Row, Spin, Form, Input, Button, Checkbox, message } from 'antd'
import { ArrowRightOutlined, GoogleOutlined } from '@ant-design/icons'
import WithAuth from '../utils/withAuth'

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={10} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">This is protected page</h1>
                        <hr />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WithAuth(Dashboard)
