type LooseAutocomplete<T extends string> = T | Omit<string, T>;

type ValueType = LooseAutocomplete<
	'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array' | 'null'
>;

export type SchematizedObject<T extends object> = {
	[key in keyof T]: ValueType[];
};

/**
 * Verifica se um objeto possui as chaves e tipos especificados
 *
 * @param data Objeto a ser verificado
 * @param checks Chaves e tipos a serem verificados
 * @returns Se o objeto possui as chaves e tipos especificados
 *
 * @example
 * ```ts
 * type Example = {
 *   id: string;
 * }
 *
 * const data: unknown = {
 *  id: "xyz",
 * }
 *
 * const isExample = checkObjectKeysAndTypes<Example>(data, {
 *  id: ["string"],
 * });
 *
 * console.log(isExample); // true
 * ```
 */
export function checkObjectKeysAndTypes<T extends object>(
	data: unknown,
	checks: SchematizedObject<Partial<T>>,
): data is T {
	if (data === null && typeof data !== 'object') return false;

	for (const key in checks) {
		const value = (data as T)[key as keyof T];

		const types = checks[key] ?? [];

		if (types.includes('null')) {
			if (value === null) {
				return true;
			}
		}

		if (value === null) {
			return false;
		}

		if (types.includes('array')) {
			if (Array.isArray(value)) {
				return true;
			}
		}

		return types.includes(typeof value);
	}

	return false;
}
