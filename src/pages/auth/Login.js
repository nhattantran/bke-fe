import React, { useEffect, useState } from 'react'
import './style/login.css'

import LocalStorageService from '../../service/LocalStorageService.js';

import { useNavigate } from 'react-router-dom'
import { LoginFunction } from '../../models/User'

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

const localStorageService = LocalStorageService.getService();

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            navigate("/");
        }
    })

    useEffect(() => {
        document.title = 'Đăng nhập'
    }, [])

    const HandleChangeUserName = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const HandleChangePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const HandleSubmit = () => {
        const param = {
            email_phone: username,
            password: password
        }
        
        LoginFunction(param).then(result => {
            if (result.success) {
                localStorageService.setUserInfor(result.data.user)
                navigate("/")
            }
            else setError("Email hoặc mật khẩu không chính xác")
        })
    }
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
                            <input placeholder="Nhập tên tài khoản" className="user-input" type="text" value={username} onChange={HandleChangeUserName}/>
                            
                        </div>
                        <div className="row-input">
                            <div className="user-icon">
                                <BiLock />
                            </div>
                            <input placeholder="Nhập mật khẩu " className="user-input" type="password" value={password} onChange={HandleChangePassword}/>
                            
                        </div>
                        <div className="row-input">
                            <div className="forget-password">
                                <a href="#" className="forget-link">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <div className="row-input center">
                            <span className="warning-text">{error}</span>
                        </div>
                        <div className="row-input center">
                            <button className="login-btn" onClick={HandleSubmit}>Đăng nhập</button>
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
                                <a href="/register">Đăng ký ngay</a>
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