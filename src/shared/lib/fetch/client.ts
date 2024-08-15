import { getter, setter } from './get-and-set';
import { type GetterRequestInit, type MutationRequestInit } from './types';

type ApiReturnGuard<R> = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	validate: (value: any) => value is R;
	error: Error;
};

type FetcherInput<O extends GetterRequestInit | MutationRequestInit, R> = {
	url: string;
	method: string;
	options?: O;
	guard?: ApiReturnGuard<R>;
};

type GetterInput<R> = Omit<FetcherInput<GetterRequestInit, R>, 'method'>;

type SetterInput<R> = Omit<FetcherInput<MutationRequestInit, R>, 'method'>;

/**
 * Um cliente de API RESTful. Retorna um objeto com métodos para fazer requisições.
 */
export class ApiClient {
	private baseUrl: string;
	private headers: HeadersInit;

	constructor(baseUrl?: string, headers?: HeadersInit) {
		this.baseUrl = baseUrl ?? '';
		this.headers = headers ?? {};
	}

	// Equivalente a um fetch com método GET
	async get<R>(input: GetterInput<R>) {
		const { url, options, guard } = input;

		const target = `${this.baseUrl}${url}`;

		const result = await getter<R>(target, 'GET', {
			...options,
			headers: { ...this.headers, ...(options?.headers ?? {}) },
		});

		if (guard && !guard.validate(result)) {
			throw guard.error;
		}

		return result;
	}

	// Equivalente a um fetch com método HEAD
	async head<R>(input: GetterInput<R>) {
		const { url, options, guard } = input;

		const target = `${this.baseUrl}${url}`;

		const result = await getter<R>(target, 'HEAD', {
			...options,
			headers: { ...this.headers, ...(options?.headers ?? {}) },
		});

		if (guard && !guard.validate(result)) {
			throw guard.error;
		}

		return result;
	}

	// Equivalente a um fetch com método POST com Body de um tipo passado ou inferido e retorna um tipo passado ou inferido
	async post<R>(input: SetterInput<R>) {
		const { url, options, guard } = input;

		const target = `${this.baseUrl}${url}`;

		const result = await setter<R>(target, 'POST', {
			...options,
			body: options?.body,
			headers: { ...this.headers, ...(options?.headers ?? {}) },
		});

		if (guard && !guard.validate(result)) {
			throw guard.error;
		}

		return result;
	}

	// Equivalente a um fetch com método PUT com Body de um tipo passado ou inferido e retorna um tipo passado ou inferido
	async put<R>(input: SetterInput<R>) {
		const { url, options, guard } = input;

		const target = `${this.baseUrl}${url}`;

		const result = await setter<R>(target, 'PUT', {
			...options,
			body: options?.body,
			headers: { ...this.headers, ...(options?.headers ?? {}) },
		});

		if (guard && !guard.validate(result)) {
			throw guard.error;
		}

		return result;
	}

	// Equivalente a um fetch com método PATCH com Body de um tipo passado ou inferido e retorna um tipo passado ou inferido
	async patch<R>(input: SetterInput<R>) {
		const { url, options, guard } = input;

		const target = `${this.baseUrl}${url}`;

		const result = await setter<R>(target, 'PATCH', {
			...options,
			body: options?.body,
			headers: { ...this.headers, ...(options?.headers ?? {}) },
		});

		if (guard && !guard.validate(result)) {
			throw guard.error;
		}

		return result;
	}

	// Equivalente a um fetch com método DELETE com Body de um tipo passado ou inferido e retorna um tipo passado ou inferido
	async delete<R>(input: SetterInput<R>) {
		const { url, options, guard } = input;

		const target = `${this.baseUrl}${url}`;

		const result = await setter<R>(target, 'DELETE', {
			...options,
			body: options?.body,
			headers: { ...this.headers, ...(options?.headers ?? {}) },
		});

		if (guard && !guard.validate(result)) {
			throw guard.error;
		}

		return result;
	}
}
