var PN532 = (function () {
    function PN532(property) {
        this.testProperty = property;
    }
    PN532.prototype.testFunction = function () {
        console.log(this.testProperty);
    };
    return PN532;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PN532;
