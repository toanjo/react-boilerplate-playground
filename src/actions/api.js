export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = ({ body, method, url }) => ({
  type: `${API_REQUEST}`,
  payload: { body, method, url },
});

export const apiSuccess = ({ response }) => ({
  type: `${API_SUCCESS}`,
  payload: response.data
});

export const apiError = ({ error }) => ({
  type: `${API_ERROR}`,
  payload: error
});