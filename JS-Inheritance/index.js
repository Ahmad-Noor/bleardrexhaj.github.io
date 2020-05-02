(function() {
    "use strict";
    /**
     * Adds the bubble sort as a inherited function on arrays.
     * @returns {array} sortedArray. 
     */
    Array.prototype.bubblesort = function() {
        let len = this.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (this[j] > this[j + 1]) {
                    let tmp = this[j];
                    this[j] = this[j + 1];
                    this[j + 1] = tmp;
                }
            }
        }
        return this;
    }
    /**
     * Adds the bubble sort as a inherited function on arrays.
     * @returns {string} filteredstring. 
     */
    String.prototype.filter = function(word) {
        return this.replace(word, '');
    }
    /**
     * Asserts the array result.
     */
    var arrayAssert = function() {
        var arr = [9, 5, 6, 3, 4, 1];
        var expected = [1, 3, 4, 5, 6, 9];
        var found = arr.bubblesort();
        context("Given Array: (" + arr + ") after sort should be: (" + expected + ')', function() {
            it("the result is: " + found, function() {
                assert.deepEqual(expected, found);
            });
        });
    };
    /**
     * Asserts the string result.
     */
    var stringAssert = function() {
        var str = "BleardTestRexhaj";
        var expected = "BleardRexhaj";
        var found = str.filter('Test');
        context("Given Array: (" + str + ") after filtered should be: (" + expected + ')', function() {
            it("the result is: " + found, function() {
                assert.equal(expected, found);
            });
        });
    };
    arrayAssert();
    stringAssert();
})();