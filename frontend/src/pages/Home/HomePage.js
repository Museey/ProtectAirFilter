import React, { useEffect, useReducer } from 'react'
import { getAll, search } from '../../services/filterService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import NotFound from '../../components/NotFound/NotFound';

const initialState = { filters: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FILTERS_LOADED':
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { filters } = state;
  const { searchTerm } = useParams();

  useEffect(() => {
    const loadFilters = searchTerm ? search(searchTerm) : getAll();

    loadFilters.then(filters => dispatch({ type: 'FILTERS_LOADED', payload: filters }));
  }, [searchTerm])
  return (
    <>
    <Search />
    {filters.length === 0 && <NotFound />}
      <Thumbnails filters={filters}/>
    </>
  )
}
 