/// <reference path="../typings/tsd.d.ts" />
declare class PN532 {
    static Command: {
        Miscellanous: {
            Diagnose: number;
            GetFirmwareVersion: number;
            GetGeneralStatus: number;
            ReadRegister: number;
            WriteRegister: number;
            ReadGPIO: number;
            WriteGPIO: number;
            SetSerialBaudRate: number;
            SetParameters: number;
            SAMConfiguration: number;
            PowerDown: number;
        };
        RFCommunication: {
            Configuration: number;
            RegulationTest: number;
        };
        Initiator: {
            JumpForDEP: number;
            JumpForPSL: number;
            ListPassiveTarget: number;
            ATR: number;
            PSL: number;
            DataExchange: number;
            CommunicateThry: number;
            Deselect: number;
            Release: number;
            Select: number;
            AutoPoll: number;
        };
        Target: {
            InitAsTarget: number;
            SetGeneralBytes: number;
            GetData: number;
            SetData: number;
            SetMetaData: number;
            GetInitiatorCommand: number;
            ResponseToInitiator: number;
            GetTargetStatus: number;
        };
    };
    static Error: {
        0X01: string;
        0X02: string;
        0X03: string;
        0X04: string;
        0X05: string;
        0X06: string;
        0X07: string;
        0X09: string;
        0X0A: string;
        0X0B: string;
        0X0D: string;
        0X0E: string;
        0X10: string;
    };
    testProperty: string;
    constructor(property: string);
    testFunction(): void;
    getFirmwareVersion(): void;
    getErrorCode(code: number): void;
}
