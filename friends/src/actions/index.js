import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: promise
  }
};

export const addFriends = () => {
  const newPromise = axios.post('http://localhost:5000/friends');
  return {
    type: ADD_FRIENDS,
    payload: newPromise
  }
};

