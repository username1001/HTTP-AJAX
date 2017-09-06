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

// export const addFriends = () => {
//   const promise = axios.put('http://localhost:5000/new-friend');
//   return {
//     type: ADD_FRIENDS,
//     payload: promise 
//   }
// };

export const addFriends = () => {
  axios({
    method: 'put',
    url: 'http://localhost:5000/new-friend',
    data: {
      name: 'Matt',
      age: 21,
      email: 'email@email.com'
    }
  });
};

