import * as actionTypes from "../actionTypes"

import { Alert } from "react-native"

import handleError from "../../utils/handleError"

const initialState = {
  comunicazioni: [],
  isLoading: false,
  isRefreshing: false,
  isLoadingPost: false
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMUNICAZIONI_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_COMUNICAZIONI_SUCCESS:
      return {
        ...state,
        comunicazioni: action.comunicazioni,
        isLoading: false
      };
    case actionTypes.FETCH_COMUNICAZIONI_ERROR:
      handleError(action.error)
      return {
        ...state,
        isLoading: false
      };
    case actionTypes.REFRESH_COMUNICAZIONI_START:
      return {
        ...state,
        isRefreshing: true,
      }
    case actionTypes.REFRESH_COMUNICAZIONI_SUCCESS:
      return {
        ...state,
        isRefreshing: false,
        comunicazioni: action.comunicazioni
      }
    case actionTypes.REFRESH_COMUNICAZIONI_ERROR:
      handleError(action.error)
      return {
        ...state,
        isRefreshing: false
      }
    case actionTypes.POST_COMUNICAZIONE_START:
      return {
        ...state,
        isLoadingPost: true
      };
    case actionTypes.POST_COMUNICAZIONE_SUCCESS:
      Alert.alert("Comunicazione inviata con successo!")
      return {
        ...state,
        comunicazioni: [...state.comunicazioni, action.comunicazione],
        isLoadingPost: false
      };
    case actionTypes.POST_COMUNICAZIONE_ERROR:
      handleError(action.error)
      return {
        ...state,
        isLoadingPost: false
      };
    case actionTypes.REMOVE_ONE_COMUNICAZIONE:
      const newComunicazioni = state.comunicazioni.filter(item => item._id !== action.id)
      return {
        ...state,
        comunicazioni: newComunicazioni
      };
    default:
      return state;
  }
};

export default comunicazioniReducer;