import React, { Component } from 'react';
import './app.css';
import {
  Row, Col, Menu, Icon, Avatar,
} from 'antd';
import ExampleComponent from 'react-rounded-image';

import photo from './test.jpeg';
export default class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div>
          <Menu align="left" mode="horizontal">
            <Menu.Item>
          Joshua Martin
            </Menu.Item>
            <Menu.Item>
          About
            </Menu.Item>
            <Menu.Item>
          Resume
            </Menu.Item>
          </Menu>
        </div>
        <div>
          <Row>
            <Col span={8}>
              
              <img src={photo} alt="test" />
            </Col>
            <Col span={16}>col-12</Col>
          </Row>
        </div>
      </div>
    );
  }
}
