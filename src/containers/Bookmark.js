import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { unbookmarkAction } from 'actions/bookmarkAction';
import PropTypes from "prop-types";
import { BookmarkItem } from 'components/Bookmark';
import { Container } from 'react-bootstrap';
import style from 'components/Bookmark/Bookmark.module.scss';
import LocalStorageService from "utils/localStorageService";

const Bookmark = ({ hotels, unbookmark }) => {

  const _unbookmark = (id) => {
    unbookmark(id)

    const removeHotel = new LocalStorageService()
    removeHotel.remove(id)
  }

  return (
  <section>
    <Container>
      <h1 className={style.title}>My Favorite Hotels</h1>
      {
        hotels.data 
        && hotels.data.hotels.filter(({ _source }) => _source.bookmarked )
          .map(({ _id, _source }, i ) => 
          <BookmarkItem 
            key={i} 
            source={_source} 
            unbookmark={()=> _unbookmark(_id)}
          />
        )
      }
    </Container>
  </section>
  )
} 


Bookmark.propTypes = {
  hotels: PropTypes.object.isRequired,
  unbookmark: PropTypes.func.isRequired,
};

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  unbookmark: bindActionCreators(unbookmarkAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmark);
