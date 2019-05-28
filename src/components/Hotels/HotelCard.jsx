import React, { memo, createRef, useState, useEffect } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import style from './Hotels.module.scss';
import PropTypes from "prop-types";
import Caption from './Caption';
import heart from './heart-selected.svg';
import unheart from './heart-unselected.svg';

const HotelCard = memo( ({ source, bookmark, unbookmark }) => {
  // console.log(source);
  const [ isAnimation, setAnimation ] = useState(true)
  const [ isVisible, setVisible ] = useState(false)
  const caption = createRef();
  const hotel_img = createRef();

  const onResize = e => {
    window.innerWidth < 992 && window.innerWidth > 575
    ? setAnimation(false)
    : setAnimation(true)
  }

  useEffect(()=> {

    window.innerWidth < 992 && window.innerWidth > 575 
    && setAnimation(false)

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)

  }, [])

  const animate = direction => {
    if (!isAnimation) return;

    const _img = hotel_img.current
    const _caption = caption.current.firstElementChild;

    if (direction === 'up') {
      _img.classList.add(style.zeroHeight)
      _caption.classList.add(style.fullHeight)
      setVisible(true)
    } else {
      _img.classList.remove(style.zeroHeight)
      _caption.classList.remove(style.fullHeight)
      setVisible(false)
    }
  }

  const additionalCaptions = [
    source.address[0],
    source.amenities[0], 
    source.phone
  ]
  
  return (
    <Col xs={12} sm={6} md={4} lg={4} xl={4} 
      onMouseOver={()=> animate('up')} 
      onMouseOut={()=> animate()} 
      className={style.card}
    >
      <div className={style.card_wrapper} ref={hotel_img}>
        <Image 
          className={style.hotelImg} 
          src={source.images && `https://${source.images[0].hotrooms_large_url}`} 
          alt="Hotel Image" fluid 
        />

        <div className={style.hotel_name}>
          <h1>{source.hotel_name}</h1>
        </div>

        <Image 
          onClick={source.bookmarked ? unbookmark : bookmark} 
          className={style.heart} 
          src={source.bookmarked ? heart : unheart} 
          width={"40px"}
        />

      </div>
      <div ref={caption}>
        <Row className={style.detail_wrapper}>
          <Caption type={source.criteria.atmosphere} visible={true}/>
          <Caption type={source.criteria.style} visible={true}/>
          {
            additionalCaptions.map( (type, i) => 
              <Caption type={type} visible={isVisible} key={i}/>
            )
          }
        </Row>
      </div>
    </Col>
  )
})


HotelCard.propTypes = {
  source: PropTypes.object.isRequired,
  bookmark: PropTypes.func.isRequired,
  unbookmark: PropTypes.func.isRequired,
};

export default HotelCard;
