import { resolve } from '$app/paths';
import type { RouteId, Pathname, RouteParams } from '$app/types';
import { links } from './constants';

export type ResolveArgs<T extends RouteId | Pathname> = T extends RouteId
  ? RouteParams<T> extends Record<string, never>
    ? [route: T]
    : [route: T, params: RouteParams<T>]
  : [route: T];

export const resolveAbsolute = <T extends RouteId>(...args: ResolveArgs<T>) =>
  links.self + resolve(...args);
