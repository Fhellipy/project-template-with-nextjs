/**
 * @file Error class for API errors
 */

export class ApiError extends Error {
	constructor(
		message: string,
		public status: number,
		public data: unknown,
	) {
		super(message);
	}
}
