/// <reference path="../typings/tsd.d.ts" />
var PN532 = (function () {
    function PN532(property) {
        this.testProperty = property;
    }
    PN532.prototype.testFunction = function () {
        console.log(this.testProperty);
    };
    PN532.prototype.getFirmwareVersion = function () {
        console.log(PN532.Command.Miscellanous.ReadGPIO.toString(16));
    };
    PN532.Command = {
        Miscellanous: {
            Diagnose: 0X00,
            GetFirmwareVersion: 0x02,
            GetGeneralStatus: 0x04,
            ReadRegister: 0x06,
            WriteRegister: 0x08,
            ReadGPIO: 0x0C,
            WriteGPIO: 0x0E,
            SetSerialBaudRate: 0x10,
            SetParameters: 0x12,
            SAMConfiguration: 0x14,
            PowerDown: 0x16
        }
    };
    return PN532;
})();
module.exports = PN532;
