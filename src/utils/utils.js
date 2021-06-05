import './polyfill';

export const memoize = (fn) => {
  let prevInput = null;
  let prevOutput = null;

  return (...args) => {

    return Object.areEqual(args, prevInput) ?
      prevOutput :
      prevInput = args,
      prevOutput = fn(...args);
  };
};

export const pipe = (...functions) =>
  functions.reduceRight((pipedFns, fn) =>
    (...args) => pipedFns(fn(...args)),
    x => x
  );