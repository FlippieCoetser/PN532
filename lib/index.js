/// <reference path="../typings/tsd.d.ts" />
(function (Miscellanous) {
    Miscellanous[Miscellanous["Diagnose"] = 0] = "Diagnose";
    Miscellanous[Miscellanous["GetFirmwareVersion"] = 2] = "GetFirmwareVersion";
    Miscellanous[Miscellanous["GetGeneralStatus"] = 4] = "GetGeneralStatus";
    Miscellanous[Miscellanous["ReadRegister"] = 6] = "ReadRegister";
    Miscellanous[Miscellanous["WriteRegister"] = 8] = "WriteRegister";
    Miscellanous[Miscellanous["ReadGPIO"] = 12] = "ReadGPIO";
    Miscellanous[Miscellanous["WriteGPIO"] = 14] = "WriteGPIO";
    Miscellanous[Miscellanous["SetSerialBaudRate"] = 16] = "SetSerialBaudRate";
    Miscellanous[Miscellanous["SetParameters"] = 18] = "SetParameters";
    Miscellanous[Miscellanous["SAMConfiguration"] = 20] = "SAMConfiguration";
    Miscellanous[Miscellanous["PowerDown"] = 22] = "PowerDown";
})(exports.Miscellanous || (exports.Miscellanous = {}));
var Miscellanous = exports.Miscellanous;
var PN532 = (function () {
    function PN532(property) {
        this.testProperty = property;
    }
    PN532.prototype.testFunction = function () {
        console.log(this.testProperty);
    };
    PN532.prototype.getFirmwareVersion = function () {
        console.log(Miscellanous.GetFirmwareVersion);
    };
    return PN532;
})();
module.exports = PN532;
