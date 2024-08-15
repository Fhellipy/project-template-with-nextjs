/**
 * Métodos HTTP que tem efeitos colaterais no servidor
 */
export type HTTPMutationMethods = 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Métodos HTTP que NÃO tem efeitos colaterais no servidor
 */
export type HTTPGetterMethods = 'GET' | 'HEAD';

/**
 * Tipos de dados que podem ser enviados via JSON
 */
export type JsonSerializable =
	| string
	| number
	| boolean
	| null
	| JsonSerializable[]
	| { [key: string]: JsonSerializable };

/**
 * Tipos de dados que podem ser enviados em requisições HTTP sem efeitos colaterais
 */
export type GetterRequestInit = Omit<RequestInit, 'body'> & {
	// Parâmetros de query string
	params?: QueryParams | URLSearchParams;
	// Tipo de dado que será enviado
	mimeType?: MimeType;
};

/**
 * Tipos de dados que podem ser enviados em requisições HTTP com efeitos colaterais
 */
export interface MutationRequestInit extends GetterRequestInit {
	body?: JsonSerializable | object | undefined;
}

/**
 * Parâmetros de query string
 */
export type QueryParams = Record<string, string | number> | undefined | null | URLSearchParams;

export type MimeType = 'application/json' | 'multipart/form-data' | 'text/plain' | 'text/html';

/**
 * Dados de paginação
 */
export type APIPagination = {
	// Total de registros
	total_itens: number;
	// Página atual
	page: number;
	// Quantidade de registros por página
	limit: number;
	// Página anterior
	previous_page: number | null | undefined;
	// Próxima página (null se não houver próxima página)
	next_page: number | null | undefined;
	// Total de páginas
	total_pages: number;
};

/**
 * Tipo de dado que deve ser retornado pela API por padrão
 */
export type APIResponse<T = unknown> = {
	// Dados da requisição (Presente quando há sucesso, nesses casos error pode ser null ou undefined)
	results: T | null | undefined;
	// Dados de paginação (Presente quando há sucesso e a requisição é paginada)
	pagination: APIPagination | null | undefined;
};
