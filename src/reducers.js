import { feedTypes } from './App';

const rootReducer = (state, action) => {
  console.log(action.type);
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
      const newNews = [...state.news.pages];
      newNews.push(action.payload);
      return {
        ...state,
        [feedTypes.NEWS]: {order: null, pages: newNews}
      }

    case 'news/sortByDate/asc':
      const ascSortedByDate = [...state.news.pages];
      ascSortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      return {
        ...state,
        [feedTypes.NEWS]: {order: 'asc', pages: ascSortedByDate}
      }

    case 'news/sortByDate/desc':
      const descSortedByDate = [...state.news.pages];
      descSortedByDate.forEach(page => page.sort((a, b) => a.time - b.time));
      return {
        ...state,
        [feedTypes.NEWS]: {order: 'desc', pages: descSortedByDate}
      }

    case 'news/sortByTitle/asc':
      const ascSortedByTitle = [...state.news.pages];
      ascSortedByTitle.forEach(page => page.sort((a, b) => {
        if(a.title === undefined) return 1
        if(b.title === undefined) return -1;
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWS]: {order: 'asc', pages: ascSortedByTitle}
      }

    case 'news/sortByTitle/desc':
      const descSortedByTitle = [...state.news.pages];
      descSortedByTitle.forEach(page => page.sort((a, b) => {
        if(a.title === undefined) return -1
        if(b.title === undefined) return 1;
        if(a.title > b.title) return -1;
        if(a.title < b.title) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWS]: {order: 'desc', pages: descSortedByTitle}
      }

    case 'news/sortByDomain/asc':
      const ascSortedByDomain = [...state.news.pages];
      ascSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return 1
        if(b.domain === undefined) return -1;
        if(a.domain < b.domain) return -1;
        if(a.domain > b.domain) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWS]: {order: 'asc', pages: ascSortedByDomain}
      }

    case 'news/sortByDomain/desc':
      const descSortedByDomain = [...state.news.pages];
      descSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return -1
        if(b.domain === undefined) return 1;
        if(a.domain < b.domain) return 1;
        if(a.domain > b.domain) return -1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWS]: {order: 'desc', pages: descSortedByDomain}
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
      const newNewest = [...state.newest.pages];
      newNewest.push(action.payload);
      return {
        ...state,
        [feedTypes.NEWEST]: {order: null, pages: newNewest}
      }

    case 'newest/sortByDate/asc':
      const ascNewestSortedByDate = [...state.newest.pages];
      ascNewestSortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      return {
        ...state,
        [feedTypes.NEWEST]: {order: 'asc', pages: ascNewestSortedByDate}
      }

    case 'newest/sortByDate/desc':
      const descNewestSortedByDate = [...state.newest.pages];
      descNewestSortedByDate.forEach(page => page.sort((a, b) => a.time - b.time));
      return {
        ...state,
        [feedTypes.NEWEST]: {order: 'desc', pages: descNewestSortedByDate}
      }

    case 'newest/sortByTitle/asc':
    const ascNewestSortedByTitle = [...state.newest.pages];
    ascNewestSortedByTitle.forEach(page => page.sort((a, b) => {
      if(a.title === undefined) return 1
      if(b.title === undefined) return -1;
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }));
    return {
      ...state,
      [feedTypes.NEWEST]: {order: 'asc', pages: ascNewestSortedByTitle}
    }

    case 'newest/sortByTitle/desc':
      const descNewestSortedByTitle = [...state.newest.pages];
      descNewestSortedByTitle.forEach(page => page.sort((a, b) => {
        if(a.title === undefined) return -1
        if(b.title === undefined) return 1;
        if(a.title < b.title) return 1;
        if(a.title > b.title) return -1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWEST]: {order: 'desc', pages: descNewestSortedByTitle}
      }

    case 'newest/sortByDomain/asc':
      const ascNewestSortedByDomain = [...state.newest.pages];
      ascNewestSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return 1
        if(b.domain === undefined) return -1;
        if(a.domain < b.domain) return -1;
        if(a.domain > b.domain) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWEST]: {order: 'asc', pages: ascNewestSortedByDomain}
      }

    case 'newest/sortByDomain/desc':
      const descNewestSortedByDomain = [...state.newest.pages];
      descNewestSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return -1
        if(b.domain === undefined) return 1;
        if(a.domain < b.domain) return 1;
        if(a.domain > b.domain) return -1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.NEWEST]: {order: 'desc', pages: descNewestSortedByDomain}
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
      const newShow = [...state.show.pages];
      newShow.push(action.payload);
      return {
        ...state,
        [feedTypes.SHOW]: {order: null, pages: newShow}
      }

    case 'show/sortByDate/asc':
      const ascShowSortedByDate = [...state.show.pages];
      ascShowSortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      return {
        ...state,
        [feedTypes.SHOW]: {order: 'asc', pages: ascShowSortedByDate}
      }

    case 'show/sortByDate/desc':
      const descShowSortedByDate = [...state.show.pages];
      descShowSortedByDate.forEach(page => page.sort((a, b) => a.time - b.time));
      return {
        ...state,
        [feedTypes.SHOW]: {order: 'desc', pages: descShowSortedByDate}
      }

    case 'show/sortByTitle/asc':
    const ascShowSortedByTitle = [...state.show.pages];
    ascShowSortedByTitle.forEach(page => page.sort((a, b) => {
      if(a.title === undefined) return 1
      if(b.title === undefined) return -1;
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }));
    return {
      ...state,
      [feedTypes.SHOW]: {order: 'asc', pages: ascShowSortedByTitle}
    }

    case 'show/sortByTitle/desc':
      const descShowSortedByTitle = [...state.show.pages];
      descShowSortedByTitle.forEach(page => page.sort((a, b) => {
        if(a.title === undefined) return -1
        if(b.title === undefined) return 1;
        if(a.title < b.title) return 1;
        if(a.title > b.title) return -1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.SHOW]: {order: 'desc', pages: descShowSortedByTitle}
      }

    case 'show/sortByDomain/asc':
      const ascShowSortedByDomain = [...state.show.pages];
      ascShowSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return 1
        if(b.domain === undefined) return -1;
        if(a.domain < b.domain) return -1;
        if(a.domain > b.domain) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.SHOW]: {order: 'asc', pages: ascShowSortedByDomain}
      }

    case 'show/sortByDomain/desc':
      const descShowSortedByDomain = [...state.show.pages];
      descShowSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return -1
        if(b.domain === undefined) return 1;
        if(a.domain < b.domain) return 1;
        if(a.domain > b.domain) return -1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.SHOW]: {order: 'desc', pages: descShowSortedByDomain}
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
      const newJobs = [...state.jobs.pages];
      newJobs.push(action.payload);
      return {
        ...state,
        [feedTypes.JOBS]: {order: null, pages: newJobs}
      }

    case 'jobs/sortByDate/asc':
      const ascJobsSortedByDate = [...state.jobs.pages];
      ascJobsSortedByDate.forEach(page => page.sort((a, b) => b.time - a.time));
      return {
        ...state,
        [feedTypes.JOBS]: {order: 'asc', pages: ascJobsSortedByDate}
      }

    case 'jobs/sortByDate/desc':
      const descJobsSortedByDate = [...state.jobs.pages];
      descJobsSortedByDate.forEach(page => page.sort((a, b) => a.time - b.time));
      return {
        ...state,
        [feedTypes.JOBS]: {order: 'desc', pages: descJobsSortedByDate}
      }

    case 'jobs/sortByTitle/asc':
    const ascJobsSortedByTitle = [...state.jobs.pages];
    ascJobsSortedByTitle.forEach(page => page.sort((a, b) => {
      if(a.title === undefined) return 1
      if(b.title === undefined) return -1;
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }));
    return {
      ...state,
      [feedTypes.JOBS]: {order: 'asc', pages: ascJobsSortedByTitle}
    }

    case 'jobs/sortByTitle/desc':
      const descJobsSortedByTitle = [...state.jobs.pages];
      descJobsSortedByTitle.forEach(page => page.sort((a, b) => {
        if(a.title === undefined) return -1
        if(b.title === undefined) return 1;
        if(a.title < b.title) return 1;
        if(a.title > b.title) return -1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.JOBS]: {order: 'desc', pages: descJobsSortedByTitle}
      }

    case 'jobs/sortByDomain/asc':
      const ascJobsSortedByDomain = [...state.jobs.pages];
      ascJobsSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return 1
        if(b.domain === undefined) return -1;
        if(a.domain < b.domain) return -1;
        if(a.domain > b.domain) return 1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.JOBS]: {order: 'asc', pages: ascJobsSortedByDomain}
      }

    case 'jobs/sortByDomain/desc':
      const descJobsSortedByDomain = [...state.jobs.pages];
      descJobsSortedByDomain.forEach(page => page.sort((a, b) => {
        if(a.domain === undefined) return -1
        if(b.domain === undefined) return 1;
        if(a.domain < b.domain) return 1;
        if(a.domain > b.domain) return -1;
        return 0;
      }));
      return {
        ...state,
        [feedTypes.JOBS]: {order: 'desc', pages: descJobsSortedByDomain}
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
