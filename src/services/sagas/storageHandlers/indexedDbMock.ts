export class IndexedDbMock {
    private db: {[key: string]: any};

    constructor() {
        this.db = {};
    }

    get(key: string): any {
        return this.db[key];
    }

    put(val: any, key: string) {
        this.db[key] = val;
    }
}

export default (): IndexedDbMock => {
    return new IndexedDbMock();
};
