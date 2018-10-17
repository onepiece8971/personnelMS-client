import React from 'react'
import { Row, Col, Button } from 'antd'
import '../scss/app.scss'

const Login = ({users, getUser}) => (
  <div>
    <Row>
      <Col span={24} className="center">
        <p>{users[1] ? users[1].name : 'button'}</p>
        <Button type="primary" onClick={getUser}>Button</Button>
      </Col>
    </Row>
  </div>
)

export default Login