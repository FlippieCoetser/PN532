/// <reference path="../typings/tsd.d.ts" />
export class PN532 {
	// List of Commands // 
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
			CommunicateThru: 0X42,
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
	}

	// Error Codes //
	static Error = {
		0X01: 'Time Out',
		0X02: 'CRC Error',
		0X03: 'Parity Error',
		0X04: 'Bit Count Error',
		0X05: 'Framing Error',
		0X06: 'Bit-collision',
		0X07: 'Buffer Size',
		0X09: 'RF Buffer Overflow',
		0X0A: 'In-active Communication',
		0X0B: 'RF Protocol Error',
		0X0D: 'Temperature Error',
		0X0E: 'Internal Buffer Overflow',
		0X10: 'Invalid Parameter',
		0X12: 'Invalid Command',
		0X13: 'Invalid Data Format',
		0X14: 'Authentication Error',
		0X23: 'UID Check Byte Error',
		0X25: 'Invalid Device State',
		0X26: 'Invalid Operation',
		0X27: 'Invalid Command',
		0X29: 'Target Released',
		0X2A: 'Invalid ID',
		0X2B: 'Card Removed',
		0X2C: 'NFC Mismatch',
		0X2D: 'Over Current',
		0X2E: 'NAD Missing',
	}

	static Status = {
		Field: {
			0X00: 'External RF Field NOT Present',
			0X01: 'External RF Field Present'
		},
		ReceptionBitRate: {
			0X00: '106 kbps',
			0X01: '212 kbps',
			0X02: '424 kbps'
		},
		TransmissionBitRate: {
			0X00: '106 kbps',
			0X01: '212 kbps',
			0X02: '424 kbps'
		},
		ModulationType: {
			0X00: 'Mifare Passive Mode',
			0X10: 'FeliCa Passive Mode',
			0X01: 'FeliCa Active Mode',
			0X02: 'Innovision Jewel tag'
		}
	}

	Diagnose(input: diagnose): Buffer {
		console.log('Test:' + input.Test);
		input.Parameters && console.log('Input:' + input.Parameters);	 
		return new Buffer('test');
	}

	getFirmwareVersion(): void {
		console.log(PN532.Command.Miscellanous.GetFirmwareVersion);
	}

	getErrorCode(code: number): void {
		console.log(PN532.Error[code]);
	}
}

export interface diagnose {
	Test: Tests;
	Parameters?: number;
    }
    
export const enum Tests {
		Communication = 0X00,
		ROM = 0X01,
		RAM = 0X02,
		Polling = 0X04,
		Echo = 0X05,
		PresenceDetection = 0X06,
		Antenna = 0X07
	}






