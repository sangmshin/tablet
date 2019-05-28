/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import style from './Bookmark.module.scss';
import {Button} from 'react-bootstrap';
import PropTypes from "prop-types";

const BookmarkItem = ({ source, unbookmark }) =>
  <ul className={style.bookmark_ul}>
    <li>
      <a href={`https://www.tablethotels.com${source.canonical_url}`} className={style.fav_link} target="_blank" rel="noopener">
        {source.hotel_name}
      </a>

      <Button 
        onClick={unbookmark}
        className={style.remove_btn} 
      >
        Remove
      </Button>

    </li>
  </ul>

BookmarkItem.propTypes = {
  source: PropTypes.object.isRequired,
  unbookmark: PropTypes.func.isRequired,
};

export default BookmarkItem;