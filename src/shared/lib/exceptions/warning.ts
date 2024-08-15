/**
 * @file Error class for API errors
 */

export class Warning extends Error {
	constructor(
		message: string,
		public advice: string,
	) {
		super(message);
	}
}
