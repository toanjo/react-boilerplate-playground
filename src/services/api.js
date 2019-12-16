import axios from 'axios';
import { API_REQUEST, apiError, apiSuccess } from '../actions/api';

export const apiService = ({ dispatch }) => next => action => {
    next(action);

    if (action.type.includes(API_REQUEST)) {
        const { body, url, method } = action.payload;
    
        axios({
          method: method,
          url: url,
          data: body,
        })
        .then(response => dispatch(apiSuccess({ response })))
        .catch(error => dispatch(apiError({ error })));
      }
}