import { Store } from '../../models';

export const selectHasFailed = (store: Store) => store.request.hasFailed;
export const selectIsLoading = (store: Store) => store.request.isLoading;
