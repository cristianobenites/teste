import React from 'react';
import { StyledHeader, StyledAvatar, StyledMenu, StyledImage } from './styles';
import logoImage from '../../../assets/logo-gf.png';
import { UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Breadcrumb } from 'antd';

export const Header = (props) => {
 
    const location = useLocation();
    const { menuItems } = props;

    return (
        <StyledHeader>
            <StyledImage src={logoImage} alt="" />
                <StyledMenu mode="horizontal" selectedKeys={[location.pathname]}>
                    {menuItems.map((item) => (
                        <Menu.Item key={item.path} to={item.path}>
                            <Link to={item.path}>{item.name}</Link>
                        </Menu.Item>
                    ))}
            </StyledMenu>
            <StyledAvatar size="medium" icon={<UserOutlined />} />
        </StyledHeader>
    );
};  