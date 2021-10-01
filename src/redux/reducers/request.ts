import {
  TOURNAMENTS_GET,
  TOURNAMENTS_GET_ERROR,
  TOURNAMENTS_GET_SUCCESS
} from '../../constants/reduxActions';
import { Request } from '../../models';

const initialState: Request = {
  isLoading: false,
  hasFailed: false
};

export default function request(
  state: Request = initialState,
  action: any //TODO
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
