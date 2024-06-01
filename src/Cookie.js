

/**
 * @param {string} name
 */
export function getCookie(name) {
    name = encodeURIComponent(name);
    let matches = document.cookie.match(
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
 * @param {number} days
 */
export function setCookie (name, value, days = 0, path = '/')
{
    name = encodeURIComponent(name);
    value = encodeURIComponent(value || "");
    let expires = "";
    if (days > 0) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=" + path;
}