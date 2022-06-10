function myEach(collection, alert) {
    let arr = Object.values(collection)
    for (let element of arr) 
    alert(element)
    return collection
    }

function myMap(collection, callback) {
    let arr = Object.values(collection)
    let newArr = []
    arr.forEach(element => newArr.push(callback(element)))
    return newArr
}

function myReduce(collection, callback, ...acc) {
    let arr = Object.values(collection)
    let newAcc;
    let i;
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }
    for(i; i < arr.length; i++) {
        newAcc = callback(newAcc, arr[i], collection)
    }
return newAcc
}

function myFind(arr, callback) {
    for (let i=0; i < arr.length; i++) {
        let element = arr[i]
        if (callback(element)) {
            return element
        }
    }
}

function myFilter(arr, filter) {
    let newArr = []
    for (let i=0; i < arr.length; i++) {
        let element = arr[i]
        if (filter(element)){
            newArr.push(element)
        }
    }
return newArr  
}
function filter(i){
    return i % 2 === 0
}

function mySize(collection) {
    let arrVal = 0;
    for (let i = 0; i < Object.keys(collection).length; i++) {
        arrVal++;
    }
    return arrVal
}

function myFirst(collection, n) {
    if (collection === null)
        return void 0;
            if (n == null)
                return collection[0];
                    if (n < 0)
                        return [];
    return collection.slice(0, n);
};

function myLast(collection, n) {
        if (collection === null)
            return void 0;
            if (n == null)
                return collection[collection.length - 1]
                if (n < 0)
                    return [];
    return collection.slice(-3)
}

function myKeys(collection) {
    let objNames = Object.keys(collection)
    return objNames
}

function myValues(collection) {
    let objVal = Object.values(collection)
    return objVal
}

