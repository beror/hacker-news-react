import { feedTypes } from './App';

const rootReducer = (state, action) => {
  const feedType = action.type.substring(0, action.type.indexOf('/'));
  switch(feedType) {
    case 'news':
      return newsReducer(state, action);

    case 'newest':
      return newestReducer(state, action);

    case 'show':
      return showReducer(state, action);

    case 'jobs':
      return jobsReducer(state, action);

    default:
      console.error('rootReducer defaulted. action:', action);
      return state;
  }
}

const newsReducer = (state, action) => {
  switch(action.type) {
    case 'news/addPage':
      const newNews = [...state.news];
      newNews.push(action.payload);
      return {
        ...state,
        [feedTypes.NEWS]: newNews
      }

    case 'news/sortByDate':
      const sortedByDate = [...state.news];
      sortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      return {
        ...state,
        [feedTypes.NEWS]: sortedByDate
      }

    case 'news/sortByTitle':
      const sortedByTitle = [...state.news];
      sortedByTitle.forEach(page => page.sort((a, b) => {
        if(a.title === undefined) return 1
        if(b.title === undefined) return -1;
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWS]: sortedByTitle
      }

    case 'news/sortByDomain':
      const sortedByDomain = [...state.news];
      sortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return 1
        if(b.domain === undefined) return -1;
        if(a.domain < b.domain) return -1;
        if(a.domain > b.domain) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWS]: sortedByDomain
      }

    case 'news/reset':
      return {
        ...state,
        [feedTypes.NEWS]: []
      }

    default:
      console.error('newsReducer defaulted. action:', action);
      return state;
  }
}

const newestReducer = (state, action) => {
  switch(action.type) {
    case 'newest/addPage':
      const newNewest = [...state.newest];
      newNewest.push(action.payload);
      return {
        ...state,
        [feedTypes.NEWEST]: newNewest
      }

    case 'newest/sortByDate':
      const newestSortedByDate = [...state.newest];
      newestSortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      return {
        ...state,
        [feedTypes.NEWEST]: newestSortedByDate
      }

    case 'newest/sortByTitle':
    const newestSortedByTitle = [...state.newest];
    newestSortedByTitle.forEach(page => page.sort((a, b) => {
      if(a.title === undefined) return 1
      if(b.title === undefined) return -1;
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }));
    return {
      ...state,
      [feedTypes.NEWEST]: newestSortedByTitle
    }

    case 'newest/sortByDomain':
      const newestSortedByDomain = [...state.newest];
      newestSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return 1
        if(b.domain === undefined) return -1;
        if(a.domain < b.domain) return -1;
        if(a.domain > b.domain) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWEST]: newestSortedByDomain
      }

    case 'newest/reset':
      return {
        ...state,
        [feedTypes.NEWEST]: []
      }

    default:
      console.error('newestReducer defaulted. action:', action);
      return state;
  }
}

const showReducer = (state, action) => {
  switch(action.type) {
    case 'show/addPage':
      const newShow = [...state.show];
      newShow.push(action.payload);
      return {
        ...state,
        [feedTypes.SHOW]: newShow
      }

    case 'show/sortByDate':
      const showSortedByDate = [...state.show];
      showSortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      return {
        ...state,
        [feedTypes.SHOW]: showSortedByDate
      }

    case 'show/sortByTitle':
    const showSortedByTitle = [...state.show];
    showSortedByTitle.forEach(page => page.sort((a, b) => {
      if(a.title === undefined) return 1
      if(b.title === undefined) return -1;
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }));
    return {
      ...state,
      [feedTypes.SHOW]: showSortedByTitle
    }

    case 'show/sortByDomain':
      const showSortedByDomain = [...state.show];
      showSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return 1
        if(b.domain === undefined) return -1;
        if(a.domain < b.domain) return -1;
        if(a.domain > b.domain) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.SHOW]: showSortedByDomain
      }

    case 'show/reset':
      return {
        ...state,
        [feedTypes.SHOW]: []
      }

    default:
      console.error('showReducer defaulted. action:', action);
      return state;
  }
}

const jobsReducer = (state, action) => {
  switch(action.type) {
    case 'jobs/addPage':
      const newJobs = [...state.jobs];
      newJobs.push(action.payload);
      return {
        ...state,
        [feedTypes.JOBS]: newJobs
      }

    case 'jobs/sortByDate':
      const jobsSortedByDate = [...state.jobs];
      jobsSortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      return {
        ...state,
        [feedTypes.JOBS]: jobsSortedByDate
      }

    case 'jobs/sortByTitle':
    const jobsSortedByTitle = [...state.jobs];
    jobsSortedByTitle.forEach(page => page.sort((a, b) => {
      if(a.title === undefined) return 1
      if(b.title === undefined) return -1;
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }));
    return {
      ...state,
      [feedTypes.JOBS]: jobsSortedByTitle
    }

    case 'jobs/sortByDomain':
      const jobsSortedByDomain = [...state.jobs];
      jobsSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return 1
        if(b.domain === undefined) return -1;
        if(a.domain < b.domain) return -1;
        if(a.domain > b.domain) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.JOBS]: jobsSortedByDomain
      }

    case 'jobs/reset':
      return {
        ...state,
        [feedTypes.JOBS]: []
      }

    default:
      console.error('jobsReducer defaulted. action:', action);
      return state;
  }
}

export default rootReducer;
