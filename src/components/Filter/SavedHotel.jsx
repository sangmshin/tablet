import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SavedHotel = ({ hotels }) => {

  const savedNumber = hotels.data
        && hotels.data.hotels.filter(({ _source })=> _source.bookmarked).length
  return (
    <>
      {
        savedNumber > 0
        && <p>{savedNumber} Saved {savedNumber > 1 ? 'Hotels' : 'Hotel'}</p>
      }
    </>
  )
}

SavedHotel.propTypes = {
  hotels: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
)(SavedHotel);



