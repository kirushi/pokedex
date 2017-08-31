export function urlImageMapper(result) {
    let params_array = result.url.split( '/' );
    result.id = parseInt(params_array[params_array.length - 2]);
    let paddedId = pad(result.id, 3);
    result.image = `../../assets/${paddedId}.png`;
    return result;
}

export function idImageMapper(result) {
    let paddedId = pad(result.id, 3);
    result.image = `../../assets/${paddedId}.png`;
    return result;
}

export function pad(n, length) {
    var len = length - (''+n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n
}
