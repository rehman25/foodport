import React, { Component } from 'react';
import { Layout } from 'antd';
import { Row, Col, Typography } from 'antd';
const { Text } = Typography;

const { Content } = Layout;
class AppLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout style={{ height: '100vh' }}>
        <div className='user-account'>
          <Content>{children}</Content>
        </div>
        <footer className="footer-user">
          <div className='container'>
            <Row align='center'>
           
            </Row>
          </div>
        </footer>
      </Layout>
    );
  }
}

export default AppLayout;
