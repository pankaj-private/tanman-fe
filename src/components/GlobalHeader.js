// src/components/HomePage/HomePage.js

import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;


const GlobalHeader = () => {

  const location = useLocation();

  const handleClick = (path) => {
    // You can perform any additional logic here before updating the URL
    // For example, fetching data or handling state changes

    // Update the URL
    window.history.pushState(null, null, path);
  };

  const menuItems = [
    { key: 'home', label: 'Home', path: '/' },
    { key: 'about', label: 'About', path: '/about' },
    { key: 'contact', label: 'Contact Us', path: '/contact' },
  ].map(({ key, label, path }) => (
    <Menu.Item key={key}>
      <Link to={path} onClick={() => handleClick(path)}>
        {label}
      </Link>
    </Menu.Item>
  ));


  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        boxShadow: ' 0px -1px 14px rgba(0,0,0,.1490196078)',
        height: '5.6rem',
        justifyContent: 'space-between',

      }}
    >
      <div className="header-logo">
        <img className="logo" src="logo.png" alt="Oodles" style={{height: 80}}/>
      </div>
      <Menu
        // theme="//#region "
        mode="horizontal"
        defaultSelectedKeys={['home']}
        selectedKeys={[location.pathname]}
        style={{ width: '100%', display: 'flex', justifyContent: 'flex-end',  borderBottom: 'none'}}
      >
        {menuItems}
      </Menu>
    </Header>
  );

}

export default GlobalHeader;
