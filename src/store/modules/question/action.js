import {
    GET_QUESTION1_LIST,
    GET_QUESTION2_LIST
  } from '../action-types';
  import moduitApi from 'utils/moduitApi';
  
  export const getQuestOneList = () => async dispatch => {
    await moduitApi({
      method: 'GET',
      url: 'frontend/web/question/one'
    }).then(resp => {
      const { data } = resp;
      dispatch({ type: GET_QUESTION1_LIST, payload: data });
    }).catch(err => {
      console.log(err);
    })
  }

  export const getQuestTwoList = () => async dispatch => {
    await moduitApi({
      method: 'GET',
      url: 'frontend/web/question/two'
    }).then(resp => {
      const { data } = resp;
      dispatch({ type: GET_QUESTION2_LIST, payload: data });
    }).catch(err => {
      console.log(err);
    })
  }