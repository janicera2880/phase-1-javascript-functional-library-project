function myEach(collection, cb) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        cb(collection[i]);
      }
        return collection;
    } else {
      for (const key in collection) {
        cb(collection[key]);
      }
        return collection;
    }
  }
  
  
  function myMap(collection, cb) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let e of collection) {
        // console.log(e);
        result.push(cb(e));
      }
        return result;
    } else {
      for (let key in collection) {
        result.push(cb(collection[key]));
      }
      return result;
    }
  }
  
  function myReduce(collection, cb, acc) {
    // convert collection into array if collection is object
    if (Array.isArray(collection) === false) {
      collection = Object.values(collection);
      // console.log(collection);
    }
    // acc edge case
    if (acc === undefined) {
      acc = collection[0];
      collection = collection.slice(1);
    }
    // array
      for (let i = 0; i < collection.length; i++) {
        acc = cb(acc, collection[i], collection);
      }
      return acc;
  }
  
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection) === false) {
      collection = Object.values(collection);
      }
  
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }
  
  
  function myFilter(collection, predicate) {
    if (Array.isArray(collection) === false) {
      collection = Object.values(collection);
      }
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection) === false) {
      collection = Object.values(collection);
      }
    // return collection.length;
    let size = 0;
    for (let i of collection) {
      size++
    }
    return size;
  }
  
  function myFirst(array, n) {
    if(n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if(n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  function myKeys(object) {
    let result = [];
    for (let key in object) {
      result.push(key);
    }
    return result;
  }
  
  function myValues(object) {
    let result = [];
    for (let key in object) {
      result.push(object[key]);
    }
    return result;
  } 