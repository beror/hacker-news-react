import React, { useEffect, useContext } from 'react';
import { MainTableContext } from './App';
import '../scss/MainTable.scss';

const MainTable = props => {
  const { state, dispatch } = useContext(MainTableContext);
  let apiUrlPagePreceedingPart = props.apiUrl.substr(0, props.apiUrl.indexOf('.json') - 1);
  let isFeedPageLoading = false;

  const dispatchToggleOrderByDate = () => {
    const toggedOrderType = getToggledOrderType(state[props.feedType].order);

    toggedOrderType && dispatch({type: props.feedType + '/sortByDate/'
      + toggedOrderType});
  }

  const dispatchToggleOrderByTitle = () => {
    const toggedOrderType = getToggledOrderType(state[props.feedType].order);

    toggedOrderType && dispatch({type: props.feedType + '/sortByTitle/'
      + toggedOrderType});
  }

  const dispatchToggleOrderByDomain = () => {
    const toggedOrderType = getToggledOrderType(state[props.feedType].order);

    toggedOrderType && dispatch({type: props.feedType + '/sortByDomain/'
      + toggedOrderType});
  }

  window.onscroll = () => {
    let isUserNearBottom = document.documentElement.offsetHeight - document.documentElement.scrollTop <= window.innerHeight + 300;

    if(isUserNearBottom && !isFeedPageLoading) {
      isFeedPageLoading = true;
      fetch(apiUrlPagePreceedingPart + (state[props.feedType].pages.length + 1) + '.json')
        .then(res => res.json())
        .then(data => {
          dispatch({type: props.feedType + '/addPage', payload: data});
          isFeedPageLoading = false;
        });
    }
  }

  useEffect(() => {
    fetch(apiUrlPagePreceedingPart + (state[props.feedType].pages.length + 1) + '.json')
      .then(res => res.json())
      .then(data => dispatch({type: props.feedType + '/addPage', payload: data}));

      return (() => dispatch({type: props.feedType + '/reset'}));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th
            onClick={() => dispatchToggleOrderByDate()}
            className='small-column non-mobile-cell'>Time ago ⇅
          </th>
          <th
            className='big-column'
            onClick={() => dispatchToggleOrderByTitle()}>Title ⇅
          </th>
          <th
            className='small-column non-mobile-cell'
            onClick={() => dispatchToggleOrderByDomain()}>Domain ⇅
          </th>
        </tr>
      </thead>
      <tbody>
        {
          state[props.feedType].pages.map((page, idx) => page.map((feedItem, idx2) => {
            return (
              <tr key={'tr' + idx + idx2}>
                <td className='small-cell non-mobile-cell'>
                  <a href={'https://news.ycombinator.com/item?id=' + feedItem.id}>
                    <div className='text-limit-3-lines'>
                      {feedItem.time_ago}
                    </div>
                  </a>
                </td>
                <td className='big-cell'>
                  <a href={'https://news.ycombinator.com/item?id=' + feedItem.id}>
                    <div className='text-limit-3-lines'>
                      {feedItem.title}
                    </div>
                  </a>
                </td>
                <td className='small-cell non-mobile-cell'>
                  <a href={'https://news.ycombinator.com/item?id=' + feedItem.id}>
                    <div className='text-limit-3-lines'>
                      {feedItem.domain}
                    </div>
                  </a>
                </td>
              </tr>
            )
            })
          )
        }
      </tbody>
    </table>
  );
}

const getToggledOrderType = order => {
  if(! ['asc', 'desc', null].includes(order)) {
    return;
  }

  return order === 'desc' || order === null ? 'asc' : 'desc';
}

export default MainTable;