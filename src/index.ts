/// <reference path="../typings/tsd.d.ts" />

class PN532 {
	testProperty: string;
	constructor(property: string) {
		this.testProperty = property
	}

	testFunction():void {
		console.log(this.testProperty);
	}

}

module.exports = PN532;