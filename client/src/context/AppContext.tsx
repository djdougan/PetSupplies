import React from 'react';
import {IProductQueryParameters} from '../store/Interfaces'

// export const AppContext = React.createContext({
//   search: {
//     MaxSize: 100,
//     Page: 1,
//     Size: 50,
//     SortBy: 'id',
//     SortOrder: 'asc',
//     Name: '',
//     Description: '',
//     UPC: '',
//     MinPrice: 0,
//     MaxPrice: 10000000,
//     ProductTypeId: 0,
//     ProductBrandId: 0,
//   },
//   theme: {
//     default: {
//       wj_green: '#017f7c',
//       wj_blue: '#0f3c7e',
//       wj_white: '#fff',
//     },
//   },
// });

export const initialContext = {
  search: {
    MaxSize: 100,
    Page: 1,
    Size: 50,
    SortBy: 'id',
    SortOrder: 'asc',
    Name: '',
    Description: '',
    UPC: '',
    MinPrice: 0,
    MaxPrice: 10000000,
    ProductTypeId: 0,
    ProductBrandId: 0,
  }
};

type ContextType = {
  query: IProductQueryParameters;
  saveSearch: (search: IProductQueryParameters) => void;
};

export const SearchContext = React.createContext<ContextType|null>(null);

const SearchProvider: React.FC<React.ReactNode> = ({ children }) => {

  const [query, setQuery] = React.useState<IProductQueryParameters>(
    {
    MaxSize: 100,
    Page: 1,
    Size: 50,
    SortBy: 'id',
    SortOrder: 'asc',
    Name: '',
    Description: '',
    UPC: '',
    MinPrice: 0,
    MaxPrice: 10000000,
    ProductTypeId: 0,
    ProductBrandId: 0,
  });

  const saveSearch = (search: IProductQueryParameters) => {
    const newSearch: IProductQueryParameters = {
      MaxSize: 100,
      Page: search.Page,
      Size: search.Size,
      SortBy: search.SortBy,
      SortOrder: search.SortOrder,
      Name: search.Name,
      Description: search.Description,
      UPC: search.UPC,
      MinPrice: search.MinPrice,
      MaxPrice: search.MaxPrice,
      ProductTypeId: search.ProductTypeId,
      ProductBrandId: search.ProductBrandId,
    };
        setQuery(newSearch);

  };

  return (
    <SearchContext.Provider value={{ query, saveSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;


// export const ThemeContext = React.createContext<Theme>(DefaultTheme);



// type AppProps = {  
//  search: Search;  
//  theme: Theme;
// }

// ‍const App: React.FC<AppProps> = (props): JSX.Element => { 
//  return (    
//  <SearchContext.Provider value="{props.search}"></SearchContext.Provider>
//  <ThemeContext.Provider value="{props.theme}"></ThemeContext.Provider>
 
//  );};

// export const AppContext = React.createContext({
//   search: {
//     MaxSize: 100,
//     Page: 1,
//     Size: 50,
//     SortBy: 'id',
//     SortOrder: 'asc',
//     Name: '',
//     Description: '',
//     UPC: '',
//     MinPrice: 0,
//     MaxPrice: 10000000,
//     ProductTypeId: 0,
//     ProductBrandId: 0,
//   },
//   theme: {
//     default: {
//       wj_green: '#017f7c',
//       wj_blue: '#0f3c7e',
//       wj_white: '#fff',
//     },
//   },
// });

// export const initialContext = {
//   search: {
//     MaxSize: 100,
//     Page: 1,
//     Size: 50,
//     SortBy: 'id',
//     SortOrder: 'asc',
//     Name: '',
//     Description: '',
//     UPC: '',
//     MinPrice: 0,
//     MaxPrice: 10000000,
//     ProductTypeId: 0,
//     ProductBrandId: 0,
//   },
//   theme: {
//     default: {
//       wj_green: '#017f7c',
//       wj_blue: '#0f3c7e',
//       wj_white: '#fff',
//     },
//   },
// };
