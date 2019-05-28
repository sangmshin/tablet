import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { searchHotels } from 'actions/searchHotelsAction';
import { SearchBox } from 'components/SearchBox';

const Search = ({ searchHotels }) => <SearchBox search={searchHotels} />

Search.propTypes = {
  searchHotels: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  searchHotels: bindActionCreators(searchHotels, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);