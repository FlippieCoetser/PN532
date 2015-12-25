/// <reference path="../typings/tsd.d.ts" />
var PN532 = (function () {
    function PN532(property) {
        this.testProperty = property;
    }
    PN532.prototype.testFunction = function () {
        console.log(this.testProperty);
    };
    return PN532;
})();
module.exports = PN532;
