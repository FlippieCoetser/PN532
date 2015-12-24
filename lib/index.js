var PN532 = (function () {
    function PN532(property) {
        this.testProperty = property;
    }
    PN532.prototype.testFunction = function () {
        console.log(this.testProperty);
    };
    return PN532;
})();
exports.PN532 = PN532;
