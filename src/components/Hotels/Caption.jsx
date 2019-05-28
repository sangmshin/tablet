import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import style from './Hotels.module.scss';

const Caption = ({ type, visible }) => 
  <Col xs={6} sm={12} md={12} lg={6}>
    {
      visible &&
      <p className={style.criteria}>{type}</p>
    }
  </Col>

Caption.propTypes = {
  type: PropTypes.string,
  visible: PropTypes.bool.isRequired,
};

export default Caption;
