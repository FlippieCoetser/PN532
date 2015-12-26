/// <reference path="../typings/tsd.d.ts" />
var PN532 = (function () {
    function PN532(property) {
        this.testProperty = property;
    }
    PN532.prototype.testFunction = function () {
        console.log(this.testProperty);
    };
    PN532.prototype.getFirmwareVersion = function () {
        console.log(PN532.Command.Miscellanous.GetFirmwareVersion.toString(16));
    };
    PN532.prototype.getErrorCode = function (code) {
        console.log(PN532.Error[code]);
    };
    // List of Commands // 
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
        },
        RFCommunication: {
            Configuration: 0X32,
            RegulationTest: 0x58
        },
        Initiator: {
            JumpForDEP: 0X56,
            JumpForPSL: 0X46,
            ListPassiveTarget: 0x4A,
            ATR: 0X50,
            PSL: 0X4E,
            DataExchange: 0X40,
            CommunicateThry: 0X42,
            Deselect: 0X44,
            Release: 0X52,
            Select: 0X54,
            AutoPoll: 0X60
        },
        Target: {
            InitAsTarget: 0X8C,
            SetGeneralBytes: 0X92,
            GetData: 0X86,
            SetData: 0X8E,
            SetMetaData: 0X94,
            GetInitiatorCommand: 0X88,
            ResponseToInitiator: 0X90,
            GetTargetStatus: 0X8A
        }
    };
    // List of Errors //
    PN532.Error = {
        0X01: 'Time Out, the target has not answered',
        0X02: 'A CRC error has been detected by the CIU',
        0X03: 'A Parity error has been detected by the CIU',
        0X04: 'During an anti-collision/select operation (ISO/IEC14443-3 Type A and ISO/ IEC18092 106 kbps passive mode), an erroneous Bit Count has been detected',
        0X05: 'Framing error during Mifare operation',
        0X06: 'An abnormal bit-collision has been detected during bit wise anti-collision at 106 kbps',
        0X07: 'Communication buffer size insufficient',
        0X09: 'RF Buffer overflow has been detected by the CIU (bit BufferOvfl of the register CIU_Error)',
        0X0A: 'In active communication mode, the RF field has not been switched on in time by the counterpart (as defined in NFCIP - 1 standard)',
        0X0B: 'RF Protocol error (cf. Error! Reference source not found., description of the CIU_Error register)',
        0X0D: 'Temperature error: the internal temperature sensor has detected overheating, and therefore has automatically switched off the antenna drivers',
        0X0E: 'Internal buffer overflow',
        0X10: 'Invalid parameter (range, format, …)'
    };
    return PN532;
})();
module.exports = PN532;
