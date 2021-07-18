import React, { useEffect, useContext } from 'react';
import { MainTableContext }  from './App';
import './scss/MainTable.scss';

const MainTable = (props) => {
  const { state, dispatch } = useContext(MainTableContext);
  let apiUrlPagePreceedingPart = props.apiUrl.substr(0, props.apiUrl.indexOf('.json') - 1);
  let isPageLoading = false;

  window.onscroll = () => {
    let isUserNearBottom = document.documentElement.offsetHeight - document.documentElement.scrollTop <= window.innerHeight + 300;

    if(isUserNearBottom && !isPageLoading) {
      isPageLoading = true;
      fetch(apiUrlPagePreceedingPart + (state[props.feedType].length + 1) + '.json')
        .then(res => res.json())
        .then(data => {
          dispatch({type: props.feedType + '/addPage', payload: data});
          isPageLoading = false;
        });
    }
  }

  useEffect(() => {
    fetch(apiUrlPagePreceedingPart + (state[props.feedType].length + 1) + '.json')
      .then(res => res.json())
      .then(data => {
        dispatch({type: props.feedType + '/addPage', payload: data});
      });

      return (() => dispatch({type: props.feedType + '/reset'}));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th
            onClick={() => dispatch({type: props.feedType + '/sortByDate'})}
            className='small-column non-mobile-cell'>Time ago ⇅
          </th>
          <th
            className='big-column'
            onClick={() => dispatch({type: props.feedType + '/sortByTitle'})}>Title ⇅
          </th>
          <th
            className='small-column non-mobile-cell'
            onClick={() => dispatch({type: props.feedType + '/sortByDomain'})}>Domain ⇅
          </th>
        </tr>
      </thead>
      <tbody>
        {
          state[props.feedType].map((page, idx) => page.map((feedItem, idx2) => {
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

export default MainTable;