import {getCookieByName, setCookie} from './Cookie';

export class CookiePrefixClassAbstract {
    static prefix = "";

    /**
     * @param {string} name
     * @returns {string}
     */
    static getName(name) {
        return this.prefix + name;
    }

    /**
     * @param {string} name
     */
    static get(name) {
        return getCookieByName(this.getName(name));
    }

    /**
     * @param {string} name
     * @returns {bool}
     */
    static has(name) {
        let res = this.get(name);
        return res !== null;
    }

    /**
     * @param {string} name
     * @param {string} value
     * @returns {bool}
     */
    static isEqual(name, value) {
        if (!this.has(name)) return false;
        return value === this.get(name);
    }

    /**
     * @param {string} name
     * @param {string} value
     * @param {string} path
     * @param {number|null} expires
     */
    static set(name, value, days = 0, path = "/") {
        setCookie(this.getName(name), value, days, path);
    }
}