import { publicEnv } from '@/shared/config/env/public';
import { parseJSON } from './parsers';
import {
	type GetterRequestInit,
	type HTTPGetterMethods,
	type HTTPMutationMethods,
	type MutationRequestInit,
	type QueryParams,
} from './types';

function generateQueryParams(params: QueryParams) {
	if (params === null || params === undefined) {
		return '';
	}

	if (params instanceof URLSearchParams) {
		return params.toString();
	}

	return Object.entries(params)
		.map(([key, value]) => {
			if (value === null || value == undefined || !value.toString()) {
				return '';
			}

			return `${key}=${value}`;
		})
		.join('&');
}

/**
 * Faz uma requisição HTTP GET ou HEAD
 *
 * @param url Endpoint da API
 * @param method Método HTTP
 * @param options Opções da requisição
 * @returns Promise com o resultado da requisição
 */
export async function getter<R>(url: string, method: HTTPGetterMethods, options?: GetterRequestInit) {
	// Permite apenas strings como rotas
	let queryParams = '';

	// Se houver parâmetros GET montamos a query
	if (options?.params) {
		const urlParams = generateQueryParams(options?.params);
		queryParams = '?' + urlParams;
	}

	const mimeType = options?.mimeType ?? 'application/json';

	const response = await fetch(`${url}${queryParams}`, {
		method: method,
		...options,
	});

	if (mimeType === 'application/json') {
		return parseJSON<R>(response);
	}

	return response.text() as unknown as R;
}

/**
 * Faz uma requisição HTTP POST, PUT, PATCH ou DELETE
 * @param url Endpoint da API
 * @param method Método HTTP
 * @param options Opções da requisição
 * @returns Promise com o resultado da requisição
 */
export async function setter<R>(url: string, method: HTTPMutationMethods, options?: MutationRequestInit) {
	// Permite apenas strings como rotas
	let queryParams = '';

	// Se houver parâmetros GET montamos a query
	if (options?.params) {
		const urlParams = generateQueryParams(options?.params);
		queryParams = '?' + urlParams;
	}

	const accept = options?.mimeType ?? 'application/json';

	const getBody = () => {
		if (options?.body instanceof FormData) {
			return options?.body;
		}

		if (options?.body instanceof URLSearchParams) {
			return options?.body;
		}

		return JSON.stringify(options?.body);
	};

	const response = await fetch(`${url}${queryParams}`, {
		method: method,
		headers: {
			'Access-Control-Allow-Origin': publicEnv.API_URL ?? '*',
			'Access-Control-Allow-Credentials': 'true',
			'Content-Type': 'application/json; charset=utf8',
			...options?.headers,
		},
		...options,
		body: getBody(),
	});

	if (accept === 'application/json') {
		return parseJSON<R>(response);
	}

	return response as unknown as R;
}
