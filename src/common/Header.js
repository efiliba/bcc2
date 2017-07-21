import React from 'react';
import './Header.css';
import { Row, Col } from 'react-bootstrap';

export const Header = props => 
  <Row className="app-header-container">
    <Col xs={12}>
      <span className="title">{props.title}</span>
      <i
        className={`collapse-icon fa fa-caret-${props.isCollapsed ? 'down' : 'up'}`}
        onClick={props.onCollapseToggle}
      />
    </Col>
  </Row>;