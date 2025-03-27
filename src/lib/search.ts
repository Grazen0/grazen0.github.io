export type Token = string;
export type Query = Token[];

export const parseTokens = (text: string): Token[] => text.toLowerCase().trim().split(/\s+/);

export const containsToken = (text: string) => (token: Token) => text.toLowerCase().includes(token);

export const matchesQuery = (query: Query) => (text: string) => query.every(containsToken(text));
