import { Dispatch } from 'redux';
import { BrandActionType } from '../action-types';
import { BrandAction } from '../actions';

export const getAllBrands = () => {

  const baseUrl= 'http://localhost:5000/';
  return async (dispatch: Dispatch<BrandAction>) => {
    dispatch({
      type: BrandActionType.GET_ALL_BRAND,
    });

    try {
        const response = await fetch(baseUrl + "brands");

        if(!response.ok){    
          const message = `An error has occurred: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();


      dispatch({
        type: BrandActionType.BRAND_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: BrandActionType.BRAND_ERROR,
        payload: err.message,
      });
    }
  };
};

// export const getBrandById = (id: number) => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.GET_BRAND_BY_ID,
//     });

//     try {
//       const { data } = await axios.get('https://10.0.0.233:45455/productstypes/', {
//         params: {
//           id: id,
//         },
//       });

//       const products = data.map((result: any) => {
//         return result;
//       });

//       dispatch({
//         type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
//         payload: products,
//       });
//     } catch (err) {
//       dispatch({
//         type: ActionType.SEARCH_REPOSITORIES_ERROR,
//         payload: err.message,
//       });
//     }
//   };
// };

// export const createBrand = (product: IProduct) => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.CREATE_PRODUCT,
//     });

//     try {
//       const { data } = await axios.post('https://10.0.0.233:45455/productTypes/', {
//         params: {
//           product: product,
//         },
//       });

//       const products = data.map((result: any) => {
//         return result;
//       });

//       dispatch({
//         type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
//         payload: products,
//       });
//     } catch (err) {
//       dispatch({
//         type: ActionType.SEARCH_REPOSITORIES_ERROR,
//         payload: err.message,
//       });
//     }
//   };
// };
