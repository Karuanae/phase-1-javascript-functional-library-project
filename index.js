function myEach(collection, callback){
    // Check if collection is an array or object
    if (Array.isArray(collection)) {
        // Iterate over the array
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        // Iterate over the object
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}
// function myMap(collection, callback) {
//     if (Array.isArray(collection)) {
//       // If it's an array, use .map()
//       return collection.map(callback);
//     } else if (typeof collection === 'object') {
//       // If it's an object, iterate over its values and apply the callback
//       return Object.values(collection).map(callback);
//     }
//     return collection;
// }

function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value) => {
      result.push(callback(value));
    });
    return result;
    }

// function myReduce(collection, callback, initialValue) {
//     let accumulator = initialValue;
//     let startIndex = 0;
  
//     // Convert object to array of values if needed
//     const values = Array.isArray(collection) 
//       ? collection 
//       : Object.values(collection);
  
//     // If no initialValue is provided, use first element as initial
//     if (initialValue === undefined && values.length > 0) {
//       accumulator = values[0];
//       startIndex = 1;
//     }
  
//     for (let i = startIndex; i < values.length; i++) {
//       accumulator = callback(accumulator, values[i], i, collection);
//     }
  
//     return accumulator;
//   }



function myReduce(collection, callback, acc) {
    let accumulator = acc;
    let startIndex = 0;
  
    // Convert object to array of values if needed
    const values = Array.isArray(collection) 
      ? collection 
      : Object.values(collection);
  
    // If no initialValue is provided, use first element as initial
    if (acc === undefined && values.length > 0) {
      accumulator = values[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < values.length; i++) {
      accumulator = callback(accumulator, values[i], i, collection);
    }
  
    return accumulator;
  }

//   function myFind(collection, predicate) {
//     let result;
//     myEach(collection, (value, index) => {
//         if (predicate(value, index, collection)) {
//             result = value;
//             return false; // Stop iteration
//         }
//     });
//     return result;
// }


function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
  }


function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value, index) => {
        if (predicate(value, index, collection)) {
            result.push(value);
        }
    });
    return result;
}
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
    return 0;
}
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}
function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}
function mySortBy(array, iteratees) {
    return array.sort((a, b) => {
        for (let iteratee of iteratees) {
            const result = iteratee(a) - iteratee(b);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    });
}
function myFlatten (array, [shallow], newArr = []) {
    if (shallow) {
        return array.reduce((acc, val) => acc.concat(val), newArr);
    } else {
        return array.reduce((acc, val) => {
            if (Array.isArray(val)) {
                return myFlatten(val, [false], acc);
            } else {
                acc.push(val);
                return acc;
            }
        }, newArr);
    }

}
function myKeys(object) {
    return Object.keys(object);
}
function myValues(object) {
    return Object.values(object);
}