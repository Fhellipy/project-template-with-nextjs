import { ApiError } from '../exceptions/api-error';

// Faz o parsing para JSON e verifica possíveis erros no processo
export async function parseJSON<T>(response: Response) {
	const json = await response.json();

	// Verifica se o resultado da requisição é válido
	if (response.status < 200 || response.status >= 400) {
		if (json.error) {
			throw new ApiError(json.error, response.status, json);
		}

		if (json.message) {
			throw new ApiError(json.message, response.status, json);
		}

		if (json.erro) {
			throw new ApiError(json.erro, response.status, json);
		}

		if (json.err) {
			throw new ApiError(json.err, response.status, json);
		}

		throw new ApiError(json, response.status, json);
	}

	return json as T;
}
