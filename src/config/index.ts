import { Console } from '../types';

export const logger: Console = console;

export const isBrowserEnv = typeof window !== 'undefined';
