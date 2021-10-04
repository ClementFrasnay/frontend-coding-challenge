import { Action } from 'redux';
import {
  TOURNAMENTS_GET,
  TOURNAMENTS_GET_ERROR,
  TOURNAMENTS_GET_SUCCESS
} from '../../constants/reduxActions';
import { Request } from '../../models';
import { initialState } from '../store/initialState';

export default function request(
  state: Request = initialState.request,
  action: Action
) {
  switch (action.type) {
    case TOURNAMENTS_GET:
      return {
        ...state,
        isLoading: true,
        hasFailed: false
      };
    case TOURNAMENTS_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasFailed: false
      };
    case TOURNAMENTS_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        hasFailed: true
      };
    default:
      return state;
  }
}
