import React from 'react';
import {Col} from 'react-bootstrap';
import CheckBox from './CheckBox';
import PropTypes from "prop-types";
import style from './Filter.module.scss';

const FilterType = ({ name, types }) => {
  return (
    <Col xs={12} sm md={4} lg={3} xl={3} className={style.criteria}>
      <p><b>{name.toUpperCase()}</b></p>
      {
        types.map((type, i)=>
          <CheckBox type={type} key={i}/>
        )
      }
    </Col>
  )
}

FilterType.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
};

export default FilterType;
