import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Badge, Menu, Dropdown, message } from 'antd'
import { UserOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons'

const Navbar = () => {

    const router = useRouter()

    const isAuth = false;

    const handleLogout = async () => {
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link href='/dashboard'>
                    <h1>Profile</h1>
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <h1>Logout</h1>
            </Menu.Item>
        </Menu>
    );

    return (
        <nav className="fixed top-0 z-50 backdrop-blur-lg w-full flex justify-between items-center h-20 px-4 lg:px-10">
            <div className=" flex items-center">
                <Link href='/'>
                    <h1 className="text-2xl uppercase font-extrabold cursor-pointer mr-2 hidden sm:block">Next.js Auth</h1>
                </Link>
            </div>
            <div className="flex items-center">
                {
                    isAuth ? (
                        <Dropdown overlay={menu} trigger={['click']}>
                            <h1 className="text-xl ml-2 font-bold uppercase flex items-center cursor-pointer bg-secondary p-2 sm:px-4 "><UserOutlined /> &nbsp; <span className="hidden lg:block">Mukul</span></h1>
                        </Dropdown>
                    ) : (
                        <Link href="/">
                            <h1 className="text-xl ml-2 font-bold uppercase flex items-center cursor-pointer bg-secondary p-2 sm:px-4 "><UserOutlined /> &nbsp; <span className="hidden lg:block">Login</span></h1>
                        </Link>
                    )
                }


            </div>
        </nav>
    )
}

export default Navbar
