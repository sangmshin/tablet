import React, { memo } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { bookmarkAction, unbookmarkAction } from 'actions/bookmarkAction';
import PropTypes from "prop-types";
import { Container, Row } from 'react-bootstrap';
import { HotelCard } from 'components/Hotels';
import style from 'components/Hotels/Hotels.module.scss';
import LocalStorageService from "utils/localStorageService";

const Hotels = ({ hotels, bookmark, unbookmark }) => {


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

  return (
  <section>
    <Container>
      <Row className={style.cards}>
        {
          hotels.isLoading
          ? 'loading now...'
          : hotels.error
          ? 'Error has occurred while fetching data. Please try again.'
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
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  bookmark: bindActionCreators(bookmarkAction, dispatch),
  unbookmark: bindActionCreators(unbookmarkAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Hotels));
