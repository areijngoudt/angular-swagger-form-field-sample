import { isUndefined } from 'lodash';

export interface IRepository {
    has(key: string): boolean;
    get(key: string): any;
    add(key: string, value: any): void;
}

/**
 * Generic repository 
 */
export class Repository implements IRepository {
    private repository = {};

    constructor() { }

    /**
     * Returns if this repository contains an entry with the given key
     * @param {string} key
     * @returns {boolean} true if repository contains an entry with key, false if not
     */
    has(key: string): boolean {
        return !(isUndefined(this.get(key)));
    }

    /**
     * Returns the repository entry with the given key
     * @param {string} key
     * @returns {T} repository entry with given key. Undefined if !has(key)
     */
    get<T>(key: string): T {
        let value = this.repository[key];
        //if (!isUndefined(key)) { console.log('get', key); }
        return value;
    }

    /**
     * Adds entry with given key and value to the repository.
     * If the respository already contains an entry with this key, it's overwritten with the given value.
     * @param {string} key
     * @returns {T} repository entry with given key. Undefined if !has(key)
     */
    add<T>(key: string, value: T): void {
        //console.log('--> add', key);
        this.repository[key] = value;
    }
}
