import React from 'react';
import SortBy from './SortBy/SortBy';
import SortOrder from './SortOrder/SortOrder';
import './FilterBar.css';

interface Props {
}

export const FilterBar: React.FC = () => {

  return (
    <div className='FilterBar' data-testid='FilterBar'>
      {/* <SortOrder/> */}
      <SortBy/>
    </div>
  );
};

export default FilterBar;
