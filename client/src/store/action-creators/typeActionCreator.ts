import { Dispatch } from 'redux';
import { TypeActionType } from '../action-types';
import { TypeAction } from '../actions';

  const baseUrl = 'http://localhost:5000/';
export const getAllTypes = () => {

  return async (dispatch: Dispatch<TypeAction>) => {
 
    try {   
      dispatch({
        type: TypeActionType.GET_ALL_TYPE,
      });
;
      const response = await fetch(baseUrl + 'types');

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      console.log('TYPE', data);

      dispatch({
        type: TypeActionType.TYPE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TypeActionType.GET_ALL_TYPE_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getTypeById = (id: number) => {
  return async (dispatch: Dispatch<TypeAction>) => {
    dispatch({
      type: TypeActionType.GET_TYPE_BY_ID,
    });

    try {
       const response = await fetch(baseUrl + 'types/'+id);

       if (!response.ok) {
         const message = `An error has occurred: ${response.status}`;
         throw new Error(message);
       }

       const type = await response.json();
       console.log('TYPE', type);

      dispatch({
        type: TypeActionType.GET_TYPE_BY_ID_SUCCESS,
        payload: type,
      });
    } catch (err) {
      dispatch({
        type: TypeActionType.GET_ALL_TYPE_ERROR,
        payload: err.message,
      });
    }
  };
};

// export const createType = (type: IProductType) => {
//   return async (dispatch: Dispatch<TypeAction>) => {
//     dispatch({
//       type: TypeActionType.CREATE_TYPE,
//     });

//     try {
//       const { data } = await axios.post('https://10.0.0.233:45455/products/', {
//         params: {
//           product: product,
//         },
//       });

//       const products = data.map((result: any) => {
//         return result;
//       });

//       dispatch({
//         type: TypeActionType.TYPE_SUCCESS,
//         payload: products,
//       });
//     } catch (err) {
//       dispatch({
//         type: TypeActionType.GET_ALL_TYPE_ERROR,
//         payload: err.message,
//       });
//     }
//   };
// };
