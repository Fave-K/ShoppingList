import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  products: [
    {
      Toiletries: {
        tissue: 25,
        lotion: 190,
        bathingSoap: 90,
        towel: 1150,
      },
    },
    {
      Hardware: {
        pipe: 300,
        hammer: 1050,
        nails: 400,
        ironSheets: 800,
      },
    },
    {
      Food: {
        fries: 200,
        chapati: 20,
        beef: 440,
        chicken: 800,
      },
    },
    {
      Electronics: {
        ironBox: 3500,
        smartphone: 50000,
        television: 400000,
        soundSystem: 20000,
      },
    },
  ],
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  shopping: shoppingReducer,
});
