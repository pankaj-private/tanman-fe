// src/components/HomePage/HomePage.js

import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import GlobalHeader from './GlobalHeader';
import './HomePage.scss';



const { Header, Content, Footer } = Layout;


const HomePage = () => {

  return (
    <Layout>
      <GlobalHeader />

      <Content
        // className="site-layout"
      // style={{
      //   padding: '0 50px',
      // }}
      >
        <div className="main-industry">
          <div className="ind-head">Let us talk about you </div>
          <div className="ind-content">A simple but powerful reminder of the positive domino effect a good education can have on many aspects of a person’s life and outlook.</div>
          <div className="ind-button">
            <div className="main-button">
              <div className="content3">Talk to our Experts</div>
            </div>
          </div>
        </div>

        
      
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        © Copyright 2024 Tanman team. All rights reserved.
      </Footer>
    </Layout>
  );

}

export default HomePage;
