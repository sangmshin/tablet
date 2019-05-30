import React, { memo, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { bookmarkAction, unbookmarkAction } from 'actions/bookmarkAction';
import { cancelSearch } from 'actions/searchHotelsAction';
import PropTypes from "prop-types";
import { Container, Row } from 'react-bootstrap';
import { HotelCard } from 'components/Hotels';
import style from 'components/Hotels/Hotels.module.scss';
import LocalStorageService from "utils/localStorageService";

const Hotels = ({ hotels, bookmark, unbookmark, cancelSearch }) => {

  const _bookmark = (id, source) => {
    bookmark(id)

    const storeHotel = new LocalStorageService()
    storeHotel.add(source)
  }

  const _unbookmark = id => {
    unbookmark(id)

    const removeHotel = new LocalStorageService()
    removeHotel.remove(id)
  }

  useEffect(() => () => cancelSearch(), [bookmark, unbookmark, cancelSearch])

  return (
  <section>
    <Container>
      <Row className={style.cards}>
        {
          hotels.isLoading
          ? <p>loading now...</p>
          : hotels.error
          ? <p>Error has occurred while fetching data. Please try again.</p>
          : hotels.data && hotels.data.hotels.length === 0
          ? <p>No Results Found</p>
          : hotels.data && hotels.filteredItem.length > 0
          ? hotels.data.hotels.filter(({ filtered })=> filtered)
            .map(({ _id, _source }) => 
            <HotelCard 
              key={_id}
              source={_source} 
              bookmark={() => _bookmark(_id, _source)} 
              unbookmark={() => _unbookmark(_id)}
            />
          ) 
          : hotels.data && hotels.filteredItem.length === 0
          && hotels.data.hotels.map(({ _id, _source }) => 
            <HotelCard 
              key={_id}
              source={_source} 
              bookmark={() => _bookmark(_id, _source)} 
              unbookmark={() => _unbookmark(_id)}
            />
          ) 
        }
      </Row>
    </Container>
  </section>
  )
}


Hotels.propTypes = {
  hotels: PropTypes.object.isRequired,
  bookmark: PropTypes.func.isRequired,
  unbookmark: PropTypes.func.isRequired,
  cancelSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  bookmark: bindActionCreators(bookmarkAction, dispatch),
  unbookmark: bindActionCreators(unbookmarkAction, dispatch),
  cancelSearch: bindActionCreators(cancelSearch, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Hotels));
