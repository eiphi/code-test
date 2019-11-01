export const GET_DATA = 'GET_DATA';

export const getData = () => async dispatch => {
  const response = await import('../sample-data.json');

  dispatch({
    type: GET_DATA,
    response: response.default
  });
};
