(function() {
    "use strict";

    function reverseArray(arr) {
        var newArray = [];
        var i = arr.length - 1;
        for (i = arr.length - 1; i >= 0; i--) {
            newArray.push(arr[i]);
        }
        return newArray;
    }

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

    function arrayToList(arr) {
        var list = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            list = prepend(arr[i], list);
        }
        return list;
    }

    function prepend(i, list) {
        var newList = {
            value: i,
            rest: list.rest === undefined ? null : list
        };
        return newList
    }

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
    var simpleAssert = function(expected, found) {
        context("Expected: (" + expected + ") Found: (" + found + ')', function() {
            it("the result is: " + found, function() {
                assert.deepEqual(expected, found);
            });
        });
    };
    var objectAssert = function(expected, found) {
        context("Expected: (" + expected + ") Found: (" + found + ')', function() {
            it("the result is: " + found, function() {
                expect(expected).to.equal(found);
            });
        });
    };
    console.log(arrayToList([10, 20]));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    console.log(prepend(10, prepend(20, null)));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(nth(arrayToList([10, 20, 30]), 1));
    // → 20
    simpleAssert(listToArray([{
        'value': 1,
        rest: 'list'
    }, {
        value: 2,
        rest: 'list'
    }, {
        value: 3,
        rest: 'list'
    }]), ["value:1 rest:list", "value:2 rest:list", "value:3 rest:list"]);
    simpleAssert(reverseArray([1, 2, 3]), [3, 2, 1]);
    simpleAssert(reverseArrayInPlace([4, 5, 6]), [6, 5, 4]);
    console.log(arrayToList([1, 2, 3]), [{
        value: 1,
        rest: "list"
    }, {
        value: 2,
        rest: "list"
    }, {
        value: 3,
        rest: "list"
    }]);
}());