export function api(url, data, options = {method: 'POST'}) {
    let TechError = 'Could not process the request due to technical error. Please contact support.';
    return new Promise((accept, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(options.method, url);
        if (options?.headers?.csrf) {
            xhr.setRequestHeader('X-CSRF-TOKEN', options.headers.csrf);
        }
        if (options.jsonRequest) {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        }
        if (options.authCookieName) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie(options.authCookieName));
        }
        xhr.onload = function () {
            if (xhr.status === 401) { // analyze HTTP status of the response
                reject({success: false, status: xhr.status, message: xhr.statusText});
            } else if (xhr.status !== 200) { // analyze HTTP status of the response
                console.log(`${xhr.status}: ${xhr.statusText}`);
                reject({success: false, message: TechError});
            } else { // send the result
                accept(JSON.parse(xhr.response));
            }
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject({success: false, message: TechError});
        };
        try {
            xhr.send(data);
        } catch (e) {
            console.log(e);
            reject({success: false, message: TechError});
        }

    });
}
