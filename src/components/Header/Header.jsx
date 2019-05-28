import React, { useState, useEffect } from 'react';
import logo from './tablet-logo-445x110@2x.png';
import style from './Header.module.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [ route, setRoute ] = useState("");
  const changeRoute = () =>  route ? setRoute("") : setRoute("bookmarked-hotels")

  useEffect(() => window.location.pathname.substr(1) ? setRoute("") : setRoute("bookmarked-hotels"), [])
  
  return (
    <header>
      <Container>
        <div className={style.header_wrapper}>
          <img src={logo} className={style.tablet_logo} alt="TabletHotels Logo"></img>
          
          <Link 
            to={`/${route}`} 
            onClick={changeRoute} 
            className={style.fav_button}
          >
            {route ? 'My Favorite Hotels' : 'Back to search'}
          </Link>
          
        </div>
      </Container>
    </header>
  )
}


export default Header;
