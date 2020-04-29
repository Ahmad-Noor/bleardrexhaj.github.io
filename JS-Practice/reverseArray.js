(function() {
    "use strict";
    /**
     * Reverses an array.
     * @param {array} arr - The array.
     * @returns {array} newArray.
     */
    function reverseArray(arr) {
        var newArray = [];
        var i = arr.length - 1;
        for (i = arr.length - 1; i >= 0; i--) {
            newArray.push(arr[i]);
        }
        return newArray;
    }
    /**
     * Reverses an array in place.
     * @param {array} arr - The array.
     * @returns {array} arr.
     */
    function reverseArrayInPlace(arr) {
        var i = 0;
        var el = null;
        for (i = 0; i <= (arr.length / 2); i += 1) {
            el = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = el;
        }
        return arr;
    }
    /**
     * Converts a list to an array.
     * @param {list} list - The list.
     * @returns {array} array.
     */
    function listToArray(list) {
        let newList = list;
        let array = [];
        while (newList.rest != null) {
            array.push(newList.value);
            newList = list.rest;
        }
        array.push(newList.value);
        return array;
    }
    /**
     * Converts an array to a list.
     * @param {array} arr - The list.
     * @returns {list} list.
     */
    function arrayToList(arr) {
        let list = {};
        for (let i = arr.length - 1; i >= 0; i--) {
            list = prepend(arr[i], list);
        }
        return list;
    }
    /**
     * Prepends a list to an element.
     * @param {integer} i - element.
     * @param {list} list - the list.
     * @returns {object} newList.
     */
    function prepend(i, list) {
        var newList = {
            value: i,
            rest: list.rest === undefined ? null : list
        };
        return newList
    }
    /**
     * Recursively returns a element that exists inside a list.
     * @param {list} list - the list.
     * @param {integer} number - element.
     * @param {integer} count - count.
     * @returns {integer} lst.value.
     */
    function nth(list, number = 0, count = 0) {
        let lst = list;
        number = Math.abs(number);
        if (number == count) {
            return lst.value;
        }
        if (lst === null) return undefined;
        lst = lst.rest;
        return nth(lst, number, ++count);
    }
    /**
     * Compares two objects for equality.
     * @param {object} value1 - object.
     * @param {object} value2 - object.
     * @returns {integer} lst.value.
     */
    function deepEqual(value1, value2) {
        if (value1 === value2) return true;
        if (typeof value1 === "object" && typeof value2 === "object") {
            if (value1 != null && value2 != null) {
                let keysOne = Object.keys(value1),
                    keysTwo = Object.keys(value2);
                if (keysOne.length == keysTwo.length) {
                    return keysOne.every(key => deepEqual(value1[key], value2[key]));
                }
                return false;
            }
            return false;
        }
        return false;
    }
    /**
     * Asserts the objects.
     * @param {boolean} expected.
     * @param {boolean} found.
     */
    var objectAssert = function(expected, found) {
        context("Deep Equal Test Expected: (" + expected + ") Found: (" + found + ')', function() {
            it("the result is: " + found, function() {
                assert.equal(expected, found);
            });
        });
    };
    /**
     * Asserts the arrays.
     * @param {boolean} expected.
     * @param {boolean} found.
     */
    var arrayAssert = function(expected, found) {
        context("Reverse Array Assert: (" + expected + ") Found: (" + found + ')', function() {
            it("the result is: " + found, function() {
                assert.deepEqual(expected, found);
            });
        });
    };
    objectAssert(deepEqual({
        a: 1,
        b: 2
    }, {
        a: 1,
        b: 2
    }), true);
    console.log(arrayToList([10, 20]));
    console.log(listToArray({
        value: 1,
        rest: {
            value: 2,
            rest: null
        }
    }));
    console.log(prepend(10, prepend(20, 12)));
    console.log("Find the first element of the array wich is 10: " + nth(arrayToList([10, 20, 30]), 1));
    let obj = {
        here: {
            is: "an"
        },
        object: 2
    };
    console.log(deepEqual(obj, obj));
    // → true
    objectAssert(deepEqual(obj, {
        here: 1,
        object: 2
    }), true);
    // → false
    objectAssert(deepEqual(obj, {
        here: {
            is: "an"
        },
        object: 2
    }), true);
    // → true
    arrayAssert(reverseArray([1, 2, 3]), [3, 2, 1]);
    arrayAssert(reverseArrayInPlace([1, 2, 3]), [3, 2, 1]);
}());