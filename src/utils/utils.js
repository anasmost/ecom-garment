import './polyfill';

export const memoize = (fn, deeplyCompareArgs = false) => {
  let prevArgs = [];
  let prevResult = null;

  return (...args) => {

    return (
      deeplyCompareArgs ?
        Object.areEqual(args, prevArgs) : args.every((arg, i) => arg === prevArgs[i])
    ) ?
      prevResult :
      prevArgs = args,
      prevResult = fn(...args);
  };
};

export const memoizeSelector = selector => memoize(selector, false);

export const pipe = (...functions) =>
  functions.reduceRight((pipedFns, fn) =>
    (...args) => pipedFns(fn(...args)),
    x => x
  );