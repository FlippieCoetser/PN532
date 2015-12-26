/// <reference path="../typings/tsd.d.ts" />
class PN532 {
	static Command = {
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
	}

	testProperty: string;
	constructor(property: string) {
		this.testProperty = property
	}
	testFunction():void {
		console.log(this.testProperty);
	}

	getFirmwareVersion(){
		console.log(PN532.Command.Miscellanous.GetFirmwareVersion);
	}
}

module.exports = PN532;