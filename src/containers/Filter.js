import React, { memo } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FilterWrapper } from 'components/Filter';

const Filter = ({ hotels }) =>
  <>
    {
      hotels.data &&
      <section>
          <FilterWrapper hotels={hotels}/>
      </section>
    }
  </>


Filter.propTypes = {
  hotels: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
)(memo(Filter));
