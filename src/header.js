import React from 'react';
import {Link} from 'react-router-dom';
import {MenuOutlined, SearchOutlined} from '@ant-design/icons';

import Logo from './img/logo.png';

export default function Header(){
    return (
        <header id="header">
            <MenuOutlined />
            <Link to="#"><img id="logo" src={Logo} alt="Logo" /></Link>
            <SearchOutlined />
        </header>
    );
}