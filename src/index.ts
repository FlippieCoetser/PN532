export class PN532 {
	testProperty: string;
	constructor(property: string) {
		this.testProperty = property
	}

	testFunction():void {
		console.log(this.testProperty);
	}

}