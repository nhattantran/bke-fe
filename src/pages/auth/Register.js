import React, { useEffect } from 'react'
import './style/login.css'
import LocalStorageService from '../../service/LocalStorageService'
import { useNavigate } from 'react-router-dom'

import {
    BiUser,
    BiLock,
} from 'react-icons/bi'

const localStorageService = LocalStorageService.getService();


function Register() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            navigate("/");
        }
    })
    useEffect(() => {
        document.title = 'Đăng ký'
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
                            <label>Địa chỉ email</label>
                            <div className="user-icon">
                                <BiUser />
                            </div>
                            <input placeholder="Nhập địa chỉ email" className="user-input" type="text" />
                            <span className="warning-text">Tên đăng nhập không được bỏ trống</span>
                        </div>
                        <div className="row-input">
                            <label>Mật khẩu</label>
                            <div className="user-icon">
                                <BiLock />
                            </div>
                            <input placeholder="Nhập mật khẩu " className="user-input" type="password" />
                            <span className="warning-text">Mật khẩu không được bỏ trống</span>
                        </div>
                        <div className="row-input">
                            <label>Nhập lại mật khẩu</label>
                            <div className="user-icon">
                                <BiLock />
                            </div>
                            <input placeholder="Nhập lại mật khẩu " className="user-input" type="password" />
                            <span className="warning-text">Mật khẩu không được bỏ trống</span>
                        </div>
                        <div className="row-input center">
                            <span>
                                Bằng việc đăng ký, bạn đã đồng ý với BKE <br/>
                                <a href="#">Điều khoản dịch vụ</a>&thinsp; & &thinsp;
                                <a href="#">Chính sách bảo mật</a>
                            </span>
                        </div>
                        <div className="row-input center">
                            <button className="login-btn">Đăng ký</button>
                        </div>
                        <div className="divider">
                            Hoặc
                        </div>
                        <div className="row-input center">
                            <span>
                                Bạn đã có tài khoản? &thinsp;
                                <a href="/login">Đăng nhập ngay</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;