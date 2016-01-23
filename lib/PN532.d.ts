/// <reference path="../typings/tsd.d.ts" />
export declare class PN532 {
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
            CommunicateThru: number;
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
        0X12: string;
        0X13: string;
        0X14: string;
        0X23: string;
        0X25: string;
        0X26: string;
        0X27: string;
        0X29: string;
        0X2A: string;
        0X2B: string;
        0X2C: string;
        0X2D: string;
        0X2E: string;
    };
    static Status: {
        Field: {
            0X00: string;
            0X01: string;
        };
        ReceptionBitRate: {
            0X00: string;
            0X01: string;
            0X02: string;
        };
        TransmissionBitRate: {
            0X00: string;
            0X01: string;
            0X02: string;
        };
        ModulationType: {
            0X00: string;
            0X01: string;
            0X02: string;
            0X10: string;
        };
    };
    Diagnose(input: diagnose): Buffer;
    getFirmwareVersion(): void;
    getErrorCode(code: number): void;
}
export interface diagnose {
    Test: Tests;
    Parameters?: number;
}
export declare const enum Tests {
    Communication = 0,
    ROM = 1,
    RAM = 2,
    Polling = 4,
    Echo = 5,
    PresenceDetection = 6,
    Antenna = 7,
}
