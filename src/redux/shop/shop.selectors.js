import { pipe, memoize } from "../../utils/utils";

const selectShop = (state) => state.shop;

export const selectCollections = pipe(
  selectShop,
  memoize((shop) => shop.collections)
);

export const selectCollectionsForPreview = pipe(
  selectCollections,
  memoize((collections) =>
    Object.keys(collections).map((key) => collections[key])
  )
);

export const selectSingleCollection = (urlParam) =>
  pipe(
    selectCollections,
    memoize((collections) => collections[urlParam])
  );
