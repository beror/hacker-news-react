import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MainTableContext } from './App';
import '../scss/FloatingButton.scss';

const FloatingButton = () => {
  const { state, dispatch } = useContext(MainTableContext);
  const feedType = useLocation().pathname.substring(1);

  const dispatchToggleOrderByDate = () => {
    const toggedOrderType = getToggledOrderType(state[feedType].order);

    toggedOrderType && dispatch({type: feedType + '/sortByDate/'
      + toggedOrderType});
  }

  return (
    <button
      onClick={() => dispatchToggleOrderByDate()}
      className='floating-button'>⇅<br/>DATE
    </button>
  );
}

const getToggledOrderType = order => {
  if(! ['asc', 'desc', null].includes(order)) {
    return;
  }

  return order === 'desc' || order === null ? 'asc' : 'desc';
}

export default FloatingButton;