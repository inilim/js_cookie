

/**
 * @param {string} name
 */
export function getCookie(name) {
    name = encodeURIComponent(name);
    let matches = getCookieAsString().match(
        new RegExp(
            "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
    );
    return matches ? decodeURIComponent(matches[1]) : null;
}

/**
 * @param {string} name
 * @param {string|null} value
 * @param {string} path
 * @param {number} seconds
 */
export function setCookie (name, value, seconds = 0, path = '/')
{
    name = encodeURIComponent(name);
    value = encodeURIComponent(value || "");
    let expires = "";
    if (seconds > 0) {
        let date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=" + path;
}

/**
 * @returns {object}
 */
export function getCookieAsObject () {
    let cookies = getCookieAsString();
    if(cookies.length === 0) return {};
    return cookies
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key,value]) =>
        ({...accumulator, [decodeURIComponent(key.trim())]: decodeURIComponent(value)}),
        {});
}

/**
 * @returns {string}
 */
export function getCookieAsString(){
    return document.cookie;
}