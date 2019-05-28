import React, { memo } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFilterAction, removeFilterAction } from 'actions/filterAction';
import PropTypes from "prop-types";
import style from './Filter.module.scss';

const CheckBox = ({ hotels, type, addFilter, removeFilter }) => {

  const changeHandler = e => 
  e.target.checked 
  ? addFilter(e.target.name) 
  : removeFilter(e.target.name)

  return (
    <div className={style.checkboxes}>
      <input 
        id={type} 
        name={type} 
        type="checkbox" 
        onChange={changeHandler}
        checked={hotels.filteredItem.includes(type)} 
      />
      <label htmlFor={type}>&nbsp;{type}</label>
    </div>
  )
}

CheckBox.propTypes = {
  hotels: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addFilter: bindActionCreators(addFilterAction, dispatch),
  removeFilter: bindActionCreators(removeFilterAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(CheckBox));
