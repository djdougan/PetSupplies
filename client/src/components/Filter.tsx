import React from 'react';

interface Props {
  MaxSize: number;
  Page: number;
  Size: number;
  SortBy: string;
  SortOrder: string;
}

const Filter = (props: Props) => {
  return (
    <div>
      <div><label htmlFor={"sortBy"}>Sort By</label>
       <select>
         

        </select>
      </div>
    </div>
  );
};

export default Filter;
