Object.prototype.entries = function () {
  const entries = [];

  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      entries.push([key, this[key]]);
    }
  }

  return entries;
};

Object.areEqual = (obj1, obj2) => {
  // Check perfect Equality
  if (obj1 === obj2) return true;
  // Else, Check if is primitive type
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  // 
  if (obj1 === null || obj2 === null) return false;
  // Check type Difference if an array is an argument
  if (Array.isArray(obj1) ^ Array.isArray(obj2)) return false;


  const obj1Entries = Object.prototype.entries(obj1);
  const obj2Entries = Object.prototype.entries(obj2);
  // Equality of Objects length
  if (obj1Entries.length !== obj2Entries.length) return false;
  // Compare inner values
  const areNotEqual = obj1Entries.some(([key1, value1], i) => {

    const [key2, value2] = obj2Entries[i];

    return key1 !== key2 ||
      !Object.areEqual(value1, value2);
  });

  return !areNotEqual;
};