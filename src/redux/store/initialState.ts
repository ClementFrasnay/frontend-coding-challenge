import { Store } from '../../models';

export const initialState: Store = {
  tournaments: [],
  request: {
    isLoading: false,
    hasFailed: false
  }
};
