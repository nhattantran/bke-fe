import React, { useEffect } from 'react'
import './style/login.css'

import {
    BiUser,
    BiLock,
} from 'react-icons/bi'

import {
    FaFacebookF,
} from 'react-icons/fa';

import {
    BsGoogle,
} from 'react-icons/bs';

function Login() {
    useEffect(() => {
        document.title = 'Đăng nhập'
    }, [])
    return (
        <div className="login-page">
            <div className="login-page-bg"></div>
            <div className="login-box">
                <div className="box-center">
                    <div className="login-form">
                        <a href="/">
                            <img className="logo" src={require('../../components/img/HCMUT_official_logo.png')} width="100" height="100" alt="" title="Trở về trang chủ" />
                        </a>
                        <div className="row-input">
                            <div className="user-icon">
                                <BiUser />
                            </div>
                            <input placeholder="Nhập tên tài khoản" className="user-input" type="text" />
                            <span className="warning-text">Tên đăng nhập không được bỏ trống</span>
                        </div>
                        <div className="row-input">
                            <div className="user-icon">
                                <BiLock />
                            </div>
                            <input placeholder="Nhập mật khẩu " className="user-input" type="password" />
                            <span className="warning-text">Mật khẩu không được bỏ trống</span>
                        </div>
                        <div className="row-input">
                            <div className="forget-password">
                                <a href="#" className="forget-link">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <div className="row-input center">
                            <button className="login-btn">Đăng nhập</button>
                        </div>
                        <div className="divider">
                            Hoặc
                        </div>
                        <div className="row-input center">
                            <div className="item facebook-icon center" title="Đăng nhập với facebook">
                                <FaFacebookF />
                            </div>
                            <div className="item google-icon center" title="Đăng nhập với google">
                                <BsGoogle />
                            </div>
                        </div>
                        <div className="row-input center">
                            <span>
                                Bạn chưa có tài khoản? &thinsp;
                                <a href="#">Đăng ký ngay</a>
                            </span>
                        </div>
                        <div className="row-input center">
                            <span>
                                <a href="#">Điều khoản dịch vụ</a>&thinsp; & &thinsp;
                                <a href="#">Chính sách bảo mật</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;