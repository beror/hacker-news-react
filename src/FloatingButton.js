import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MainTableContext } from './App';
import './scss/FloatingButton.scss';

const FloatingButton = () => {
  const { state, dispatch } = useContext(MainTableContext);
  const feedType = useLocation().pathname.substring(1);

  return (
    <button
      onClick={() => dispatch({type: feedType + '/sortByDate'})}
      className='floating-button'>⇅<br/>DATE
    </button>
  );
}

export default FloatingButton;