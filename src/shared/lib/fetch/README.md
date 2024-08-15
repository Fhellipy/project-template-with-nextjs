# Documentação do API Client

Esta é uma documentação para o cliente de API que faz requests para o backend. Ele é baseado no fetch e tem algumas melhorias para facilitar o uso. Ele também tem um envelope para tratar os retornos e retornar erros comuns.

## Motivação

O fetch é uma API nativa do browser que permite fazer requests HTTP. Ele é muito simples e fácil de usar, mas tem algumas limitações que podem ser um problema para alguns casos. Por exemplo, ele não tem um envelope para tratar os retornos e retornar erros comuns. Isso pode ser um problema se você precisar tratar os retornos de uma forma padrão em todos os requests. Além disso, ele não tem um URL base padrão, então você precisa ficar puxando a URL base sempre que for criar um arquivo com requests em um lugar diferente.

## Solução

Para resolver esses problemas, foi criado um envelope para o fetch que permite fazer requests HTTP com um URL base padrão, tratar erros de forma padronizada, atribuir tipos aos retornos, facilitar a passagem de parâmetros e etc.

A nossa pequena biblioteca de fetch é composta basicamente por um única classe, a `ApiClient`. Essa classe tem um construtor que recebe a URL base e retorna um objeto com os métodos HTTP. Cada método HTTP retorna uma promise que pode ser tratada com um `then` ou `await`.

```ts
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const client = new ApiClient(baseUrl);

interface User {
	id: number;
	name: string;
}

// Exemplo de uso
export async function getAllUsers(): Promise<User[]> {
	const users = await client.get<User[]>('/users');

	return users;
}

export async function getUsers(): Promise<User[]> {
	const users = await client.get<User[]>('/users', {
		params: {
			page: 1,
			limit: 10,
		},
	});

	return users;
}

type CreateUserParams = Omit<User, 'id'>;

export async function createUser(user: CreateUserParams): Promise<User> {
	const newUser = await client.post<User>('/users', { body: user });
	return newUser;
}

export async function updateUser(user: User): Promise<User> {
	const updatedUser = await client.put<User>(`/users/${user.id}`, {
		params: {
			id: user.id,
		},
		body: user,
	});

	return updatedUser;
}
```

## Métodos HTTP

A classe `ApiClient` tem os seguintes métodos HTTP:

- **get**: Promise\<T\> - Faz um request HTTP GET

```ts
const response = await client.get<T>('/restante_da_url', {
	params: {
		// Parâmetros da query string
	},
});
```

- **head**: Promise\<T\> - Faz um request HTTP HEAD

```ts
const response = await client.head<T>('/restante_da_url', {
	params: {
		// Parâmetros da query string
	},
});
```

- **post**: Promise\<T\> - Faz um request HTTP POST

```ts
const response = await client.post<T>('/restante_da_url', {
	body: {
		// Corpo da requisição
	},
});
```

- **put**: Promise\<T\> - Faz um request HTTP PUT

```ts
const response = await client.put<T>('/restante_da_url', {
	body: {
		// Corpo da requisição
	},
});
```

- **patch**: Promise\<T\> - Faz um request HTTP PATCH

```ts
const response = await client.patch<T>('/restante_da_url', {
	body: {
		// Corpo da requisição
	},
});
```

- **delete**: Promise\<T\> - Faz um request HTTP DELETE

```ts
const response = await client.delete<T>('/restante_da_url', {
	params: {
		// Parâmetros da query string
	},
});
```

## Tratamento de erros

A classe `ApiClient` tem um tratamento de erros padrão que lança uma exceção caso o status code do response não seja 2xx. Essa exceção é uma instância da classe `ApiError` que tem os seguintes atributos:

- **status**: number - Status code do response
- **message**: string - Mensagem de erro
- **data**: any - Dados processados do response

```ts
try {
	const response = await client.get<T>('/restante_da_url', {
		params: {
			// Parâmetros da query string
		},
	});
} catch (error) {
	if (error instanceof ApiError) {
		// Tratar erro
	}
}
```

## Tipagem

Ao chamar métodos do `ApiClient`, é possível passar um tipo para o response. Isso permite que o retorno do método já tenha o tipo correto e não seja necessário fazer um cast.

```ts
interface User {
	id: number;
	name: string;
}

// response é do tipo User
const response = await client.get<User>('/restante_da_url', {
	params: {
		// Parâmetros da query string
	},
});
```
