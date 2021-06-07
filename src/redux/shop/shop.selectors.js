import { pipe, memoize } from '../../utils/utils';

const selectShop = state => state.shop;

export const selectCollections = pipe(
  selectShop,
  memoize(shop => shop.collections)
);

export const selectSingleCollection = urlParam => pipe(
  selectCollections,
  memoize(collections => collections.find(collection => collection.routeName === urlParam))
);