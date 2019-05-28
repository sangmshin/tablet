import React, { useState, createRef, useEffect } from 'react';
import style from './Filter.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import SavedHotel from './SavedHotel';
import up from './chevron-thin-up.svg';
import down from './chevron-thin-down.svg';
import FilterType from './FilterType';
import criterias from './criterias.json';

const FilterWrapper = ({ hotels }) => {
  const filterEl = createRef()

  const [ visible, setVisible ] = useState(false)

  const hideShow = () => {
    setVisible(!visible)
    filterEl.current.classList.toggle(style.hide)
  }
  
  useEffect(()=> {
    hotels.filteredItem.length > 0 
    && filterEl.current.classList.remove(style.hide);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
   <Container>
     <Row>
       <Col className={style.filter_toggle}>
          <div>
            <p onClick={hideShow}>
              Filter by &nbsp;
              <img src={visible ? up : down} width="20" alt="arrow"/>
            </p>
          </div>
        <SavedHotel/>
       </Col>       
     </Row>
    <div ref={filterEl} className={style.hide}>
     <Row>
        {
          criterias.map((criteria, i)=>
            <FilterType key={i} {...criteria}/>
          )
        }
     </Row>
    </div>
   </Container> 
  )
}

export default FilterWrapper;
