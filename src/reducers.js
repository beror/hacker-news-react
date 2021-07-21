const rootReducer = (state, action) => {
  const [feedType, whatToDo, orderType] = [...action.type.split('/')];

  switch(whatToDo) {
    case 'addPage':
      const newPage = [...state[feedType].pages];
      newPage.push(action.payload);
      return {
        ...state,
        [feedType]: {order: null, pages: newPage}
      }

    case 'sortByDate':
      const sortedByDate = [...state[feedType].pages];

      if(orderType === 'asc') {
        sortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      }
      else if(orderType === 'desc') {
        sortedByDate.forEach(page => page.sort((a, b) => a.time - b.time));
      }
      return {
        ...state,
        [feedType]: {order: orderType, pages: sortedByDate}
      }

    case 'sortByTitle':
      const sortedByTitle = [...state[feedType].pages];

      if(orderType === 'asc') {
        sortedByTitle.forEach(page => page.sort((a, b) => {
          if(a.title === undefined) return 1
          if(b.title === undefined) return -1;
          if(a.title < b.title) return -1;
          if(a.title > b.title) return 1;
          return 0;
        }));
      } else if(orderType === 'desc') {
        sortedByTitle.forEach(page => page.sort((a, b) => {
          if(a.title === undefined) return -1
          if(b.title === undefined) return 1;
          if(a.title < b.title) return 1;
          if(a.title > b.title) return -1;
          return 0;
        }));
      }
      return {
        ...state,
        [feedType]: {order: orderType, pages: sortedByTitle}
      }

    case 'sortByDomain':
      const sortedByDomain = [...state[feedType].pages];

      if(orderType === 'asc') {
        sortedByDomain.forEach(page => page.sort((a, b) => {
          if(a.domain === undefined) return 1
          if(b.domain === undefined) return -1;
          if(a.domain < b.domain) return -1;
          if(a.domain > b.domain) return 1;
          return 0;
        }));
      } else if(orderType === 'desc') {
        sortedByDomain.forEach(page => page.sort((a, b) => {
          if(a.domain === undefined) return -1
          if(b.domain === undefined) return 1;
          if(a.domain < b.domain) return 1;
          if(a.domain > b.domain) return -1;
          return 0;
        }));
      }
      return {
        ...state,
        [feedType]: {order: orderType, pages: sortedByDomain}
      }

    case 'reset':
      return {
        ...state,
        [feedType]: {order: null, pages: []}
      }

    default:
      console.error('newsReducer defaulted. action:', action);
      return state;
  }
}

export default rootReducer;