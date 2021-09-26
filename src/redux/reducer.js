import {
  ADD_CITY,
  DELETE_CITY,
  ADD_FACULTY,
  DELETE_FACULTY,
} from './action-types';

const INITIAL_STATE = {
  cities: [],
  faculties: [],
  error: '',
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CITY:
      if (state.cities.some(c => c.name === action.payload.name)) {
        return {
          ...state,
          error: 'Такой элемент уже существует! Введите новый!',
        };
      } else {
        return {
          ...state,
          cities: [...state.cities, action.payload],
        };
      }

    case DELETE_CITY:
      return state;

    case ADD_FACULTY:
      if (state.faculties.some(f => f.name === action.payload.name)) {
        return {
          ...state,
          error: 'Такой элемент уже существует! Введите новый!',
        };
      } else {
        return {
          ...state,
          faculties: [...state.faculties, action.payload],
        };
      }

    case DELETE_FACULTY:
      return state;

    default:
      return state;
  }
};
