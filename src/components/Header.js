import React from 'react'
import './style/header.css'
import LocalStorageService from '../service/LocalStorageService.js';
import { useNavigate } from 'react-router-dom';

import {
    Container,
    Col,
    Row,
} from 'react-bootstrap'

import {
    FaUserAlt,
} from 'react-icons/fa'

import {
    CgProfile,
} from 'react-icons/cg';

const localStorageService = LocalStorageService.getService();
const user = localStorageService.getUserInfor();


function Header() {
    const HandleLogOut = () => {
        localStorageService.clearToken();
        localStorageService.clearUserInfor();
        window.location.reload();
    }
    return (
        <div className="bke-header">
            <div className="bke-header-menu-top" id="bke-header-keep_top">
                <Container>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={2} className="bk-logo">
                            <img src={require("./img/HCMUT_official_logo.png")} width="70" height="70" alt="" />
                        </Col>
                        <Col xs={9} sm={9} md={9} lg={10}>
                            <div className="header-btn">
                                <div className="show-hide-menu">
                                    <a href="tel:0989325783" className="phone-number">0989.325.783</a>
                                    <span className="support">HỖ TRỢ</span>
                                    <a className="top-button" href="#">Học TOIEC</a>
                                    <a className="top-button" href="#">Học IELTS</a>
                                    <a className="top-button" href="#">Thi thử</a>
                                    <a className="top-button" href="#">Liên hệ</a>
                                    {user ? <a className="top-button" href="#"><CgProfile className="header-login-icon"/>{user}</a> : null}
                                </div>
                                {user? <a className="header-register-btn" onClick={HandleLogOut}>Đăng xuất</a>: null}
                                {user ? null :<a href="/login" className="header-login-btn">
                                    <FaUserAlt className="header-login-icon" />
                                    Đăng nhập
                                </a>}
                                {user ? null : <a href="/register" className="header-register-btn">Đăng ký</a>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                abc
            </Container>
        </div>
    )
}

export default Header;