export class IndexedDbMock {
    private name: string;
    private version: number;
    private options: object | undefined;
    private db: {[key: string]: any};

    constructor(name: string, version: number, options?: object) {
        this.name = name;
        this.version = version;
        this.options = options;
        this.db = {};
    }

    get(key: string): any {
        return this.db[key];
    }

    put(val: any, key: string) {
        this.db[key] = val;
    }
}

export default (dbName: string, dbVersion: number, options?: object): IndexedDbMock => {
    return new IndexedDbMock(dbName, dbVersion, options);
};
