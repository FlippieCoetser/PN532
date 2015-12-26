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
    };
    testProperty: string;
    constructor(property: string);
    testFunction(): void;
    getFirmwareVersion(): void;
}
