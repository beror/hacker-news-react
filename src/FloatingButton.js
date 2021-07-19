import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MainTableContext } from './App';
import './scss/FloatingButton.scss';

const FloatingButton = () => {
  const { state, dispatch } = useContext(MainTableContext);
  const feedType = useLocation().pathname.substring(1);

  const dispatchToggleOrderByDate = () => {
    if(state[feedType].order === 'asc') {
      dispatch({type: feedType + '/sortByDate/desc'});
    } else if(state[feedType].order === 'desc' || state[feedType].order === null) {
      dispatch({type: feedType + '/sortByDate/asc'});
    }
  }

  return (
    <button
      onClick={() => dispatchToggleOrderByDate()}
      className='floating-button'>⇅<br/>DATE
    </button>
  );
}

export default FloatingButton;