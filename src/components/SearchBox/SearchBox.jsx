import React, { useState, memo, useEffect, useRef } from 'react';
import './SearchBox.module.scss';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchBox = memo( ({ search }) => {
  const [ inputValue, setValue ] = useState('')
  const changeInput = e => setValue(e.target.value)
  const keyDown = e => inputValue && e.keyCode === 13 && search(inputValue)

  const textInput = useRef();
  useEffect(() => textInput.current.focus());
  
  return (
    <section>
      <Container>
        <form onSubmit={e => e.preventDefault()}>
          <legend>Where would you like to go?</legend>
          <input 
            value={inputValue} 
            onChange={changeInput} 
            onKeyDown={keyDown}
            ref={textInput}
            id="" 
            type="text" 
            name="location" 
          />
          <input 
            onClick={()=> inputValue && search(inputValue)} 
            // disabled={inputValue ? false : true}
            className="d-sm-none" 
            type="submit" 
            value="SEARCH"
          />
        </form>
      </Container>
    </section>
  )
})

SearchBox.propTypes = {
  search: PropTypes.func.isRequired,
};

SearchBox.defaultProps = {
  search: () => {},
};

export default SearchBox;
