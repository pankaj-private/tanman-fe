// src/components/About/About.js

import React from 'react';
import { Row, Col, Layout } from 'antd';
import './About.scss';
import GlobalHeader from './GlobalHeader';

const About = () => {
  return (
    <Layout>
      <GlobalHeader />
      <div className="about-page">

        <h2>About Us</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className="section">
              <h3>Section 1</h3>
              <p>Content for section 1 about your company.</p>
            </div>
          </Col>
          {/* Repeat similar Col components for other sections */}
        </Row>
      </div>
    </Layout>

  );
}

export default About;
