import React, { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';

interface Props {
}

const SortOrder = (props: Props) => {


  const changeSortOrder = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log(event);
  };

  
  return (
    <div className='SortOrder filter-control' data-testid='SortOrder'>
      <label htmlFor={'SortOrder'}>Sort Order</label>
      <select onChange={changeSortOrder}>
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
      </select>
    </div>
  );
};

export default SortOrder;
