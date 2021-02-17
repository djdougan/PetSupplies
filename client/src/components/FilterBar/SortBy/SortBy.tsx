import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../../../context/AppContext';
import { useActions } from '../../../hooks/useActions';
import { IProductQueryParameters } from '../../../store/Interfaces';
import './SortBy.css';

const SortBy = () => {


  const search = useContext(SearchContext);

  
  const changeSortOrder = (event: React.ChangeEvent<HTMLSelectElement>): void =>{
    event.preventDefault();
    let result = event.currentTarget.value.split(',');
    const newSearch = search?.query as IProductQueryParameters;
    if (result){
      newSearch.SortBy = result[0];
      newSearch.SortOrder = result[1];
    }
    console.log(newSearch);
    search?.saveSearch(newSearch);
  }
  return (
    <div className='SortBy filter-control' data-testid='SortBy'>
      <label htmlFor={'sortBy'}>Sort By</label>
      <select onChange={changeSortOrder}>
        <option value='Id,asc'>Default</option>
        <option value='Name,asc'>Name A-Z</option>
        <option value='Name,desc'>Name Z-A</option>
        <option value='Price,asc'>Lowest Price</option>
        <option value='Price,desc'>Highest Price</option>
      </select>
    </div>
  );
};

export default SortBy;
