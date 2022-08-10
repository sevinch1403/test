import { FETCH_COCKTAILS, SAVE_DATA } from './ActionType';
export const fetchCocktailsAction = (data) => ({
  type: FETCH_COCKTAILS,
});
export const saveData = (data) => ({
  type: SAVE_DATA,
  payload: data,
});
