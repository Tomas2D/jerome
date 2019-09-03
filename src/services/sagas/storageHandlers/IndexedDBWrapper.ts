import { openDB as openDBReal } from 'idb';
import openDBMock from './indexedDbMock';
import { isBrowserEnv } from '../../../config';

const DATABASE_NAME = '@ackee/jerome';
const DATABASE_VERSION = 1;
const DATABASE_STORE_NAME = 'keyvaluepairs';

const openDB = isBrowserEnv && window.indexedDB ? openDBReal : openDBMock;

const db = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(nextDb: any) {
        nextDb.createObjectStore(DATABASE_STORE_NAME);
    },
});

export async function get(key: string) {
    return (await db).get(DATABASE_STORE_NAME, key);
}

export async function set(key: string, val: any) {
    return (await db).put(DATABASE_STORE_NAME, val, key);
}
